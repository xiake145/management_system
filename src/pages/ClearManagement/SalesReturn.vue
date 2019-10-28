<template>
  <!-- 商品退货组件 -->
  <div>
    <!-- <Header></Header> -->
    <el-card class="carpadding">
      <div slot="header" class="clearfix">
        <span>商品退货</span>
      </div>
      <el-input v-model="input" placeholder="请输入商品订单"></el-input>
      <el-button type="primary">查询</el-button>
    </el-card>
  </div>
</template>

<script>
// import Header from "../../components/Header";
export default {
  data() {
    return {
      input:""
    };
  },
  components: {
    // Header
  }
};
</script>

<style lang="less" scoped>
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