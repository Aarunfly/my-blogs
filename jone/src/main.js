import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
import animate from 'animate.css'
Vue.use(animate);
Vue.use(iView);

Vue.config.productionTip = false;
Vue.prototype.$ = $;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
