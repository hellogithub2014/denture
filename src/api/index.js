const prefix = 'http://yichi.fenewbee.com'

const api = {
  Login: `${prefix}/op/login`,
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: `${prefix}/op/register`,
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/api/user/info',
  getCapture: `${prefix}/sm/code`,
  product: `${prefix}/rs/product`,
  userinfo: `${prefix}/rs/userinfo`
}

export default api
