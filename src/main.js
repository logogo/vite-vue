import Vue from "vue"
import './css/common.css'
import App from "./App.vue"

import Component from "@/components/index";

Vue.use(Component)

new Vue({
  el: "#app",
  render: (h) => h(App)
}).$mount();
