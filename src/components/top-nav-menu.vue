<template>
  <header class="header_inner_pages">
    <div class="header-top">
      <div class="sassnex_nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light bg-faded">
            <a class="navbar-brand" href="index.html">
              <img src="../assets/images/logo1.png" alt="logo">
            </a>
            <div class="collapse navbar-collapse mean_menu" id="navbarSupportedContent">
              <ul class="navbar-nav nav ml-auto">
                <li class="nav-item">
                  <a href="/dashboard/workplace" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                  <a href="/search" class="nav-link">Search</a>
                </li>
                <li class="nav-item">
                  <a href="/contact" class="nav-link">Contact</a>
                </li>
              </ul>
            </div>
            <div class="mr-auto others_option">
              <ul class="navbar-nav mx-auto d-flex">
                <li
                  class="nav-item sign-in-option btn-demo"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <div class="side_menu">
                    <span class="line_1"></span>
                    <span class="line_2"></span>
                    <span class="line_3"></span>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <!-- END NAVBAR -->
        </div>
      </div>
    </div>

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
export default {
  name: 'TopNavMenu',
  mounted () {
    window.jQuery('.mean_menu').meanmenu({
      meanScreenWidth: '767'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
