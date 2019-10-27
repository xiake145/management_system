import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css';
import store from "./store"
import {verifytoken} from "./api/apis"

Vue.config.productionTip = false
Vue.use(ElementUI);

//全局前置路由守卫 路由拦截
//路由守卫分为全局/局部  全局beforeEach跳转之前，afterEach跳转之后
//局部 beforeRouteEnter:在路由进入在之前触发钩子
//beforeRouteUpdate:在路由跟新之前触发的
//beforeRouteleave:在路由离开之前触发的钩子函数
//to:将要跳转的路由 from：将要离开的路由对象  next:下一步，调用此函数就会成功切换hash地址
router.beforeEach((to, from, next) => {

  //判断将访问的路由是否为登录页面
  if (to.path != "/") {
    verifytoken(localStorage.token).then((result) => {
     result.data=="timeout"?next('/'):next()
    })
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')