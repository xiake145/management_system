<template>
  <!-- 添加商品组件 -->
  <div>
    <Header></Header>
    <el-card class="carpadding" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <span>添加商品</span>
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
            <el-form-item label="商品分类" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择商品分类">
                <el-option label="商品分类一" value="shanghai"></el-option>
                <el-option label="商品分类二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="商品售价" prop="pri">
              <el-input v-model="ruleForm.pri">
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
            <el-form-item label="市场价" style="margin:0">
              <el-input v-model="ruleForm.input">
                <template slot="append">元</template>
              </el-input>
              <span style="font-size:12px;color:#C0C4CC">默认为市场价的1.2倍</span>
            </el-form-item>
            <el-form-item label="商品进价">
              <el-input v-model="ruleForm.inputCome">
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
            <el-form-item label="入库数量">
              <el-input v-model="ruleForm.inputCome1">
                <template slot="append">kg</template>
              </el-input>
            </el-form-item>
            <el-form-item label="商品重量">
              <el-input v-model="ruleForm.inputCome1">
                <template slot="append">kg</template>
              </el-input>
            </el-form-item>
            <el-form-item label="商品单位">
              <el-input v-model="ruleForm.inputCome1"></el-input>
            </el-form-item>
            <el-form-item label="会员优惠">
              <el-radio v-model="radio" label="1">享受</el-radio>
              <el-radio v-model="radio" label="2">不享受</el-radio>
            </el-form-item>
            <el-form-item label="是否促销">
              <el-radio v-model="promotion" label="1">禁用</el-radio>
              <el-radio v-model="promotion" label="2">启用</el-radio>
            </el-form-item>
            <el-form-item label="商品简介">
              <el-input
                type="textarea"
                placeholder="请输入商品简介"
                v-model="textarea"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        pri: "",
        input: "",
        inputCome: "",
        inputCome1: ""
      },
      radio: "1",
      promotion: "1",
      textarea: "",
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pri: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
          { min: 1, message: "例如100", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择商品分类", trigger: "change" }
        ]
      }
    };
  },
  components: {
    Header
  },
  created() {
    // console.log(this.$route.params)
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