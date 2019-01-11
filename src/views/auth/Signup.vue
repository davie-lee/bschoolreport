<template>
    <div></div>
</template>
<script>
import firebase from "firebase";
export default {
  methods: {
    async emailSignUp({ state }, payload) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  }
};
</script>
