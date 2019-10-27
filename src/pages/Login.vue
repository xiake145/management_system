<template>
  <div class="login">
    <div class="from">
      <div style="text-align:center;font-size:40px;">管理系统登录</div>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2">
          <el-form>
            <div class="margintop">
              <span>账号:</span>
              <el-input placeholder="请输入账号" v-model="acc" clearable autofocus></el-input>
            </div>

            <div class="margintop">
              <span>密码:</span>
              <el-input placeholder="请输入密码" v-model="pwd" show-password clearable></el-input>
              <div style="position: absolute;">
                <span v-show="show" style="color:red;position: relative;">{{meg}}</span>
              </div>
            </div>
          </el-form>

          <el-col :span="24" :offset="2">
            <el-button class="margintop" type="primary" @click="clicklogin">立即登录</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { login } from "../api/apis.js";
export default {
  data() {
    return {
      acc: "", //账号
      pwd: "", //密码
      show: false,
      meg: "请输入账号或密码"
    };
  },
  methods: {
    clicklogin() {
      var _this = this;
      if (this.acc == "" || this.pwd == "") {//判断为空错误提示
        this.show = true;
        return;
      }
      login(this.acc, this.pwd)
        .then(result => {
          if (result.data.msg === "ok") {
            //将账号信息存入状态机
            // _this.$store.commit('changeacc_pwd',{acc:this.acc,pwd:this.pwd})
            //将token和账号存入localstorege
            localStorage.token = result.data.token;
            localStorage.acc = _this.acc
            localStorage.userGroup = result.data.userGroup//用户权限获取存储
            //跳转
            _this.$router.history.push("/index");
          } else {
            _this.show = true;
            _this.meg = "账号或密码错误";
          }
          // ?
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    data(newValue, oldValue) {}
  }
};
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
  background-color: rgb(84, 92, 100);
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative;
  position: absolute; */
}
.from {
  height: 400px;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.5);
  padding-top: 40px;
}
.el-button {
  width: 80%;
}
.margintop {
  margin-top: 26px;
}
</style>