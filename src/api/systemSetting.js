import api from './index'

let postPhone = '/api/sms/code';
let getGradeGroup = '/api/17wa-account/grade/{account}';
let addGradeGroup = '/api/17wa-account/grade/{account}';
let deleteGradeGroup = '/api/17wa-account/grade/{account}/{groupId}';
export default {
  postPhone: (phone) => {
    return api.post(postPhone, phone);
  },
  getGradeGroup: (account) => {
    return api.get(getGradeGroup.replace('{account}', account), null);
  },
  addGradeGroup: (account, grade, money) => {
    return api.post(addGradeGroup.replace('{account}', account), null, {
      grade,
      money
    });
  },
  deleteGradeGroup: (account, groupId) => {
    return api.delete(deleteGradeGroup.replace('{account}', account).replace('{groupId}', groupId), null)
  },
}
