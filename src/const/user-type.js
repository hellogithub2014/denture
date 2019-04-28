export const userType = {
  customer: 0,
  institution: 1,
  admin: 2
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

const permissions = [
  {
    roleId: 'admin',
    permissionId: 'dashboard',
    permissionName: '仪表盘',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'exception',
    permissionName: '异常页面权限',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'result',
    permissionName: '结果权限',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'profile',
    permissionName: '详细页权限',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'table',
    permissionName: '表格权限',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'form',
    permissionName: '表单权限',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'order',
    permissionName: '订单管理',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'permission',
    permissionName: '权限管理',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'role',
    permissionName: '角色管理',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'user',
    permissionName: '用户管理',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  },
  {
    roleId: 'admin',
    permissionId: 'support',
    permissionName: '超级模块',
    actions,
    actionEntitySet,
    actionList: null,
    dataAccess: null
  }
]

export const roleId = {
  0: {
    id: 'customer',
    name: '消费者',
    describe: '消费者',
    permissions: permissions.map(item => ({
      ...item,
      roleId: 'customer'
    }))
  },
  1: {
    id: 'institution',
    name: '加工所',
    describe: '加工所',
    permissions: permissions.map(item => ({
      ...item,
      roleId: 'institution'
    }))
  },
  2: {
    id: 'admin',
    name: '管理员',
    describe: '管理员',
    permissions: permissions.map(item => ({
      ...item,
      roleId: 'admin'
    }))
  }
}
