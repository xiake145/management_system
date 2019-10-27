import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
//创建一个动态厂库
export default new Vuex.Store({
    //VUEX核心属性
    state:{
        acc:"",
        pwd:"",
    },
    mutations:{
        changeacc_pwd(state,pim){//存入密码和账号
            state.acc = pim.acc;
            state.pwd = pim.pwd
        }
    },
    actions:{

    },
    getters:{
        
    }
})