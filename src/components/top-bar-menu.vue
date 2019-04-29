<template>
  <div class="header-top">
    <div class="sassnex_nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light bg-faded">
          <a class="navbar-brand" href="/">
            <img src="../assets/images/logo1.png" alt="logo">
          </a>
          <div class="collapse navbar-collapse mean_menu" id="navbarSupportedContent">
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <a href="/manage/dashboard/workplace" class="nav-link">Home</a>
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
</template>

<script>
export default {
  name: 'top-bar-menu',
  mounted() {
    window.jQuery('.mean_menu').meanmenu({
      meanScreenWidth: '767'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>