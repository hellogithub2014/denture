<template>
  <div>
    <!-- loading加载 -->
    <loader-wrapper></loader-wrapper>

    <!-- 顶部导航栏 -->
    <common-header></common-header>

    <!-- Search Box Start Here -->
    <header-search></header-search>

    <!-- 侧边工具栏 -->
    <side-bar-menu></side-bar-menu>

    <!-- 注册 Form -->
    <section class="sign_in">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5">
            <div class="sign_in_form">
              <div class="form_title">
                <h2>Sign Up</h2>
                <p>
                  Crowdfunding influencer holy grail analytics accelerator
                  <br>seed round iteration startup growth hacking project.
                </p>
              </div>
              <a-form :form="form" @submit="handleSubmit">
                <div class="row">
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">账号</label>
                      <a-input
                        type="text"
                        class="form-control"
                        placeholder="账号"
                        v-decorator="['username', {rules: [{ required: true, message: '请输入用户名' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">{{ isSelectInstitution()?"加工所名称":"姓名" }}</label>
                      <a-input
                        class="form-control"
                        :placeholder="isSelectInstitution()?'加工所名称':'姓名'"
                        v-decorator="['name', {rules: [{ required: true, message: '请输入姓名' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">密码</label>
                      <a-input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        v-decorator="['password', {rules: [
                          { required: true, message: '请输入密码' },
                          { validator: validateToNextPassword }
                        ], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">确认密码</label>
                      <a-input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        v-decorator="['confirm', {
                          rules: [
                            { required: true, message: '请再次输入密码' },
                            { validator: compareToFirstPassword }
                          ],
                        }]"
                        @blur="handleConfirmBlur"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">注册类型</label>
                      <a-select
                        class="form-control"
                        v-decorator="['type', {initialValue: userType.customer}]"
                      >
                        <a-select-option :value="userType.institution">加工所</a-select-option>
                        <a-select-option :value="userType.customer">消费者</a-select-option>
                      </a-select>
                    </a-form-item>
                  </div>

                  <!-- 在注册类型为加工所时才展示，注意动态校验的逻辑 -->
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12" v-if="isSelectInstitution()">
                    <a-form-item class="form-group">
                      <label class="control-label">注册证号</label>
                      <a-input
                        class="form-control"
                        placeholder="注册证号"
                        v-decorator="['certificate_no', {rules: [{ required: true, message: '请输入注册证号' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>

                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">手机号码</label>
                      <a-input
                        class="form-control"
                        placeholder="手机号码"
                        v-decorator="['telephone', {rules: [{ required: true, message: '请输入手机号码' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>

                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">图片验证码</label>
                      <a-input
                        class="form-control"
                        placeholder="验证码"
                        v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: ['change', 'blur']}]"
                      >
                        <img slot="suffix" :src="captureUrl" @click="getCapture">
                      </a-input>
                    </a-form-item>
                  </div>
                </div>
                <div class="row">
                  <!-- <div
                    class="col-12 col-lg-12 col-md-12 col-lg-12 d-flex justify-content-between pass_option"
                  >
                    <div>
                      <input type="checkbox" name="vehicle" value="Bike">
                      <span class="keep_me_login">Keep me Log in</span>
                    </div>
                    <a href title class="forget_pass">Forget Password ?</a>
                  </div>-->
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <div class="login_option">
                      <button type="submit" class="btn btn-default login_btn">Sign Up</button>
                      <br>
                      <span>
                        Already a registered user?
                        <router-link :to="{name: 'login'}" class="forget_pass">Log In</router-link>
                      </span>
                    </div>
                  </div>
                </div>
              </a-form>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-7">
            <div class="vission_banner">
              <img src="../assets/images/illustration/login.png" alt class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Sing In  -->

    <!-- 通用页面footer -->
    <common-footer></common-footer>

    <!-- 滚动到顶部 -->
    <scroll-top-icon></scroll-top-icon>
  </div>
</template>

<script>
import API from 'src/api'
import commonPageMixin from 'src/mixins/commonPageMixin'
import _ from 'lodash'

export default {
  mixins: [commonPageMixin],
  data() {
    return {
      form: this.$form.createForm(this),
      confirmDirty: false
    }
  },
  mounted() {
    if (window.WOW) {
      // eslint-disable-next-line no-undef
      new WOW().init()
    }
  },
  methods: {
    isSelectInstitution() {
      return this.form.getFieldValue('type') === this.userType.institution
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          const cloned = _.cloneDeep(values)
          delete cloned.confirm
          if (!this.isSelectInstitution()) {
            delete cloned.certificate_no
          }
          this.registe(cloned)
        }
      })
    },
    registe(formData) {
      this.axios
        .post(API.Register, formData)
        .then(resp => {
          this.redirect(resp.userinfo)
        })
        .finally(() => this.getCapture())
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        // eslint-disable-next-line standard/no-callback-literal
        callback('两次密码不一致')
      } else {
        callback()
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
