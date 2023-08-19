import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import NavBarPlugin from './navbar-plugin.js'; 



Vue.config.productionTip = false


Vue.use(NavBarPlugin);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
