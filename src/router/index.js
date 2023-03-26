import Vue from 'vue'
import VueRouter from 'vue-router'
// 1、创建路由组件
import MyUser from '../views/User'
import MyHome from '../views/Home'
import MyMain from '../views/Main'
import MyMall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import LogIn from '../views/login'
Vue.use(VueRouter)
//解决重复点击面包屑报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//2、将路由与组件进行映射
const routes = [
    {
        path:'/',
        name:'Main',
        component:MyMain,
        redirect:'/home', //重定向
        //子路由path不带'/'
        children:[
        // {
        //     path:'home',
        //     component:MyHome,
        //     name:'home'
        // },
        // {
        //     path:'user',
        //     component:MyUser,
        //     name:'user'
        // },   
        // {
        //     path:'mall',
        //     component:MyMall,
        //     name:'mall'

        // },   
        // {
        //     path:'page1',
        //     component:PageOne,
        //     name:'page1'

        // }, 
        // {
        //     path:'page2',
        //     component:PageTwo,
        //     name:'page2'

        // },    
    ]},
    {
        path:'/login',
        component:LogIn,
        name:'login'
    }

]
//3、创建router实例
export default new VueRouter({
    routes,
})
