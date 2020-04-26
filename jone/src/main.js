import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// import iView from 'iview';
// import 'iview/dist/styles/iview.css';全局引入


//局部按需引入
import './iview.js';




import animate from 'animate.css'

Vue.use(animate);
// Vue.use(iView);



// Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
// Vue.prototype.$ = jquery;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
