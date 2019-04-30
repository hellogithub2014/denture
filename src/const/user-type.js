export const userType = {
  customer: 0,
  institution: 1,
  admin: 9
}

const actions =
  '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]'

const actionEntitySet = [
  {
    action: 'add',
    describe: '新增',
    defaultCheck: false
  },
  {
    action: 'query',
    describe: '查询',
    defaultCheck: false
  },
  {
    action: 'get',
    describe: '详情',
    defaultCheck: false
  },
  {
    action: 'update',
    describe: '修改',
    defaultCheck: false
  },
  {
    action: 'delete',
    describe: '删除',
    defaultCheck: false
  }
]

export const roleId = {
  0: {
    id: 'customer',
    name: '消费者',
    describe: '消费者',
    permissions: [
      {
        permissionId: 'dashboard',
        permissionName: '仪表盘',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'exception',
        permissionName: '异常页面权限',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      }
    ].map(item => ({
      ...item,
      roleId: 'customer'
    }))
  },
  1: {
    id: 'institution',
    name: '加工所',
    describe: '加工所',
    permissions: [
      {
        permissionId: 'dashboard',
        permissionName: '仪表盘',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'exception',
        permissionName: '异常页面权限',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'denture',
        permissionName: '义齿登记',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'denture-form',
        permissionName: '义齿登记',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'denture-table',
        permissionName: '义齿列表',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      }
    ].map(item => ({
      ...item,
      roleId: 'institution'
    }))
  },
  9: {
    id: 'admin',
    name: '管理员',
    describe: '管理员',
    permissions: [
      {
        permissionId: 'dashboard',
        permissionName: '仪表盘',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'member',
        permissionName: '仪表盘',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'exception',
        permissionName: '异常页面权限',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'feedback',
        permissionName: '反馈',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'denture',
        permissionName: '反馈',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'denture-form',
        permissionName: '义齿登记',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      },
      {
        permissionId: 'denture-table',
        permissionName: '义齿列表',
        actions,
        actionEntitySet,
        actionList: null,
        dataAccess: null
      }
    ].map(item => ({
      ...item,
      roleId: 'admin'
    }))
  }
}
