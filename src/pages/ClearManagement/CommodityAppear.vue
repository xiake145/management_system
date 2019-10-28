<template>
  <!-- 商品出库组件 -->
  <div>
    <!-- <Header></Header> -->
    <el-card class="carpadding">
      <div slot="header" class="clearfix">
        <span>商品出库</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="商品条形码" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="数量" prop="kg">
                <el-input v-model="ruleForm.kg">
                  <template slot="append">kg</template>
                </el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">加入订单</el-button>
          <el-button @click="resetForm('ruleForm')">重新出库</el-button>
        </el-form-item>
        <el-table :data="tableData" stripe style="width: 100%" show-summary>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="amount1" label="数量"></el-table-column>
          <el-table-column prop="amount2" label="单价(元)"></el-table-column>
          <el-table-column prop="name" label="总价(元)"></el-table-column>
          <el-table-column prop="amount2" label="优惠总价(元)"></el-table-column>
        </el-table>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="会员卡号" prop="name">
                <el-input v-model="ruleForm.numB"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import Header from "../../components/Header";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        kg: "",
        numB: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入商品条形码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        kg: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        numB: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ]
    };
  },
  components: {
    // Header
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    queryForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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