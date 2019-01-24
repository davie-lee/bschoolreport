import Vue from "vue";
import Router from "vue-router";
import store from "./store";

// Authentication & Main Views
import Login from "./views/auth/Login.vue";
import Signup from "./views/auth/Signup.vue";
import Home from "./views/Home.vue";

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
import Insead from "./views/Insead.vue";
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
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/harvard",
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
      path: "/yale",
      name: "yale",
      component: Yale
    },
    {
      path: "/anderson",
      name: "anderson",
      component: Anderson
    },
    {
      path: "/carey",
      name: "carey",
      component: Carey
    },
    {
      path: "/carlson",
      name: "carlson",
      component: Carlson
    },
    {
      path: "/darden",
      name: "darden",
      component: Darden
    },
    {
      path: "/fisher",
      name: "fisher",
      component: Fisher
    },
    {
      path: "/foster",
      name: "foster",
      component: Foster
    },
    {
      path: "/fuqua",
      name: "fuqua",
      component: Fuqua
    },
    {
      path: "/goizueta",
      name: "goizueta",
      component: Goizueta
    },
    {
      path: "/haas",
      name: "haas",
      component: Haas
    },
    {
      path: "/johnson",
      name: "johnson",
      component: Johnson
    },
    {
      path: "/jones",
      name: "jones",
      component: Jones
    },
    {
      path: "/kelley",
      name: "kelley",
      component: Kelley
    },
    {
      path: "/kenan-flagler",
      name: "kenanflagler",
      component: KenanFlagler
    },
    {
      path: "/marshall",
      name: "marshall",
      component: Marshall
    },
    {
      path: "/mccombs",
      name: "mccombs",
      component: McCombs
    },
    {
      path: "/mcdonough",
      name: "mcdonough",
      component: McDonough
    },
    {
      path: "/olin",
      name: "olin",
      component: Olin
    },
    {
      path: "/owen",
      name: "owen",
      component: Owen
    },
    {
      path: "/ross",
      name: "ross",
      component: Ross
    },
    {
      path: "/scheller",
      name: "scheller",
      component: Scheller
    },
    {
      path: "/stern",
      name: "stern",
      component: Stern
    },
    {
      path: "/tepper",
      name: "tepper",
      component: Tepper
    },
    {
      path: "/tuck",
      name: "tuck",
      component: Tuck
    },
    {
      path: "/london-business-school",
      name: "lbs",
      component: LondonBusinessSchool
    },
    {
      path: "/rotman",
      name: "rotman",
      component: Rotman
    },
    {
      path: "/ivey",
      name: "ivey",
      component: Ivey
    },
    {
      path: "/insead",
      name: "insead",
      component: Insead
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
