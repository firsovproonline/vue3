import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import Vuex from "vuex";
Vue.use(Vuex);
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
