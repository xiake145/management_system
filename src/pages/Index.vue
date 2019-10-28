<template>
  <div style="height:100%; width: 100%;">
   
    <el-container>
      <el-aside width="300px">
        <Nav />
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from "./Nav";
import Header from "../components/Header"
export default {
  data() {
    return {
      key: 0
      //左侧列表
    };
  },
  created() {},
  //计算函数
  computed: {},
  components: {
    Nav,
    Header
  }
};
</script>

<style  scoped>
.leftplay {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
  background-color: #545c64;
}
.el-main {
  flex: 1;
  padding: 0;
}
.el-header{
  padding: 0;
}
</style>