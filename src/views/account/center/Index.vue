<template>
  <div class="page-header-index-wide page-header-wrapper-grid-content-main">
    <a-row :gutter="24" class="more-info">
      <a-col :span="4">
        <head-info
          title="注册证号"
          :content="userInfo.certificate_no"
          :center="false"
          :bordered="false"
        />
      </a-col>
      <a-col :span="4">
        <head-info title="ID" :content="userInfo.id" :center="false" :bordered="false"/>
      </a-col>
      <a-col :span="4">
        <head-info title="姓名" :content="userInfo.name" :center="false"/>
      </a-col>
      <a-col :span="4">
        <head-info title="电话" :content="userInfo.telephone" :center="false"/>
      </a-col>
      <a-col :span="4">
        <head-info title="用户名" :content="userInfo.username" :center="false"/>
      </a-col>
      <a-col :span="4">
        <head-info title="创建时间" :content="userInfo.create_time" :center="false"/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import { AppPage, ArticlePage, ProjectPage } from './page'
import HeadInfo from '@/components/tools/HeadInfo'

import { mapGetters } from 'vuex'
import API from 'src/api'

export default {
  components: {
    RouteView,
    PageView,
    AppPage,
    ArticlePage,
    ProjectPage,
    HeadInfo
  },
  data() {
    return {
      tags: ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子', '海纳百川'],

      tagInputVisible: false,
      tagInputValue: '',

      teams: [],
      teamSpinning: true,

      noTitleKey: 'app',
      userInfo: {}
    }
  },
  created() {
    this.getUserinfo()
  },
  mounted() {
    this.getTeams()
  },
  methods: {
    ...mapGetters(['nickname', 'avatar']),

    getUserinfo() {
      return this.axios.get(API.userinfo).then(resp => {
        this.userInfo = resp.rows[0]
      })
    },

    getTeams() {
      this.$http.get('/workplace/teams').then(res => {
        this.teams = res.result
        this.teamSpinning = false
      })
    },

    handleTabChange(key, type) {
      this[type] = key
    },

    handleTagClose(removeTag) {
      const tags = this.tags.filter(tag => tag !== removeTag)
      this.tags = tags
    },

    showTagInput() {
      this.tagInputVisible = true
      this.$nextTick(() => {
        this.$refs.tagInput.focus()
      })
    },

    handleInputChange(e) {
      this.tagInputValue = e.target.value
    },

    handleTagInputConfirm() {
      const inputValue = this.tagInputValue
      let tags = this.tags
      if (inputValue && !tags.includes(inputValue)) {
        tags = [...tags, inputValue]
      }

      Object.assign(this, {
        tags,
        tagInputVisible: false,
        tagInputValue: ''
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

  .more-info {
    background: #fff;
    padding: 16px 32px 0;
    border-bottom: 1px solid #e8e8e8;
  }

  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .account-center-detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }

    i {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
      background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
    }

    .title {
      background-position: 0 0;
    }
    .group {
      background-position: 0 -22px;
    }
    .address {
      background-position: 0 -44px;
    }
  }

  .account-center-tags {
    .ant-tag {
      margin-bottom: 8px;
    }
  }

  .account-center-team {
    .members {
      a {
        display: block;
        margin: 12px 0;
        line-height: 24px;
        height: 24px;
        .member {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          max-width: 100px;
          vertical-align: top;
          margin-left: 12px;
          transition: all 0.3s;
          display: inline-block;
        }
        &:hover {
          span {
            color: #1890ff;
          }
        }
      }
    }
  }

  .tagsTitle,
  .teamTitle {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 12px;
  }
}
</style>
