import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./pages/Login";

//狂点路由跳转当前位置报错 解决方式
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 把某个组件组测到Vue工程中
Vue.use(VueRouter);
export default new VueRouter({
    routes:[{
        path:"/",
        name:"/",
        component:Login
    },{
        path:"/index",
        redirect:"/commoditymanagement",//重定向
        name:"index",
        component:()=>import("./pages/Index"),
        children:[{
            path:"/commoditymanagement",
            name:"commoditymanagement",
            component:()=>import("./pages/CommodityManagement/CommodityManagement"),
            meta:["商品管理","商品管理"]
        },{
            name: "addGoods",
            path:"/addGoods",
            component:()=>import("./pages/CommodityManagement/AddGoods"),
            meta:["商品管理","添加商品"]
        },{
            path:"/stockcontrol",
            name:"stockcontrol",
            component:()=>import("./pages/PurchaseControl/StockControl"),
            meta:["进货管理","库存管理"]
        },{
            path:"/addstock",
            name:"addstock",
            component:()=>import("./pages/PurchaseControl/AddStock"),
            meta:["进货管理","添加库存"]
        },{
            path:"/SellList",
            name:"sellList",
            component:()=>import("./pages/ClearManagement/SellList"),
            meta:["出货管理","销售列表"]
        },{
            path:"/CommodityAppear",
            name:"commodityappear",
            component:()=>import("./pages/ClearManagement/CommodityAppear"),
            meta:["出货管理","商品出库"]
        },{
            path:"/SalesReturn",
            name:"salesreturn",
            component:()=>import("./pages/ClearManagement/SalesReturn"),
            meta:["出货管理","商品退货"]
        },{
            path:"/SellStatistics",
            name:"sellstatistics",
            component:()=>import("./pages/Statistics/SellStatistics"),
            meta:["统计管理","销售统计"]
        },{
            path:"/ComeCargo",
            name:"comcar",
            component:()=>import("./pages/Statistics/ComeCargo"),
            meta:["统计管理","进货统计"]
        },{
            path:"/AccountManagement",
            name:"accountmanagement",
            component:()=>import("./pages/AccountManagement/AccountManagement"),
            meta:["账号管理","账号管理"]
        },{
            path:"/AddAccount",
            name:"addaccount",
            component:()=>import("./pages/AccountManagement/AddAccount"),
            meta:["账号管理","添加账号"]
        },{
            path:"/ChangePassword",
            name:"changepassword",
            component:()=>import("./pages/AccountManagement/ChangePassword"),
            meta:["账号管理","密码修改"]
        },
        {
            path:"/VipAccount",
            name:"vipaccount",
            component:()=>import("./pages/VIPmanagement/VipAccount"),
            meta:["会员管理","账号管理"]
        },
        {
            path:"/AddVip",
            name:"addvip",
            component:()=>import("./pages/VIPmanagement/AddVip"),
            meta:["会员管理","添加会员"]
        },]
    },]
})