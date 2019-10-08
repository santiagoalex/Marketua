import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import vuetify from './plugins/vuetify';
import vueResource from 'vue-resource'


const router = new VueRouter({
    routes: routes
});
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    vuetify,
    router
}).$mount('#app')