import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* eslint-disable */
import firebase from "./firebase";
/* eslint-enable */
import "./../node_modules/bulma/css/bulma.css";
import vueHeadful from "vue-headful";
import VueAnalytics from "vue-analytics";
import InstantSearch from "vue-instantsearch";

Vue.component("vue-headful", vueHeadful);
Vue.config.productionTip = false;
Vue.use(InstantSearch);

// Google Analytics
Vue.use(VueAnalytics, {
  id: "UA-131720166-1"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
