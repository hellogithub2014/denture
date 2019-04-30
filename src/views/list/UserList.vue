<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-card>
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="名称">
                <a-input v-model="queryParam.name" placeholder/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="账户">
                <a-input v-model="queryParam.username" placeholder/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="联系电话">
                <a-input v-model="queryParam.telephone" placeholder/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :offset="16" :sm="24" style="text-align:right">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
    </div>
    <s-table
      ref="table"
      size="default"
      rowKey="id"
      :columns="columns"
      :data="loadData"
    >
    </s-table>
  </a-card>
</template>

<script>
import moment from 'moment'
import { STable } from '@/components'
import { getRoleList } from '@/api/manage'
import API from 'src/api'

export default {
  name: 'TableList',
  components: {
    STable
  },
  data () {
    return {
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
          title: '账户',
          dataIndex: 'username',
          width: 80
        },
        {
          title: '名称',
          width: 80,
          dataIndex: 'name'
        },
        {
          title: '账户类型',
          width: 80,
          dataIndex: 'type'
        },
        {
          title: '电话',
          width: 100,
          dataIndex: 'telephone'
        },
        {
          title: '注册证号',
          width: 100,
          dataIndex: 'certificate_no'
        },
        {
          title: '创建时间',
          width: 100,
          dataIndex: 'create_time'
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => this.getMemberList(Object.assign(parameter, this.queryParam))
    }
  },
  created () {
    this.tableOption()
    getRoleList({ t: new Date() })
  },
  methods: {
    getMemberList (params) {
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
    tableOption () {
      if (!this.optionAlertShow) {
        this.options = {
          alert: {
            show: true,
            clear: () => {
              this.selectedRowKeys = []
            }
          },
          rowSelection: {
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onSelectChange
          }
        }
        this.optionAlertShow = true
      } else {
        this.options = {
          alert: false,
          rowSelection: null
        }
        this.optionAlertShow = false
      }
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>
