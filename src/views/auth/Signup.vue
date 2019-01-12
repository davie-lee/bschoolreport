<template>
  <div id="login">
    <div class="login-card">
      <div class="card-title">
        <h1>Sign Up</h1>
        <h2>Completely Free!</h2>
      </div>
      <div class="content">
        <div v-show="emailErrMsg" class="notification is-danger">
          <button @click="emailErrMsg = null" class="delete"></button>
          {{emailErrMsg}}
        </div>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          title="email"
          placeholder="Email"
          required
          autofocus
        >
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          title="password"
          placeholder="Password"
          required
        >
        <input
          id="password"
          v-model="repeatPassword"
          type="password"
          name="password"
          title="password"
          placeholder="Repeat password"
          required
        >
        <button
          @click="emailSignUp({email: email, password: password})"
          class="login btn btn-primary"
        >Sign up with email</button>
        <div class="level options signup-suggest">
          <router-link
            tag="a"
            class="btn btn-link level-right"
            to="/login"
          >Already have an account? Sign in here</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      emailErrMsg: null
    };
  },
  methods: {
    async emailSignUp(payload) {
      if (this.password == this.repeatPassword) {
        let vm = this;
        await firebase
          .auth()
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .catch(function(error) {
            vm.emailErrMsg = error.message;
          });
      } else {
        this.emailErrMsg = "Passwords do not match.";
      }
    }
  }
};
</script>
