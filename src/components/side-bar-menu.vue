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
                <h2>Sassnex Pages</h2>
                <ul>
                  <li>
                    <a href="index.html">App Landing</a>
                  </li>
                  <li>
                    <a href="product-landing.html">Product Landing</a>
                  </li>
                  <li>
                    <a href="startup-agency.html">Startup Agency</a>
                  </li>
                  <li>
                    <a href="payment-page.html">Payment Processing</a>
                  </li>
                  <li>
                    <a href="marketing.html">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="sass-landing.html">Sass Landing</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="pricing-table.html">Pricing table Page</a>
                  </li>
                  <li>
                    <a href="shop-page.html">Shop Page</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="sign-in.html">Sign In</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bar-contact">
              <span>Contact</span>
              <span>+44 7700 900077</span>
              <span>support@sassnex.com</span>
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
export default {
  name: 'side-bar-menu'
}
</script>

<style lang="scss" scoped>
</style>