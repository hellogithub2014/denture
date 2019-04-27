const api = {
  Login: '/op/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/op/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/api/user/info',
  getCapture: '/sm/code',
  addProduct: '/rs/product'
}
export default api
