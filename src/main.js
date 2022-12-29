import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import "./assets/global.css";
import store from './store';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false
Vue.use(VueToast,{
  // One of the options
  position: 'top'
});
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
