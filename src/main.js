import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./../node_modules/bulma/css/bulma.css";
import vueHeadful from "vue-headful";
import VueAnalytics from "vue-analytics";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBEMj_hL0HD2mGze2Eeqmqmsb0SzItp0Ng",
  authDomain: "bizschoolreport.firebaseapp.com",
  databaseURL: "https://bizschoolreport.firebaseio.com",
  projectId: "bizschoolreport",
  storageBucket: "bizschoolreport.appspot.com",
  messagingSenderId: "724112956491"
};
firebase.initializeApp(config);

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
