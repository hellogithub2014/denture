import sideBarMenu from 'src/components/side-bar-menu'
import commonHeader from 'src/components/common-header'
import scrollTopIcon from 'src/components/scroll-top-icon'
import commonFooter from 'src/components/common-footer'
import loaderWrapper from 'src/components/loader-wrapper'

import { userType } from 'src/const/user-type'
import API from 'src/api'

export default {
  components: {
    sideBarMenu,
    commonHeader,
    scrollTopIcon,
    commonFooter,
    loaderWrapper
  },
  data () {
    return {
      userType,
      rand: Math.random()
    }
  },
  computed: {
    captureUrl () {
      return `${API.getCapture}?rand=${this.rand}`
    }
  },

  created () {
    this.getCapture()
  },
  methods: {
    getCapture () {
      this.rand = Math.random()
    },
    redirect (userinfo) {
      // this.$router.push({ name: 'Workplace' })
      const type = +userinfo.type
      // 注册类型是消费者，跳转到消费者查询列表
      if (+type === userType.customer) {
        this.$router.push({ name: 'homePage' })
        return
      }
      // 注册类型是加工所，跳转到加工所查询列表
      if (+type === userType.institution) {
        this.$router.push({ name: 'Workplace' })
        return
      }
      // 注册类型是加工所，跳转到加工所查询列表
      if (+type === userType.admin) {
        this.$router.push({ name: 'Workplace' })
      }
    }
  }
}
