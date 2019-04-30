<template>
  <!-- Sidebar Menu -->
  <section class="sidebar_menu">
    <!-- Modal -->
    <div
      class="modal right fade"
      id="myModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel2"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i class="flaticon-close"></i>
              </span>
            </button>
            <h2 class="modal-title" id="myModalLabel2">
              <a href="#">
                <img src="../assets/images/logo.png" alt>
              </a>
              <span class="disabled">logo</span>
            </h2>
          </div>
          <div class="modal-body">
            <div class="bar-nav">
              <div class="bar-top">
                <h2>Quick Pages</h2>
                <ul>
                  <li class="nav-item">
                    <a href="/" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="/search" class="nav-link">Search</a>
                  </li>
                  <li class="nav-item">
                    <a href="/contact" class="nav-link">Contact</a>
                  </li>
                  <li class="nav-item" v-if="!isLogin">
                    <a href="/login" class="nav-link">Sign Up</a>
                  </li>
                  <li class="nav-item" v-else>
                    <a href="/manage/dashboard/workplace" class="nav-link">Manager</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bar-contact">
              <span>Contact</span>
              <span>+86 18089244078</span>
              <span>service@moxiaonai.cn</span>
            </div>

            <div class="bar-icon">
              <div class="serach_option widget_single">
                <form>
                  <input type="text" name="Name" class="input-c" placeholder="Name">
                  <button type="submit">
                    <i class="flaticon-paper-plane"></i>
                  </button>
                </form>
              </div>
              <ul class="social_iocns d-flex">
                <li>
                  <a href="#">
                    <i class="flaticon-facebook-logo icon_tw"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="flaticon-twitter icon_fb"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="flaticon-instagram-logo icon_pin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="flaticon-linkedin-logo icon_link"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- modal-content -->
      </div>
      <!-- modal-dialog -->
    </div>
    <!-- modal -->
  </section>
  <!-- sidebar -->
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'SideBarMenu',
  computed: {
    isLogin () {
      const cookies = Cookies.get()
      return !!cookies['SESSION_ID']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
