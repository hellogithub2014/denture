import Vue from 'vue'
import { login, getInfo, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'
import { roleId as roleIdMap } from 'src/const/user-type'
import Cookies from 'js-cookie'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            // const token = Math.random()
            //   .toString(16)
            //   .slice(2, 16)
            // Vue.ls.set(ACCESS_TOKEN, token, 7 * 24 * 60 * 60 * 1000)
            // commit('SET_TOKEN', token)
            resolve(response.userinfo)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息.
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            // 此处设置用户permission
            const origin = response.rows[0]
            const roleIdOption = roleIdMap[origin.type]
            const result = {
              ...origin,
              avatar: '/avatar2.jpg',
              roleId: roleIdOption.id,
              role: {
                id: roleIdOption.id,
                name: roleIdOption.name,
                describe: roleIdOption.describe,
                status: 1,
                creatorId: 'system',
                createTime: 1497160610259,
                deleted: 0,
                permissions: roleIdOption.permissions,
                permissionList: []
              }
            }

            // const result = response.result

            if (result.role && result.role.permissions.length > 0) {
              const role = result.role
              role.permissions = result.role.permissions
              role.permissions.map(per => {
                if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                  const action = per.actionEntitySet.map(action => {
                    return action.action
                  })
                  per.actionList = action
                }
              })
              role.permissionList = role.permissions.map(permission => {
                return permission.permissionId
              })
              commit('SET_ROLES', result.role)
              commit('SET_INFO', result)
            } else {
              reject(new Error('getInfo: roles must be a non-null array !'))
            }

            commit('SET_NAME', { name: result.name, welcome: welcome() })
            commit('SET_AVATAR', result.avatar)

            resolve({
              result
            })
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Cookies.remove('SESSION_ID')

        Vue.ls.remove(ACCESS_TOKEN)

        logout(state.token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
      })
    }
  }
}

export default user
