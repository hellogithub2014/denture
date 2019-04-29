// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const ASYNC_PATH_PREFIX = '/manage'

export const asyncRouterMap = [
  {
    path: `${ASYNC_PATH_PREFIX}`,
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: `${ASYNC_PATH_PREFIX}/dashboard/workplace`,
    children: [
      {
        path: `${ASYNC_PATH_PREFIX}/dashboard`,
        name: 'dashboard',
        redirect: `${ASYNC_PATH_PREFIX}/dashboard/workplace`,
        component: RouteView,
        hideChildrenInMenu: false,
        meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: `${ASYNC_PATH_PREFIX}/dashboard/workplace`,
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: '工作台', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },

      // forms
      {
        path: `${ASYNC_PATH_PREFIX}/form`,
        redirect: `${ASYNC_PATH_PREFIX}/form/base-form`,
        component: PageView,
        meta: { title: '表单页', icon: 'form', permission: ['form'] },
        children: [
          {
            path: `${ASYNC_PATH_PREFIX}/form/base-form`,
            name: 'BaseForm',
            component: () => import('@/views/form/BasicForm'),
            meta: { title: '义齿信息登记', keepAlive: true, permission: ['form'] }
          }
        ]
      },

      // list
      {
        path: `${ASYNC_PATH_PREFIX}/list`,
        name: 'list',
        component: PageView,
        redirect: `${ASYNC_PATH_PREFIX}/list/table-list`,
        meta: { title: '列表页', icon: 'table', permission: ['table'] },
        children: [
          {
            path: `${ASYNC_PATH_PREFIX}/list/table-list/:pageNo([1-9]\\d*)?`,
            name: 'TableListWrapper',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '义齿查询列表', keepAlive: true, permission: ['table'] }
          },
          {
            path: `${ASYNC_PATH_PREFIX}/list/user-table-list`,
            name: 'UserTableList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/UserList'),
            meta: { title: '用户列表', keepAlive: true, permission: ['user-table'] }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: UserLayout,
    redirect: '/home',
    hidden: true,
    children: [
      {
        path: 'home',
        name: 'homePage',
        component: () => import('@/views/Home')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/Register')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/Search')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/Contact')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
