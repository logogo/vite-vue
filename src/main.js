import Vue from "vue"
import './css/common.css'
import App from "./App.vue"

import Component from "@/components/index";
import Api from "@/api"

Vue.use(Component)

Vue.prototype.$api = Api

new Vue({
  el: "#app",
  render: (h) => h(App)
}).$mount();
