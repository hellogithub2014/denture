<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item
        label="材料ID"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'stuff_id',
            {rules: [{ required: true, message: '请输入材料ID' }]}
          ]"
          placeholder="请输入材料ID"
        />
      </a-form-item>
      <a-form-item
        label="义齿ID"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'product_id',
            {rules: [{ required: true, message: '请输入义齿ID' }]}
          ]"
          placeholder="请输入义齿ID"
        />
      </a-form-item>
      <a-form-item
        label="用户名称"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'username',
            {rules: [{ required: true, message: '请输入用户名称' }]}
          ]"
          placeholder="请输入用户名称"
        />
      </a-form-item>
      <a-form-item
        label="材料名称"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'name',
            {rules: [{ required: true, message: '请输入材料名称' }]}
          ]"
          placeholder="请输入材料名称"
        />
      </a-form-item>
      <a-form-item
        label="注册证号"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'certificate_no',
            {rules: [{ required: true, message: '请输入注册证号' }]}
          ]"
          placeholder="请输入注册证号"
        />
      </a-form-item>
      <a-form-item
        label="生产批号"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'produce_no',
            {rules: [{ required: true, message: '请输入生产批号' }]}
          ]"
          placeholder="请输入生产批号"
        />
      </a-form-item>
      <a-form-item
        label="操作员"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-input
          v-decorator="[
            'operator',
            {rules: [{ required: true, message: '请输入操作员' }]}
          ]"
          placeholder="请输入操作员"
        />
      </a-form-item>

      <a-form-item
        label="备注"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
      >
        <a-textarea rows="4" placeholder="备注，选填" v-decorator="[
            'remark',
          ]"/>
      </a-form-item>

      <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center">
        <a-button htmlType="submit" type="primary">提交</a-button>
        <a-button style="margin-left: 8px">保存</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
import API from 'src/api'

export default {
  name: 'BaseForm',
  data() {
    return {
      // form
      form: this.$form.createForm(this)
    }
  },
  methods: {
    // handler
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.addProduct(values)
        }
      })
    },
    addProduct(formData) {
      this.axios.post(API.addProduct, formData).then(resp => {
        // 跳转到加工所查询列表
        this.$router.push({ name: 'TableListWrapper' })
      })
    }
  }
}
</script>
