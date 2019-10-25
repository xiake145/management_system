<template>
  <!-- 销售列表组件 -->
  <div>
    <Header></Header>
    <el-card class="carpadding">
      <div slot="header" class="clearfix">
        <span>销售列表</span>
      </div>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-row>
                <el-col :span="16" :pull="1">
                  <div class="grid-content bg-purple">
                    <el-form-item label="关键字" prop="name">
                      <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="2" :pull="2">
                  <div class="grid-content bg-purple-light">
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('ruleForm')">立即查询</el-button>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="订单号"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="name" label="数量"></el-table-column>
        <el-table-column prop="name" label="实际售价"></el-table-column>
        <el-table-column prop="name" label="优惠(促销/会员)"></el-table-column>
        <el-table-column prop="name" label="退款"></el-table-column>
        <el-table-column prop="date" label="销售时间"></el-table-column>
      </el-table>
      <el-row :gutter="24" style="margin-top:20px;">
        <el-col :span="12" :offset="8">
          <div class="grid-content bg-purple">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      ruleForm: {
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入关键字", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
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
    Header
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