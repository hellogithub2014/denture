<template>
  <div>
    <!-- loading加载 -->
    <loader-wrapper></loader-wrapper>
    <!-- 顶部导航栏 -->
    <common-header :page="'Search'"></common-header>
    <!-- 侧边工具栏 -->
    <side-bar-menu></side-bar-menu>
    <a-card :bordered="false" style="z-index:99;">
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
            <a-col :md="8" :sm="24">
              <span
                class="table-page-search-submitButtons"
                :style="{float: 'right', overflow: 'hidden' }"
              >
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="resetSearchForm">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <s-table
        ref="table"
        size="default"
        rowKey="id"
        :scroll="{ x: 1100 }"
        :columns="columns"
        :data="loadData"
      >
      </s-table>
    </a-card>
    <!-- 通用页面footer -->
    <common-footer></common-footer>
  </div>
</template>

<script>
import moment from 'moment'
import { STable } from '@/components'
import { getRoleList } from '@/api/manage'
import API from 'src/api'
import commonPageMixin from 'src/mixins/commonPageMixin'

export default {
  mixins: [commonPageMixin],
  name: 'TableList',
  components: {
    STable
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
        return new Promise((resolve, reject) => {
          resolve({
            data: [],
            pageNo: params.pageNo,
            pageSize: params.pageSize,
            totalCount: 1,
            totalPage: 1
          })
        })
      } else {
        obj.search = 1
      }
      return this.axios
        .get(API.product, {
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
