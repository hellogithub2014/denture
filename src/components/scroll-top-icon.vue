<template>
  <section id="scroll-top" class="scroll-top">
    <h2 class="disabled">Scroll to top</h2>
    <div class="to-top pos-rtive">
      <a class="scroll-top-anchor" href="#">
        <i class="flaticon-right-arrow"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'scroll-top-icon',
  mounted() {
    //= ========== Scroll to top
    jQuery('.to-top').on('click', function(event) {
      jQuery('html,body').animate(
        {
          scrollTop: 0
        },
        1000
      )
    })
    jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 100) {
        jQuery('.to-top').fadeIn(1000)
      } else {
        jQuery('.to-top').fadeOut(1000)
      }
    })
  }
}
</script>

<style scoped>
</style>