const api = {
  ForgePassword: '/auth/forge-password',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/api/user/info',
  getCapture: `/sm/code`,
  product: `/rs/product`,
  userinfo: `/rs/userinfo`,
  memberList: `/rs/member`,
  Login: `/op/login`,
  Register: `/op/register`,
  Logout: '/op/logout'
}

export default api
