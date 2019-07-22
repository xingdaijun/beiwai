import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//分享功能
import vshare from 'vshare'
Vue.use(vshare)

Vue.config.productionTip = false;
//引入element-ui
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
