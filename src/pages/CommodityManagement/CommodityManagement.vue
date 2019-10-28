<template>
  <!-- 商品管理组件 -->
  <div style="flex=1" >
        <!-- <Header></Header> -->
        <el-card class="carpadding" :body-style="{ paddingBottom: '0px' }">
          <div slot="header" class="clearfix">
            <span>商品管理</span>
          </div>
          <div class="text item">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-select v-model="value4" clearable placeholder="请选择分类">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="2" class="goodsman"></el-col>
              <el-col :span="8">
                <el-input v-model="input" clearable placeholder="请输入商品名称或条形码"></el-input>
              </el-col>
              <el-col :span="3">
                <el-button type="primary">查询</el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="barCode" label="商品条形码"></el-table-column>
          <el-table-column prop="name" label="商品名称"></el-table-column>
          <el-table-column prop="category" label="分类"></el-table-column>
          <el-table-column prop="salePrice" label="售价(元)"></el-table-column>
          <el-table-column prop="marketPrice" label="促销价(市场价)"></el-table-column>
          <el-table-column prop="stockCount" label="库存"></el-table-column>
          <el-table-column prop="" label="库存总额"></el-table-column>
          <el-table-column label="管理">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row >
          <el-col :span="12" :offset="6">
            <div class="grid-content bg-purple">
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400"
                ></el-pagination>
              </div>
            </div>
          </el-col>
        </el-row>
  </div>
</template>

<script>
import {commoditymanagement} from "@/api/apis"
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} zepto条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "商品分类一"
        },
        {
          value: "选项2",
          label: "商品分类二"
        }
      ],
      value4: "",
      input: "",
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  //注册组件
  components: {
    // Header
  },
  created () {
    // this.show=true;
    commoditymanagement().then((result) => {
      this.tableData=result.data
    })
    
  },
  watch: {
    vulue(newValue, oldValue) {
      this.vulue=newValue
      console.log(newValue)
    }
  },
};
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
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