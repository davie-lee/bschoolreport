import Vue from "vue";
import Router from "vue-router";
import store from "./store";

// Authentication & Main Views
import Login from "./views/auth/Login.vue";
import Signup from "./views/auth/Signup.vue";
//import Home from "./views/Home.vue";

// US Schools
import Harvard from "./views/Harvard.vue";
import Wharton from "./views/Wharton.vue";
import Stanford from "./views/Stanford.vue";
import Sloan from "./views/Sloan.vue";
import Kellogg from "./views/Kellogg.vue";
import Columbia from "./views/Columbia.vue";
import Booth from "./views/Booth.vue";
import Yale from "./views/Yale.vue";
import Anderson from "./views/Anderson.vue";
import Carey from "./views/Carey.vue";
import Carlson from "./views/Carlson.vue";
import Darden from "./views/Darden.vue";
import Fisher from "./views/Fisher.vue";
import Foster from "./views/Foster.vue";
import Fuqua from "./views/Fuqua.vue";
import Goizueta from "./views/Goizueta.vue";
import Haas from "./views/Haas.vue";
import Johnson from "./views/Johnson.vue";
import Jones from "./views/Jones.vue";
import Kelley from "./views/Kelley.vue";
import KenanFlagler from "./views/KenanFlagler.vue";
import Marshall from "./views/Marshall.vue";
import McCombs from "./views/McCombs.vue";
import McDonough from "./views/McDonough.vue";
import Olin from "./views/Olin.vue";
import Owen from "./views/Owen.vue";
import Ross from "./views/Ross.vue";
import Scheller from "./views/Scheller.vue";
import Stern from "./views/Stern.vue";
import Tepper from "./views/Tepper.vue";
import Tuck from "./views/Tuck.vue";

// International Schools
import LondonBusinessSchool from "./views/LondonBusinessSchool.vue";
import Rotman from "./views/Rotman.vue";
import Ivey from "./views/Ivey.vue";

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
    //{
    //  path: "/",
    //  name: "home",
    //  component: Home
    //},
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
    },
    {
      path: "/anderson",
      name: "anderson",
      component: Anderson,
      meta: { requiresAuth: true }
    },
    {
      path: "/carey",
      name: "carey",
      component: Carey,
      meta: { requiresAuth: true }
    },
    {
      path: "/carlson",
      name: "carlson",
      component: Carlson,
      meta: { requiresAuth: true }
    },
    {
      path: "/darden",
      name: "darden",
      component: Darden,
      meta: { requiresAuth: true }
    },
    {
      path: "/fisher",
      name: "fisher",
      component: Fisher,
      meta: { requiresAuth: true }
    },
    {
      path: "/foster",
      name: "foster",
      component: Foster,
      meta: { requiresAuth: true }
    },
    {
      path: "/fuqua",
      name: "fuqua",
      component: Fuqua,
      meta: { requiresAuth: true }
    },
    {
      path: "/goizueta",
      name: "goizueta",
      component: Goizueta,
      meta: { requiresAuth: true }
    },
    {
      path: "/haas",
      name: "haas",
      component: Haas,
      meta: { requiresAuth: true }
    },
    {
      path: "/johnson",
      name: "johnson",
      component: Johnson,
      meta: { requiresAuth: true }
    },
    {
      path: "/jones",
      name: "jones",
      component: Jones,
      meta: { requiresAuth: true }
    },
    {
      path: "/kelley",
      name: "kelley",
      component: Kelley,
      meta: { requiresAuth: true }
    },
    {
      path: "/kenan-flagler",
      name: "kenanflagler",
      component: KenanFlagler,
      meta: { requiresAuth: true }
    },
    {
      path: "/marshall",
      name: "marshall",
      component: Marshall,
      meta: { requiresAuth: true }
    },
    {
      path: "/mccombs",
      name: "mccombs",
      component: McCombs,
      meta: { requiresAuth: true }
    },
    {
      path: "/mcdonough",
      name: "mcdonough",
      component: McDonough,
      meta: { requiresAuth: true }
    },
    {
      path: "/olin",
      name: "olin",
      component: Olin,
      meta: { requiresAuth: true }
    },
    {
      path: "/owen",
      name: "owen",
      component: Owen,
      meta: { requiresAuth: true }
    },
    {
      path: "/ross",
      name: "ross",
      component: Ross,
      meta: { requiresAuth: true }
    },
    {
      path: "/scheller",
      name: "scheller",
      component: Scheller,
      meta: { requiresAuth: true }
    },
    {
      path: "/stern",
      name: "stern",
      component: Stern,
      meta: { requiresAuth: true }
    },
    {
      path: "/tepper",
      name: "tepper",
      component: Tepper,
      meta: { requiresAuth: true }
    },
    {
      path: "/tuck",
      name: "tuck",
      component: Tuck,
      meta: { requiresAuth: true }
    },
    {
      path: "/london-business-school",
      name: "lbs",
      component: LondonBusinessSchool,
      meta: { requiresAuth: true }
    },
    {
      path: "/rotman",
      name: "rotman",
      component: Rotman,
      meta: { requiresAuth: true }
    },
    {
      path: "/ivey",
      name: "ivey",
      component: Ivey,
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
