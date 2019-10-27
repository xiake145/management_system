import axios from "axios";

const url = axios.create({
    baseURL:"http://localhost:3000"
})


/* ---------------登录-------------- */
export function login(acc,pwd){
   return url.post('/login',{acc,pwd})
}
/* ---------------账号添加---------- */
export function addacc(acc,pwd,group){
    return url.post("/addaccount",{acc,pwd,group})
}
/* ---------------账号管理---------- */
export function accountlist(){
    return url.post('/accountlist')
}
/* ----------------账号密码修改-------- */
export function changepwd(acc,pwd){
    return url.post("/pwd_up",{acc,pwd})
}
/* ----------------token验证---------- */
export function verifytoken(token){
    return url.get("/verifytoken",{params:{token}})
}