import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTilt from "vue-tilt.js";
import "./assets/style.css";
Vue.config.productionTip = false;
Vue.use(VueTilt);
new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
