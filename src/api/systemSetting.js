import api from './index'

let postPhoneUrl = '/api/sms/code';
let getGradeGroupUrl = '/api/17wa-account/grade/{account}';
let addGradeGroupUrl = '/api/17wa-account/grade/{account}';
let deleteGradeGroupUrl = '/api/17wa-account/grade/{account}/{groupId}';
let systemSettingUrl = '/api/17wa-account/settings';
let getSystemSettingUrl = '/api/17wa-account/settings/{account}';
let getUserInformationUrl = '/api/17wa-account/{loginname}';
let updatePasswordUrl = '/api/17wa-shop/account/{account}';
let updatePhoneUrl = '';

export default {
  /**
   * 向手机发送验证码
   * @param phone
   * @returns {*}
   */
  postPhone: (phone) => {
    return api.post(postPhoneUrl, null, {phone});
  },
  /**
   * 获取积分规则
   * @param account
   * @returns {*}
   */
  getGradeGroup: (account) => {
    return api.get(getGradeGroupUrl.replace('{account}', account), null);
  },
  /**
   * 添加积分规则
   * @param account
   * @param grade
   * @param money
   * @returns {*}
   */
  addGradeGroup: (account, grade, money) => {
    return api.post(addGradeGroupUrl.replace('{account}', account), null, {
      grade,
      money
    });
  },
  /**
   * 删除积分规则
   * @param account
   * @param groupId
   * @returns {*}
   */
  deleteGradeGroup: (account, groupId) => {
    return api.delete(deleteGradeGroupUrl.replace('{account}', account).replace('{groupId}', groupId), null)
  },
  /**
   * 添加系统设置
   * @param systemSettingJson
   * @returns {*}
   */
  systemSetting: (systemSettingJson) => {
    return api.post(systemSettingUrl, systemSettingJson, null);
  },
  /**
   * 获取积分设置
   * @param account
   * @returns {*}
   */
  getSystemSetting: (account) => {
    return api.post(getSystemSettingUrl.replace('{account}', account), null, null);
  },
  /**
   * 修改密码
   * @param account
   * @param shopAccount
   * @returns {*}
   */
  updatePassword: (account, shopAccount) => {
    return api.post(updatePasswordUrl.replace('{account}', account), shopAccount, null);
  },
  /**
   * 修改手机号
   * @returns {*}
   */
  updatePhone: () => {
    return api.post(updatePhoneUrl, null, {phone});
  },
  /**
   * 得到个人信息
   * @param loginname
   * @returns {*}
   */
  getUserInformation: (loginname) => {
    return api.get(getUserInformationUrl.replace('{loginname}', loginname), null);
  }
}
