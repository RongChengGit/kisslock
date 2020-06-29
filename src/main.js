import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import '../theme/index.css'
import ElementUI from 'element-ui' 

import '../rem.js'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
