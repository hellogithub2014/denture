<template>
  <header class="header_inner_pages">
    <!-- 顶部导航栏 -->
    <top-bar-menu></top-bar-menu>

    <div class="intro_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="intro_text">
              <h1 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">SignUp Page</h1>
              <div class="select_pages">
                <a href title>Home</a>
                <span>SignUp Page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner_shapes">
      <img src="../assets/images/shapes/app_1.png" alt class="agency_1 img-fluid">
      <img src="../assets/images/shapes/app_4.png" alt class="agency_2">
      <img src="../assets/images/shapes/app_4.png" alt class="agency_6">
      <img src="../assets/images/shapes/app_3.png" alt class="agency_3">
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
import topBarMenu from 'src/components/top-bar-menu'

export default {
  name: 'CommonHeader',
  components: {
    topBarMenu
  }
}
</script>

<style lang="scss" scoped>
</style>
