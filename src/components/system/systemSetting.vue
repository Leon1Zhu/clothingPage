<template>
  <div class="system-setting-html">
    <tool-bar>
    </tool-bar>
    <Form :model="systemSettingJson" label-position="left" :label-width="100">
      <FormItem label="库存预警数量">
        <Input v-model="systemSettingJson.dangerNumber" placeholder="库存预警数量" style="width: 200px"></Input>
      </FormItem>
      <FormItem label="系统价格倍率">
        <Input v-model="systemSettingJson.rateMagnification" placeholder="系统价格倍率" style="width: 200px"></Input>
      </FormItem>
      <FormItem label="价格尾数开启">
        <Col span="3">
        <i-switch v-model="systemSettingJson.priceMantissa" size="large">
          <span slot="1">是</span>
          <span slot="0">否</span>
        </i-switch>
        </Col>
        <Col span="11">
        <label class="ivu-form-item-label">是否抹零</label>
        <i-switch v-model="systemSettingJson.wipeZero" size="large">
          <span slot="1">是</span>
          <span slot="0">否</span>
        </i-switch>
        </Col>
      </FormItem>
      <FormItem label="价格尾数">
        <Select v-model="systemSettingJson.priceMantissaNumber" style="width: 90px">
          <Option value="0">0</Option>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
        </Select>
      </FormItem>
      <FormItem label="积分抵扣">
        <Tag v-for="(gradeGroup,index) in gradeGroupS" type="dot" closable
             @on-close="deleteGradeGroup(gradeGroup.id, index)" color="green">
          {{gradeGroup.gradeValue}}积分抵扣{{gradeGroup.gradeMoney}}元
        </Tag>
        <Button type="primary" @click="integrationOpen=true">添加积分规则</Button>
      </FormItem>
      <FormItem label="其它操作">
        <Button type="primary" class="password-setting " @click="passwordOpen = true">登陆密码设置
        </Button>
        <Button type="primary" class="phone-setting " @click="phoneOpen = true">手机绑定设置</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="systemSetting">保存</Button>
      </FormItem>
    </Form>
    <my-drawer :open="integrationOpen" title="积分规则添加" @close-drawer="integrationOpen=false"
               @complate-drawer="addGradeGroup">
      <div class="integration-add">
        <div class="store-item">
          <div class="left-content">
            <div class="store-item-label">设置积分<span class="red-star">*</span></div>
          </div>
          <div class="right-content">
            <Input v-model="grade" class="input-width" placeholder="积分"></Input>
          </div>
        </div>
        <div class="store-item">
          <div class="left-content">
            <Tooltip content="5000积分，倍率10--5000积分抵扣500元" placement="top-start">
              <div class="store-item-label">倍率<span class="red-star">*</span></div>
            </Tooltip>
          </div>
          <div class="right-content">
            <Input v-model="money" class="input-width" placeholder="倍率"></Input>
          </div>
        </div>
      </div>
    </my-drawer>

    <my-drawer :open="passwordOpen" title="密码设置" @close-drawer="passwordOpen=false"
               @complate-drawer="updatePassword()">
      <!--<div class="store-item">
        <div class="left-content">
          <div class="store-item-label">旧密码<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <Input v-model="oldPassword" type="password" class="input-width" placeholder="旧密码"></Input>
        </div>
      </div>-->
      <div class="store-item">
        <div class="left-content">
          <div class="store-item-label">新密码<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <Input v-model="newPassword" type="password" class="input-width" placeholder="新密码"></Input>
        </div>
      </div>
      <div class="store-item">
        <div class="left-content">
          <div class="store-item-label">确认密码<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <Input v-model="surePassword" type="password" class="input-width" placeholder="确认密码"></Input>
        </div>
      </div>
    </my-drawer>

    <my-drawer :open="phoneOpen" title="手机绑定" @close-drawer="phoneOpen=false" @complate-drawer="">
      <div class="store-item">
        <div class="left-content">
          <div class="store-item-label">新手机<span class="red-star">*</span></div>
        </div>
        <div class="right-content">
          <Input v-model="newPhone" class="input-width" placeholder="新手机"></Input>
        </div>
      </div>
      <div class="store-item">
        <div class="left-content">
          <Button type="primary" class="phone-setting" @click="postPhone()">发送验证码</Button>
        </div>
        <div class="right-content">
          <Input v-model="newCode" class="input-width" placeholder="验证码"></Input>
        </div>
      </div>
    </my-drawer>
  </div>
