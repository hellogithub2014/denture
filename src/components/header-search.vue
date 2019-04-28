<template>
  <div id="header-search" class="header-search">
    <button type="button" class="close">×</button>
    <form class="header-search-form">
      <input type="search" value placeholder="Type here........">
      <button type="submit" class="search-btn">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'header-search',
  mounted() {
    $('a[href="#header-search"]').on('click', function(event) {
      event.preventDefault()
      $('#header-search').addClass('open')
      $('#header-search > form > input[type="search"]').focus()
    })
    $('#header-search, #header-search button.close').on('click keyup', function(event) {
      if (event.target === this || event.target.className === 'close' || event.keyCode === 27) {
        $(this).removeClass('open')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
</style>