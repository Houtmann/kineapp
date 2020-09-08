
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/'



import 'vuetify/dist/vuetify.min.css'
import Vuetify from "vuetify";

Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes
});
new Vue({
    router,
    store,
    vuetify: new Vuetify(),
    render: h => h(App),
}).$mount('#app')


// new Vue({
//     render: h => h(App),
//     store: store
// }).$mount('#app')