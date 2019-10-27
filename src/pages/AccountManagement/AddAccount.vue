<template>
  <!-- 添加账号组件 -->
  <div>
    <Header></Header>
    <el-card class="carpadding">
      <div slot="header" class="clearfix">
        <span>添加账号</span>
      </div>

      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="添加账号">
          <el-input placeholder="请输入账号" v-model="acc" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="pwd" clearable show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input placeholder="请确认密码" v-model="cpwd"  clearable show-password></el-input>
            <div style="position: absolute;">
              <span v-show="show" style="color:red;position: relative;top:-5px;">{{meg}}</span>
            </div>
        </el-form-item>
        <el-form-item label="权限选择">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="changepadd" :disabled="disabled">立即添加</el-button>
    </el-card>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import {addacc} from '../../api/apis';
export default {
  data() {
    return {
      acc: "", //账号
      pwd: "", //密码
      cpwd: "", //确认密码
      options: [
        {
          value: 0,
          label: "超级管理员"
        },
        {
          value: 1,
          label: "管理员"
        },
        {
          value: 2,
          label: "职员"
        }
      ],
      value: "", //权限值
      meg: "两次输入的密码不一致", //错误提示
      show: false,
      labelPosition:"left",
      disabled:false,
    };
  },
  methods: {
    changepadd() {
      addacc(this.acc,this.pwd,this.value)
      .then((result) => {
        if (result.data=="ok") {
          console.log(111)
          this.open()
        }
      }).catch((err) => {
        console.log(err)
      });
    },
    open() {
        this.$alert('添加成功', '添加状态', {
          confirmButtonText: '确定',
        });
        this.acc="";
        this.pwd="";
        this.value="";
        this.cpwd=""
     }
  },
  //祖册组件
  components: {
    Header
  },
  watch: {
    cpwd() {//监听 判断是否提示
      if (this.pwd==this.cpwd) {
        this.show=false,this.disabled=false 
      }else{
        this.show=true,this.disabled=true;
      } 
      if(this.cpwd=="")this.show=false,this.disabled=false;
    }
  },
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