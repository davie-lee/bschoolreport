import Vue from "vue";
import Router from "vue-router";
import store from "./store";

// Authentication
import Login from "./views/auth/Login.vue";
import Signup from "./views/auth/Signup.vue";

// Schools
import Harvard from "./views/Harvard.vue";
import Wharton from "./views/Wharton.vue";
import Stanford from "./views/Stanford.vue";
import Sloan from "./views/Sloan.vue";
import Kellogg from "./views/Kellogg.vue";
import Columbia from "./views/Columbia.vue";
import Booth from "./views/Booth.vue";
import Yale from "./views/Yale.vue";

// Industries
//import Industry from "./views/Industry.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/",
      name: "harvard",
      component: Harvard,
      alias: "/harvard"
    },
    {
      path: "/wharton",
      name: "wharton",
      component: Wharton,
      meta: { requiresAuth: true }
    },
    {
      path: "/stanford",
      name: "stanford",
      component: Stanford
    },
    {
      path: "/sloan",
      name: "sloan",
      component: Sloan,
      meta: { requiresAuth: true }
    },
    {
      path: "/kellogg",
      name: "kellogg",
      component: Kellogg,
      meta: { requiresAuth: true }
    },
    {
      path: "/columbia",
      name: "columbia",
      component: Columbia,
      meta: { requiresAuth: true }
    },
    {
      path: "/booth",
      name: "booth",
      component: Booth,
      meta: { requiresAuth: true }
    },
    {
      path: "/yale",
      name: "yale",
      component: Yale,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isLoggedIn) {
      next({
        path: "/login"
        //params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
