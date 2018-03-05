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
  postPhone: (phone) => {
    return api.post(postPhoneUrl, null, {phone});
  },
  getGradeGroup: (account) => {
    return api.get(getGradeGroupUrl.replace('{account}', account), null);
  },
  addGradeGroup: (account, grade, money) => {
    return api.post(addGradeGroupUrl.replace('{account}', account), null, {
      grade,
      money
    });
  },
  deleteGradeGroup: (account, groupId) => {
    return api.delete(deleteGradeGroupUrl.replace('{account}', account).replace('{groupId}', groupId), null)
  },
  systemSetting: (systemSettingJson) => {
    return api.post(systemSettingUrl, systemSettingJson, null);
  },
  getSystemSetting: (account) => {
    return api.post(getSystemSettingUrl.replace('{account}', account), null, null);
  },
  updatePassword: (account, shopAccount) => {
    return api.post(updatePasswordUrl.replace('{account}', account), shopAccount, null);
  },
  updatePhone: () => {
    return api.post(updatePhoneUrl, null, {phone});
  },
  getUserInformation: (loginname) => {
    return api.get(getUserInformationUrl.replace('{loginname}', loginname), null);
  }
}
