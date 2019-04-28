<template>
  <div>
    <!-- loading加载 -->
    <loader-wrapper></loader-wrapper>

    <!-- 顶部导航栏 -->
    <top-nav-menu></top-nav-menu>

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
                <h2>Log In</h2>
                <p>
                  Crowdfunding influencer holy grail analytics accelerator
                  <br>seed round iteration startup growth hacking project.
                </p>
              </div>
              <a-form :form="form" @submit="handleSubmit">
                <div class="row">
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">Name</label>
                      <a-input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        v-decorator="['name', {rules: [{ required: true, message: '请输入用户名' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">User Name</label>
                      <a-input
                        class="form-control"
                        placeholder="User Name"
                        v-decorator="['username', {rules: [{ required: true, message: '请输入User Name' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">Password</label>
                      <a-input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        v-decorator="['password', {rules: [{ required: true, message: '请输入密码' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <label class="control-label">注册类型</label>
                      <a-select style="width: 120px" v-decorator="['type', {initialValue: '1'}]">
                        <a-select-option value="1">加工所</a-select-option>
                        <a-select-option value="2">消费者</a-select-option>
                      </a-select>
                    </a-form-item>
                  </div>

                  <!-- TODO: 在注册类型为加工所时才展示，注意动态校验的逻辑 -->
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
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
                      ></a-input>
                      <img :src="captureUrl" @click="getCapture">
                    </a-form-item>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-12 col-lg-12 col-md-12 col-lg-12 d-flex justify-content-between pass_option"
                  >
                    <div>
                      <input type="checkbox" name="vehicle" value="Bike">
                      <span class="keep_me_login">Keep me Log in</span>
                    </div>
                    <a href title class="forget_pass">Forget Password ?</a>
                  </div>
                  <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                    <div class="login_option">
                      <button type="submit" class="btn btn-default login_btn">Sign Up</button>
                      <br>
                      <span>
                        Already a registered user?
                        <router-link :to="{name: 'TestLogin'}" class="forget_pass">Log In</router-link>
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

export default {
  mixins: [commonPageMixin],
  data() {
    return {
      form: this.$form.createForm(this),
      rand: Math.random()
    }
  },
  computed: {
    captureUrl() {
      return `${API.getCapture}?rand=${this.rand}`
    }
  },
  created() {
    this.getCapture()
  },
  mounted() {
    new WOW().init()
  },
  methods: {
    getCapture() {
      this.rand = Math.random()
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.registe(values)
        }
      })
    },
    registe(formData) {
      this.axios
        .post(API.Register, formData)
        .then(resp => {
          this.redirect(formData.type)
        })
        .finally(() => this.getCapture())
    },
    redirect(type) {
      // 注册类型是消费者，跳转到消费者查询列表
      if (+type === 2) {
        this.$router.push({ name: 'CustomerTableList' })
        return
      }
      // 注册类型是加工所，跳转到加工所查询列表
      if (+type === 1) {
        this.$router.push({ name: 'TableListWrapper' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
