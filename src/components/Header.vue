<template>
  <div class="header_container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{status}}</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user">
      <div style>{{username}}</div>
      <div class="userheader">
        <img
          src="https://goss.cfp.cn/creative/vcg/800/version3/86fe0359e08f4c5e8f87aa76a9e50af6.jpg"
          style="width:50px;height:50px;"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { verifytoken } from "@/api/apis";

export default {
  data() {
    return {
      status: "登录",
      username: ""
    };
  },
  created() {
    this.username = localStorage.acc;
    if (this.username != "") this.status = "注销";

    // 验证当前用户token是否过期
    var _this = this;
    verifytoken(localStorage.token).then(result => {
      if (result.data == "timeout") {
        _this.$router.push("/");
      }
    });
  }
};
</script>

<style lang="less" scoped>
.header_container {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  .user {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .userheader {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      overflow: hidden;
    }
  }
}
</style>