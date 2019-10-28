<template>
  <!-- vip添加账号 -->
  <div>
    <!-- <Header></Header> -->
    <el-card class="carpadding">
      <div slot="header" class="clearfix">
        <span>会员管理</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="会员卡号/手机号"></el-input>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-button type="primary">查询</el-button>
          </div>
        </el-col>
      </el-row>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="会员卡号"></el-table-column>
        <el-table-column prop="name" label="会员姓名"></el-table-column>
        <el-table-column prop="address" label="会员等级"></el-table-column>
        <el-table-column prop="date" label="会员积分"></el-table-column>
        <el-table-column prop="date" label="折扣"></el-table-column>
        <el-table-column prop="date" label="手机号"></el-table-column>
        <el-table-column prop="date" label="座机号"></el-table-column>
        <el-table-column label="管理">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row :gutter="20">
        <el-col :span="10" :offset="8">
          <div class="grid-content bg-purple">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </el-col>
       
      </el-row>
      
    </el-card>
  </div>
</template>

<script>
// import Header from "../../components/Header";
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
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

<style  scoped>
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