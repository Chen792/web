//引入相关文件
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store'
import './api/mock'
import Cookie from 'js-cookie';
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(router)
router.beforeEach((to,from,next)=>{
  const token = Cookie.get('token');
  if(!token&&to.name!='login'){
    next({name:'login'})
  }
  else if(token&&to.name=='login')
  {
    next({name:'home'})
  }
  else {
    next();
  }
})
//初始化组件实例
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
  },
    created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
