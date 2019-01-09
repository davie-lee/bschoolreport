import Vue from "vue";
import Router from "vue-router";
import Harvard from "./views/Harvard.vue";
import Wharton from "./views/Wharton.vue";
import Stanford from "./views/Stanford.vue";
import Sloan from "./views/Sloan.vue";
import Kellogg from "./views/Kellogg.vue";
import Columbia from "./views/Columbia.vue";
import Booth from "./views/Booth.vue";
import Test from "./views/Test.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "harvard",
      component: Harvard
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
    },
    {
      path: "/test",
      name: "test",
      component: Test
    }
  ]
});
