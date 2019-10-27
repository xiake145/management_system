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
import tree from "../json/tree.json";
export default {
  data() {
    return {
      key: 0,
      //菜单数据
      menu: [],
    };
  },
  created() {
    // this.menu = tree//菜单列表
    //获取本地用户权限动态渲染页面 权限配置利用后台返回的权限数据动态渲染 导航栏
   this.menu= tree.filter((item)=>{
      return item.userGroup.includes(localStorage.userGroup)
    })
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