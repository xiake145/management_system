import axios from "axios";

const url = axios.create({
    baseURL: "http://localhost:3000"
})


/* ---------------登录-------------- */
export function login(acc, pwd) {
    return url.post('/login', {
        acc,
        pwd
    })
}
/* ---------------账号添加---------- */
export function addacc(acc, pwd, group) {
    return url.post("/addaccount", {
        acc,
        pwd,
        group
    })
}
/* ---------------账号管理---------- */
export function accountlist() {
    return url.post('/accountlist')
}
/* ----------------账号密码修改-------- */
export function changepwd(acc, pwd) {
    return url.post("/pwd_up", {
        acc,
        pwd
    })
}
/* ----------------token验证---------- */
export function verifytoken(token) {
    return url.get("/verifytoken", {
        params: {
            token
        }
    })
}
/* ---------------商品添加------------ */
export function addgoods(data) {
    return url.get("/addgoods", {
        params: {
            name:data.name,
            region:data.region,
            pri:data.pri,
            code:data.code,
            input:data.input,
            inputCome:data.inputCome,
            kg:data.kg,
            unit:data.unit,
            radio:data.radio,
            promotion:data.promotion,
            textarea:data.textarea,
            num:data.num
        }
    })
}
/* --------------商品查询管理-------- */
export function commoditymanagement(){
    return url.get('/commoditymanagement')
}