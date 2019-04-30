<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <!-- <a-avatar class="avatar" size="small" :src="avatar()"/> -->
          <span class="manager-avatar" :style="'background:'+iconBg">{{ avatarTxt }}</span>
          <span>{{ nickname() }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="3">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout"/>
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  computed: {
    avatarTxt () {
      return this.nickname()[0]
    },
    iconBg () {
      const bgArray = ['#005792', '#00ADB5', '#6A65D8', '#6195C5', '#AB8997', '#52686A']
      const index = Math.random() * 5 // 取尾号
      const idx = Math.floor(index * (bgArray.length / 10)) // 转化成0 - 5
      return bgArray[idx]
    }
  },
  methods: {
    ...mapActions(['Logout']),
    ...mapGetters(['nickname', 'avatar']),
    handleLogout () {
      const that = this

      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk () {
          return that
            .Logout({})
            .then(() => {
              window.location.reload()
            })
            .catch(err => {
              that.$message.error({
                title: '错误',
                description: err.message
              })
            })
        },
        onCancel () {}
      })
    }
  }
}
</script>
<style lang="less" scoped>
.manager-avatar {
    display: inline-block;
    font-size: 12px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    border-radius: 100%;
    color: #fff;
    text-align: center;
    margin-right: 10px;
}
</style>
