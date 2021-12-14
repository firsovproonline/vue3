import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import Vuex from "vuex";
Vue.use(Vuex);
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import PageTree from './components/PageTree.vue';



Vue.config.productionTip = false
const routes = [
  { path: "*", component: PageTree }
];

const router = new VueRouter({
  mode: "history",
  base: '/',
  routes
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
