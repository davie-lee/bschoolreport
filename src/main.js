import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./../node_modules/bulma/css/bulma.css";
import vueHeadful from "vue-headful";
import VueAnalytics from "vue-analytics";

Vue.component("vue-headful", vueHeadful);
Vue.config.productionTip = false;

// Google Analytics
Vue.use(VueAnalytics, {
  id: "UA-131720166-1"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
