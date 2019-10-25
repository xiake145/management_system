<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    style="border-right:none;"
    unique-opened
  >
    <el-submenu  v-for="(item,key) in menu" :key="key" :index="item.index">
      <template slot="title">
        <i :class="item.icon"></i>
        {{item.name}}
      </template>
      <el-menu-item v-for="(it,i) in item.second_level" :key="i" :index="it.hash_index">{{it.name}}</el-menu-item>
    </el-submenu>
 
  </el-menu>
</template> 
<script>
import list from "../json/json.js";
export default {
  data() {
    return {
      key: 0,
      //菜单数据
      menu: [],
    };
  },
  created() {
    this.menu = list
},
  //计算函数
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<style  scoped>
.leftplay {
  display: none;
}
.el-menu{
  min-width: 200px;
}
</style>