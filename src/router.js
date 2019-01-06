import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Wharton from "./views/Wharton.vue";
import Stanford from "./views/Stanford.vue";
import Sloan from "./views/Sloan.vue";
import Kellogg from "./views/Kellogg.vue";
import Columbia from "./views/Columbia.vue";
import Booth from "./views/Booth.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/wharton",
      name: "wharton",
      component: Wharton
    },
    {
      path: "/stanford",
      name: "stanford",
      component: Stanford
    },
    {
      path: "/sloan",
      name: "sloan",
      component: Sloan
    },
    {
      path: "/kellogg",
      name: "kellogg",
      component: Kellogg
    },
    {
      path: "/columbia",
      name: "columbia",
      component: Columbia
    },
    {
      path: "/booth",
      name: "booth",
      component: Booth
    }
  ]
});
