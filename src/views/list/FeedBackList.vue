<template>
  <a-card :bordered="false">
    <div slot="title">反馈列表</div>
    <s-table
      ref="table"
      size="default"
      rowKey="id"
      :scroll="{ x: 800 }"
      :columns="columns"
      :data="loadData"
    >
    </s-table>
  </a-card>
</template>

<script>
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
      formItemLayout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
      },
      // 表头
      columns: [
        {
          title: '序号',
          customRender: (text, record, index) => `${index + 1}`,
          width: 80
        },
        {
          title: '用户名',
          dataIndex: 'name',
          width: 80
        },
        {
          title: '联系方式',
          dataIndex: 'email',
          width: 80
        },
        {
          title: '主题',
          dataIndex: 'subject',
          width: 100
        },
        {
          title: '反馈内容',
          dataIndex: 'message',
          width: 150
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
      return this.axios
        .get(API.sendEmail, {
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
    }
  }
}
</script>
