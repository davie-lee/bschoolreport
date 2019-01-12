import firebase from "firebase";
import store from "@/store";
import router from "@/router";

var config = {
  apiKey: "AIzaSyBEMj_hL0HD2mGze2Eeqmqmsb0SzItp0Ng",
  authDomain: "bizschoolreport.firebaseapp.com",
  databaseURL: "https://bizschoolreport.firebaseio.com",
  projectId: "bizschoolreport",
  storageBucket: "bizschoolreport.appspot.com",
  messagingSenderId: "724112956491"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit("setUser", user);
    router.push("/");
  } else {
    store.commit("setUser", null);
  }
});
