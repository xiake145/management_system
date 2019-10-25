<template>
  <div class="login">
    <div class="from">
      <div style="text-align:center;font-size:40px;">管理系统登录</div>
      <el-row :gutter="20">
        <el-col :span="20" :offset="2">
          <div class="margintop">
            <span>账号:</span>
            <el-input placeholder="请输入账号" v-model="account" clearable></el-input>
          </div>

          <div class="margintop">
            <span>密码:</span>
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          </div>

          <el-col :span="24" :offset="2">
            <el-button class="margintop" type="primary">立即登录</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "", //账号
      password: "" //密码
    };
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
  margin-top: 20px;
}
</style>