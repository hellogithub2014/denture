<template>
  <div>
    <!-- loading加载 -->
    <loader-wrapper></loader-wrapper>
    <!-- 顶部导航栏 -->
    <common-header></common-header>

    <!-- Search Box Start Here -->
    <header-search></header-search>

    <!-- 侧边工具栏 -->
    <side-bar-menu></side-bar-menu>

    <!-- TODO: 搜索表格 -->
    <div>普通搜索，已配置无需登录即可访问</div>

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
  mounted() {
    new WOW().init()
  }
}
</script>

<style lang="scss" scoped>
</style>
