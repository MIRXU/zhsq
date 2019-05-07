// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
import Axios from 'axios'
let axios = Axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 1000 * 12,
});
Vue.prototype.$http = axios

VueAMap.initAMapApiLoader({
  key: '24fb743780b2ec6046b38bdd1d92a044',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  //v: '1.4.4'
});
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