</template>
<script>
  import toolBar from '../../common/vue/toolBar.vue';
  import myDrawer from '../../common/vue/myDrawer.vue';
  import systemApi from '../../api/systemSetting';

  export default {
    props: {},
    data() {
      return {
        integrationOpen: false,
        passwordOpen: false,
        phoneOpen: false,
        newPhone: '',
        newCode: '',
        oldPassword: '',
        newPassword: '',
        surePassword: '',
        money: '',
        grade: '',
        gradeGroupS: [],
        systemSettingJson: {
          account: this.$store.getters.getAccountId,
          dangerNumber: '1',
          rateMagnification: '1',
          priceMantissaNumber: '1',
          priceMantissa: '1',
          wipeZero: '1',
        }
      };
    },
    created() {
      this.getGradeGroup();
      this.getSystemSetting();
    },
    methods: {
      getGradeGroup() {
        systemApi.getGradeGroup(this.$store.getters.getAccountId).then((response) => {
          this.gradeGroupS = response.data;
        }).catch((error) => {
          this.$error(apiError, '获取积分规则')
        });
      },
      addGradeGroup() {
        let gradeInt = parseInt(this.grade);
        let moneyInt = parseInt(this.money);
        systemApi.addGradeGroup(this.$store.getters.getAccountId, gradeInt, moneyInt).then((response) => {
          this.integrationOpen = false;
          this.gradeGroupS.push(response.data);
          this.grade = '';
          this.money = '';
        }).catch((error) => {
          this.$error(apiError, '添加积分规则')
        });
      },
      deleteGradeGroup(id, index) {
        systemApi.deleteGradeGroup(this.$store.getters.getAccountId, id).then((response) => {
          this.getGradeGroup();
        }).catch((error) => {
          this.$error(apiError, '删除积分规则')
        });
      },
      postPhone() {
        systemApi.postPhone(this.newPhone).then((response) => {
          console.log(response);
        }).catch((error) => {
          this.$error(apiError, '验证码发送错误')
        });
      },
      updatePassword() {
        if (this.newPassword === '') {
          this.$Notice.error({
            title: '信息填写不完整',
          });
        } else {
          if (this.newPassword === this.surePassword) {
            systemApi.getUserInformation(this.$store.getters.getAccountId).then((response) => {
              console.log(response);
              let shopAccount = {};
              shopAccount.accountPwd = this.newPassword;
              systemApi.updatePassword(this.$store.getters.getAccountId, shopAccount).then((response) => {
              }).catch((error) => {
                this.$error(apiError, '获取系统设置');
              });
            }).catch((error) => {
              this.$error(apiError, '获取系统设置');
            });
          } else {
            this.$Notice.error({
              title: '密码填写不一致，请重新填写',
            });
          }
        }
      },
      getSystemSetting() {
        systemApi.getSystemSetting(this.$store.getters.getAccountId).then((response) => {
          this.systemSettingJson = JSON.parse(response.data.setting);
        }).catch((error) => {
          this.$error(apiError, '获取系统设置');
        });
      },
      systemSetting() {
        /*包含了，预警数量|价格倍率|价格尾数|是否开启价格尾数|是否抹零*/
        systemApi.systemSetting(this.systemSettingJson).then((response) => {
          this.systemSettingJson = JSON.parse(response.data.setting);
        }).catch((error) => {
          this.$error(apiError, '系统设置错误');
        });
      },
      updatePhone() {

      }
    },
    components: {toolBar, myDrawer}
  };
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import '../../common/css/globalscss.scss';

  .system-setting-html {
    width: 98%;
    .phone-setting {
      margin-left: 8px;
    }
  }

  .integration-add {
    margin-top: 8px;
  }

  .store-item {
    padding: 5px 0px;
    border-bottom: 1px solid $formLabelBorderBottomColor;
    display: flex;
    .left-content {
      display: flex;
      flex: 1;
      line-height: 200%;
    }
    .right-content {
      text-align: right;
    }
  }
</style>
