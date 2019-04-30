<template>
  <div>
    <!-- dom结构不一致，没有复用 top-nav-menu.vue -->
    <header id="payment" class>
      <!-- 顶部导航栏 -->
      <top-bar-menu></top-bar-menu>
      <div class="intro_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="intro_text">
                <h1
                  class="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".2s"
                  style="visibility: visible; animation-duration: 2s; animation-delay: 0.2s; animation-name: fadeInUp;"
                >All in one solution for your legal payment</h1>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".3s"
                  style="visibility: visible; animation-duration: 2s; animation-delay: 0.3s; animation-name: fadeInUp;"
                >Ante amet vitae vulputate odio nulla vel pretium pulvinar aenean. Rhoncus eget adipiscing etiam arcu. Ultricies justo ipsum nec amet.</p>
                <div
                  class="intro_button d-flex justify-content-center wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay=".3s"
                  style="visibility: visible; animation-duration: 2s; animation-delay: 0.3s; animation-name: fadeInUp;"
                >
                  <a href="/register" class="nav-link active">Sign Up</a>
                  <a href="/search" class="nav-link">Quick Search</a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div
                class="intro_banner wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".4s"
                style="visibility: visible; animation-duration: 2s; animation-delay: 0.4s; animation-name: fadeInUp;"
              >
                <img src="../assets/images/banner/payment.png" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner_shapes">
        <img src="../assets/images/shapes/payment.png" alt class="agency_1 img-fluid">
        <img src="../assets/images/shapes/payment_1.png" alt class="agency_2">
        <img src="../assets/images/shapes/app_3.png" alt class="agency_6">
        <img src="../assets/images/shapes/payment_2.png" alt class="agency_3">
        <img src="../assets/images/shapes/payment_2.png" alt class="agency_4">
        <img src="../assets/images/shapes/payment_3.png" alt class="agency_5">
        <img src="../assets/images/shapes/payment_round.png" alt class="agency_7">
        <img src="../assets/images/shapes/payment_round.png" alt class="agency_77">
        <img src="../assets/images/shapes/payment_t_3.png" alt class="agency_8">
        <img src="../assets/images/shapes/payment_t_3.png" alt class="agency_9">
      </div>
    </header>

    <!-- 侧边工具栏 -->
    <side-bar-menu></side-bar-menu>

    <!-- favorite services -->
    <section class="favorite_services">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="sub_title wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
              <h2>Case integrates with your favorite services</h2>
              <p>Strategy business plan android network effects disruptive infrastructure non disclosure agreement buyer funding success.</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="services_option wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
              <ul>
                <li>
                  <a href title>
                    <img src="../assets/images/client_logos/payment/01.png" alt>
                  </a>
                </li>
                <li>
                  <a href title>
                    <img src="../assets/images/client_logos/payment/02.png" alt>
                  </a>
                </li>
                <li>
                  <a href title>
                    <img src="../assets/images/client_logos/payment/03.png" alt>
                  </a>
                </li>
                <li>
                  <a href title>
                    <img src="../assets/images/client_logos/payment/04.png" alt>
                  </a>
                </li>
                <li>
                  <a href title>
                    <img src="../assets/images/client_logos/payment/05.png" alt>
                  </a>
                </li>
                <li>
                  <a href title>
                    <img src="../assets/images/client_logos/payment/06.png" alt>
                  </a>
                </li>
                <li>
                  <a href title>
                    <img src="../assets/images/client_logos/payment/07.png" alt>
                  </a>
                </li>
                <li>
                  <a href title>
                    <img src="../assets/images/client_logos/payment/08.png" alt>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services section -->

    <!-- Automation Software -->
    <section class="automation_software">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="sub_title wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
              <h2>Unify your operations with our A/R Automation software</h2>
              <p>Vulputate odio nulla vel pretium pulvinar aenean honcus eget adipiscing etiam arcu</p>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-sm-12 col-md-12 col-lg-11">
            <div class="row wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="automation_software_single d-flex">
                  <div class="software_icon">
                    <img src="../assets/images/icons/software_1.png" alt>
                  </div>
                  <div class="software_content">
                    <h4>Payments smoothly</h4>
                    <p>Lorem ipsum dolor sit amet vidi rhoncus dapibus. Pede sed ipsum fringilla etiam ut adipiscing parturient.</p>
                    <a href="#" title>Read More</a>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="automation_software_single d-flex">
                  <div class="software_icon">
                    <img src="../assets/images/icons/software_2.png" alt>
                  </div>
                  <div class="software_content">
                    <h4>Quick messaging</h4>
                    <p>Lorem ipsum dolor sit amet vidi rhoncus dapibus. Pede sed ipsum fringilla etiam ut adipiscing parturient.</p>
                    <a href="#" title>Read More</a>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="automation_software_single d-flex">
                  <div class="software_icon">
                    <img src="../assets/images/icons/software_3.png" alt>
                  </div>
                  <div class="software_content">
                    <h4>Quick messaging</h4>
                    <p>Lorem ipsum dolor sit amet vidi rhoncus dapibus. Pede sed ipsum fringilla etiam ut adipiscing parturient.</p>
                    <a href="#" title>Read More</a>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="automation_software_single d-flex">
                  <div class="software_icon">
                    <img src="../assets/images/icons/software_4.png" alt>
                  </div>
                  <div class="software_content">
                    <h4>Quick messaging</h4>
                    <p>Lorem ipsum dolor sit amet vidi rhoncus dapibus. Pede sed ipsum fringilla etiam ut adipiscing parturient.</p>
                    <a href="#" title>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Automation Software -->

    <!-- Earnings Grow -->
    <section class="earnings_grow">
      <div class="container">
        <div class="row earnings_grow_wrapper">
          <div class="col-12 col-md-6 col-lg-7">
            <div class="earnings_grow_banner">
              <img
                src="../assets/images/illustration/earnins_grow.png"
                alt
                class="wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay=".3s"
              >
              <img
                src="../assets/images/shapes/earnings_grow_shape.png"
                alt
                class="earnings_grow_shape wow fadeInDown"
                data-wow-duration="2s"
                data-wow-delay=".3s"
              >
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-5">
            <div class="earnings_grow_intro">
              <h4
                class="wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay=".3s"
              >Disclosure agreement buyer funding success</h4>
              <h2 class="wow fadeInRight" data-wow-duration="2s" data-wow-delay=".3s">
                Track your earnings
                <br>as they grow
              </h2>
              <p class="wow fadeInRight" data-wow-duration="2s" data-wow-delay=".3s">
                Strategy business plan android network effects disruptive infrastructure non
                <br>disclosure agreement buyer funding success.
              </p>
              <a
                href="#"
                class="default_btn wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay=".3s"
              >Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Earnings Grow -->

    <!-- Testimonial Payment -->
    <section class="testimonial_payment">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="sub_title">
              <h2>Testimonials</h2>
              <p>infrastructure non disclosure agreement buyer funding success.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="testimonial_pro_wrapper">
              <div class="carousel_images slider_img">
                <div class="img_single">
                  <img src="../assets/images/team/testimonial_app.png" alt="2" class="img-fluid">
                </div>
                <div class="img_single">
                  <img src="../assets/images/team/comment_1.jpg" alt="2" class="img-fluid">
                </div>
                <div class="img_single">
                  <img src="../assets/images/team/comment_2.jpg" alt="2" class="img-fluid">
                </div>
                <div class="img_single">
                  <img src="../assets/images/team/comment_3.jpg" alt="2" class="img-fluid">
                </div>
                <div class="img_single">
                  <img src="../assets/images/team/comment_1.jpg" alt="2" class="img-fluid">
                </div>
                <div class="img_single">
                  <img src="../assets/images/team/comment_2.jpg" alt="2" class="img-fluid">
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="testimonial_text_wrapper slider_content">
              <div>
                <div class="single_box wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <p>Ante amet vitae vulputate odio nulla vel pretium pulvinar aenean. Rhoncus eget adipiscing etiam arcu. Ultricies justo ipsum nec amet. Ultricies integer donec curabitur aliquam ridiculus eleifend veni dapibus aenean cras a quis.</p>
                  <h4>
                    Angle Hoo Yoo -
                    <span>Canada</span>
                  </h4>
                </div>
              </div>
              <div>
                <div class="single_box wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
                  <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. . Great service, great hosting, and the staff are amazing.</p>
                  <h4>
                    Angle Hoo Yoo -
                    <span>Canada</span>
                  </h4>
                </div>
              </div>
              <div>
                <div class="single_box wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                  <p>I must explain to you how all this mistaken idea of will give you a complete denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                  <h4>
                    Angle Hoo Yoo -
                    <span>Canada</span>
                  </h4>
                </div>
              </div>
              <div>
                <div class="single_box wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                  <p>Early adopters stock value proposition angel investor beta gen-z freemium partner network infographic funding deployment rockstar social proof low hanging fruit. churn rate funding graphical user interface validation ownership market iteration.</p>
                  <h4>
                    Angle Hoo Yoo -
                    <span>Canada</span>
                  </h4>
                </div>
              </div>
              <div>
                <div class="single_box wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
                  <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. . Great service, great hosting, and the staff are amazing.</p>
                  <h4>
                    Angle Hoo Yoo -
                    <span>Canada</span>
                  </h4>
                </div>
              </div>
              <div>
                <div class="single_box wow fadeInUp" data-wow-duration="2s" data-wow-delay=".4s">
                  <p>I must explain to you how all this mistaken idea of will give you a complete denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                  <h4>
                    Angle Hoo Yoo -
                    <span>Canada</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner_shapes">
        <img src="../assets/images/shapes/payment_t_1.png" alt class="payment_1">
        <img src="../assets/images/shapes/payment_t_2.png" alt class="payment_2">
        <img src="../assets/images/shapes/payment_t_3.png" alt class="payment_3">
        <img src="../assets/images/shapes/payment_t_4.png" alt class="payment_4">
        <img src="../assets/images/shapes/payment_t_5.png" alt class="payment_5">
        <img src="../assets/images/shapes/payment_t_3.png" alt class="payment_6">
        <img src="../assets/images/shapes/payment_t_4.png" alt class="payment_7">
        <img src="../assets/images/shapes/payment_t_5.png" alt class="payment_8">
      </div>
    </section>
    <!-- End Testimonial Payment -->

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
        this.$messgae.success('发送成功')
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
