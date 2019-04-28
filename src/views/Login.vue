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

    <!-- 登录表单 -->
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
                      <button type="submit" class="btn btn-default login_btn">Log In</button>
                      <br>
                      <span>
                        New User?
                        <router-link :to="{name: 'TestRegister'}" class="forget_pass">Sign Up</router-link>
                      </span>
                    </div>
                  </div>
                </div>
              </a-form>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-7">
            <div class="vission_banner">
              <img src="../assets/images/illustration/login.png" alt>
            </div>
          </div>
        </div>
      </div>
    </section>

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
          this.login(values)
        }
      })
    },
    login(formData) {
      this.axios.post(API.Login, formData).then(resp => {
        // 登录接口需要返回用户类型
        this.redirect(resp.type)
      })
    },
    redirect(type) {
      // 注册类型是消费者，跳转到消费者查询列表
      if (+type === 1) {
        this.$router.push({ name: 'TableListWrapper' })
        return
      }
      // 注册类型是加工所，跳转到加工所查询列表
      if (+type === 2) {
        this.$router.push({ name: 'TableListWrapper' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>