import eruda from "eruda"
eruda.init()

import Vue from "vue"
import App from "./App"
import VueAos2 from "vue-aos2"
import { router } from "./plugins"

Vue.use(VueAos2)

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});