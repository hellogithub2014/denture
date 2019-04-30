<template>
  <div>
    <!-- loading加载 -->
    <loader-wrapper></loader-wrapper>
    <!-- 顶部导航栏 -->
    <common-header :page="'Contact'"></common-header>
    <!-- 侧边工具栏 -->
    <side-bar-menu></side-bar-menu>
    <!-- contact page -->
    <section class="contact_page">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-7">
            <div class="contact_banner">
              <img src="../assets/images/illustration/contact.png" alt>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-5">
            <div class="sign_in_form">
              <div class="form_title">
                <h2>Send Us an Email</h2>
              </div>
              <a-form :form="form" @submit="handleSubmit">
                <div class="row">
                  <div class="col-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <a-input
                        class="form-control"
                        placeholder="Name"
                        v-decorator="['name', {rules: [{ required: true, message: '请输入Name' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <a-input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        v-decorator="['email', {rules: [{ required: true, message: '请输入Email' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <a-input
                        type="text"
                        class="form-control"
                        placeholder="Subject"
                        v-decorator="['subject', {rules: [{ required: true, message: '请输入Subject' }], validateTrigger: ['change', 'blur']}]"
                      ></a-input>
                    </a-form-item>
                  </div>
                  <div class="col-12 col-md-12 col-lg-12">
                    <a-form-item class="form-group">
                      <a-textarea
                        class="form-control"
                        placeholder="Message"
                        v-decorator="['message', {rules: [{ required: true, message: '请输入Message' }], validateTrigger: ['change', 'blur']}]"
                      ></a-textarea>
                    </a-form-item>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-12 col-md-12 col-lg-12 d-flex justify-content-between pass_option"
                  >
                    <button type="submit" class="btn btn-default login_btn">Send Us</button>
                    <br>
                  </div>
                </div>
              </a-form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- map location -->
    <section class="map_location">
      <div class="container">
        <div class="footer_top">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
              <div class="contact_location contact_location_left">
                <h3>Our Office</h3>
                <p>
                  Ante amet vitae vulputate odio
                  <br>nulla vel pretium pulvinar aenean.
                </p>
                <ul class="location_info">
                  <li>
                    <i class="flaticon-placeholder"></i>ZHICHUNLI, HAIDIAN
                  </li>
                  <li>
                    <i class="flaticon-push-pin"></i>Beijing, China
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <div class="contact_location contact_location_right">
                <h3>Contact Us</h3>
                <p>
                  Ante amet vitae vulputate odio
                  <br>nulla vel pretium pulvinar aenean.
                </p>
                <ul class="location_info">
                  <li>
                    <i class="flaticon-envelope"></i>admin@moxiaonai.cn
                  </li>
                  <li>
                    <i class="flaticon-phone-call"></i>+86 18089244078
                  </li>
                  <li>
                    <i class="flaticon-global"></i>yichi.fenewbee.com
                  </li>
                </ul>
              </div>
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
// @ is an alias to /src

import Trend from '@/components/Trend'
import AvatarList from '@/components/AvatarList'
import CountDown from '@/components/CountDown/CountDown'
import Ellipsis from '@/components/Ellipsis'
import NumberInfo from '@/components/NumberInfo'
import TagSelect from '@/components/TagSelect'
import { DescriptionList, TagCloud } from '@/components/'
import commonPageMixin from 'src/mixins/commonPageMixin'
import API from 'src/api'
import topBarMenu from 'src/components/top-bar-menu'

const AvatarListItem = AvatarList.AvatarItem
const TagSelectOption = TagSelect.Option

const DescriptionListItem = DescriptionList.Item

export default {
  name: 'Home',
  components: {
    NumberInfo,
    Ellipsis,
    CountDown,
    Trend,
    AvatarList,
    AvatarListItem,
    TagSelect,
    TagSelectOption,
    TagCloud,
    DescriptionList,
    DescriptionListItem,
    topBarMenu
  },
  mixins: [commonPageMixin],

  data () {
    return {
      targetTime: new Date().getTime() + 3900000,
      tagCloudData: [],
      form: this.$form.createForm(this)
    }
  },
  created () {
    this.getTagCloudData()
  },
  mounted () {
    // Testimonial Payment
    $('.slider_content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider_img'
    })
    $('.slider_img').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider_content',
      dots: false,
      prevArrow: "<a href='#'><i class='flaticon-left-arrow icon_left'></i></a>",
      nextArrow: "<a href='#'><i class='flaticon-right-arrow icon_right'></i></a>",
      centerMode: true,
      focusOnSelect: true,
      variableWidth: false,
      arrows: true
    })
  },
  methods: {
    onEndHandle () {
      this.$message.success('CountDown callback!!!')
    },
    onEndHandle2 () {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    },
    getTagCloudData () {
      this.$http.get('/data/antv/tag-cloud').then(res => {
        this.tagCloudData = res.result
      })
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.sendEmail(values)
        }
      })
    },
    sendEmail (formData) {
      this.axios.post(API.sendEmail, formData).then(resp => {
        this.$message.success('发送成功')
        this.form.resetFields()
      })
    }
  }
}
</script>

<style scoped>
.home {
  width: 900px;
  margin: 0 auto;
  padding: 25px 0;
}
.home > .banner {
  text-align: center;
  padding: 25px 0;
  margin: 25px 0;
}
</style>
