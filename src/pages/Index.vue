<template>
  <div style="height:100%; width: 100%;">
    <el-row style="height:100%">
      <!-- 左边 -->
      <el-col :span="4" style="height:100%; min-width: 200px; background-color: #545c64; ">
        <Nav />
      </el-col>

      <!-- 右边 -->
      <el-col :span="20" style="height: 100%;overflow: auto;">
     
          <transition  name="fade" >
            <div v-show="true">
              <router-view></router-view>
            </div>
          </transition>
        
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import Nav from "./Nav";

export default {
  data() {
    return {
      key: 0
      //左侧列表
    };
  },
  created () {
    
        
  },
  //计算函数
  computed: {
  },
  components: {
    Nav
  }
};
</script>

<style  scoped>
.leftplay {
  display: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>