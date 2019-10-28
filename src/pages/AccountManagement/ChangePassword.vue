<template>
  <!-- 修改密码组件 -->
  <div>
    <!-- <Header></Header> -->
    <el-card class="carpadding">
      <div slot="header" class="clearfix">
        <span>密码修改</span>
      </div>
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="原密码">
          <el-input placeholder="请原输入密码" v-model="pwd" clearable show-password></el-input>
          <div style="position: absolute;">
            <span v-show="show" style="color:red;position: relative;top:-5px;">{{meg}}</span>
          </div>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input placeholder="请新输入密码" v-model="new_pwd" clearable show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input placeholder="请确认密码" v-model="cpwd" clearable show-password></el-input>
          <div style="position: absolute;">
            <span v-show="shownew" style="color:red;position: relative;top:-5px;">{{megnew}}</span>
          </div>
        </el-form-item>
        <el-button type="primary" @click="open">立即修改</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import Header from "../../components/Header";
import { changepwd } from "../../api/apis";
export default {
  data() {
    return {
      labelPosition: "right",
      pwd: "", //原密码
      new_pwd: "", //新密码
      cpwd: "", //确认密码
      meg: "密码错误", //提示信息
      show: false, //错误信息显示
      megnew: "两次密码不一致",
      shownew: false
    };
  },
  components: {
    // Header
  },
  methods: {
    open() {//修改密码弹窗
      var _this = this;
      if (this.$store.state.pwd != this.pwd) {
        //判断密码
        this.show = true;
        return;
      }
      this.$confirm("此操作将修改密码, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          var __this = this
          changepwd(_this.$store.state.acc, _this.new_pwd).then(result => {
            if (result.data == "ok") {
              __this.$message({
                type: "success",
                message: "修改成功!即将跳转到登录页面!!!"
              });
              _this.pwd=""
              _this.new_pwd=""
              _this.cpwd=""
              setTimeout(() => {//定时跳转到登录页面
                _this.$router.history.push("/")
              }, 2000);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改"
          });
        });
    },
  },
  watch: {
    cpwd() {//监听确认密码
      this.cpwd == this.new_pwd
        ? (this.shownew = false)
        : (this.shownew = true);
      if (this.cpwd == "") this.shownew = false;
    },
    pwd() {//监听是否为空
      if (this.pwd == "") this.meg = false;
    }
  }
};
</script>

<style scoped>
.clearfix {
  font-weight: bold;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>