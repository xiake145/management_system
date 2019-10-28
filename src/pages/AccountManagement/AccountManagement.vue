<template>
  <!-- 账号管理组件 -->
  <div>
    <!-- <Header></Header> -->
    <el-card class="carpadding">
      <div slot="header" class="clearfix">
        <span>账号管理</span>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="account" label="用户名"></el-table-column>
        <el-table-column prop="userGroup" label="用户组"></el-table-column>
        <el-table-column label="管理">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
// import Header from "../../components/Header.vue";
import {accountlist} from "../../api/apis"
export default {
  data() {
    return {
      tableData: []
    };
  },
  created () {
    accountlist().then((result) => {
       result.data.filter((item)=>{
         if(item.userGroup==="0"){
           item.userGroup="超级管理员"
         }else if (item.userGroup==="1") {
           item.userGroup="管理员"
           
         }else if (item.userGroup==="2") {
           item.userGroup="职员"
         }
       })
       this.tableData=result.data
    }).catch((err) => {
      
    });;
  },
  //注册组件
  components: {
    // Header
  },
  methods: {
    handleClick(row) {
      console.log(row);
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