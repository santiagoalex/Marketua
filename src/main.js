import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';


const router = new VueRouter({
  routes: routes
});

Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
