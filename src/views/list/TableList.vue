<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item
              label="加工所名称"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-input v-model="queryParam.factory_name" placeholder/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item
              label="原材料ID"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-input v-model="queryParam.stuff_id" placeholder/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item
              label="义齿ID(追溯码)"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-input v-model="queryParam.product_id" placeholder/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item
              label="用户名称"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol">
              <a-input v-model="queryParam.username" placeholder/>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24" :offset="8">
            <span
              class="table-page-search-submitButtons"
              :style="{float: 'right', overflow: 'hidden' }"
            >
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <s-table
      ref="table"
      size="default"
      rowKey="id"
      :scroll="{ x: 1500 }"
      :columns="columns"
      :data="loadData"
    >
      <a-button slot="operation" type="primary" size="small">编辑</a-button>
      <a-button slot="operation" style="margin-left:5px;" type="danger" size="small">删除</a-button>
    </s-table>
  </a-card>
</template>

<script>
import moment from 'moment'
import { STable } from '@/components'
import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './modules/CreateForm'
import { getRoleList } from '@/api/manage'
import API from 'src/api'

export default {
  name: 'TableList',
  components: {
    STable,
    CreateForm,
    StepByStepModal
  },
  data () {
    return {
      formItemLayout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
      },
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '序号',
          customRender: (text, record, index) => `${index + 1}`,
          width: 80
        },
        {
          title: 'ID',
          dataIndex: 'id',
          width: 80
        },
        {
          title: '用户ID',
          dataIndex: 'user_id',
          width: 80
        },
        {
          title: '材料ID',
          dataIndex: 'stuff_id',
          width: 80
        },
        {
          title: '义齿ID',
          dataIndex: 'product_id',
          width: 80
        },
        {
          title: '用户名称',
          dataIndex: 'username',
          width: 100
        },
        {
          title: '材料名称',
          dataIndex: 'name',
          width: 100
        },
        {
          title: '注册证号',
          dataIndex: 'certificate_no',
          width: 100
        },
        {
          title: '生产批号',
          dataIndex: 'produce_no',
          width: 100
        },
        {
          title: '操作员',
          dataIndex: 'operator',
          width: 80
        },
        {
          title: '备注',
          dataIndex: 'remark',
          width: 100
        },
        {
          title: '创建时间',
          dataIndex: 'create_time',
          width: 100
        },
        {
          title: 'Action',
          dataIndex: 'operation',
          width: 150,
          align: 'center',
          fixed: 'right',
          key: 'operation',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => this.getProductList(Object.assign(parameter, this.queryParam))
    }
  },
  created () {
    getRoleList({ t: new Date() })
  },
  methods: {
    getProductList (params) {
      const obj = Object.assign({}, params)
      delete obj.pageNo
      delete obj.pageSize
      for (const key in obj) {
        if (!obj[key]) {
          delete obj[key]
        }
      }
      if (JSON.stringify(obj) === '{}') {
        this.$message.error('请输入查询参数')
        return
      }
      return this.axios
        .get(API.memberList, {
          params: {
            ...obj,
            page: params.pageNo,
            size: params.pageSize
          }
        })
        .then(resp => {
          return {
            data: resp.rows,
            pageNo: params.pageNo,
            pageSize: params.pageSize,
            totalCount: +resp.records,
            totalPage: +resp.count
          }
        })
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>
