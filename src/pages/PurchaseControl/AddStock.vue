<template>
  <!-- 添加库存组件 -->
  <div>
    <!-- <Header></Header> -->
    <el-card class="carpadding" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <span>添加库存</span>
      </div>
    </el-card>

    <el-row :gutter="20">
      <el-col :span="8" :offset="2">
        <div class="grid-content bg-purple">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="商品条形码" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="数量" prop="kg">
              <el-input v-model="ruleForm.kg">
                  <template slot="append">kg</template>
              </el-input>
            </el-form-item>
            <el-form-item label="进价" prop="kg">
              <el-input v-model="ruleForm.pri">
                  <template slot="append">元</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即入库</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import Header from "../../components/Header";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        kg:"",
        pri:""
      },
      rules: {
        name: [
          { required: true, message: "请输入商品条形码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        kg:[
             { required: true, message: "请输入商品重量", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pri:[
             { required: true, message: "请输入进价", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
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