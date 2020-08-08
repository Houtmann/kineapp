
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)


Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes
});
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


// new Vue({
//     render: h => h(App),
//     store: store
// }).$mount('#app')