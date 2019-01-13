<template>
  <div id="login">
    <div class="login-card">
      <div class="card-title">
        <h1>To view this free data, please login with your free account</h1>
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
        <button
          @click="emailLogin({email: email, password: password})"
          class="login btn btn-primary"
        >Sign in with email</button>
        <button @click="googleLogin()" type="button" class="provider-button">
          <span class="provider-button__icon">
            <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                id="Shape"
                fill="#EA4335"
              ></path>
              <path
                d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                id="Shape"
                fill="#FBBC05"
              ></path>
              <path
                d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                id="Shape"
                fill="#4285F4"
              ></path>
              <path
                d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                fill="#34A853"
              ></path>
            </svg>
          </span>
          <span class="provider-button__text">Sign in with Google</span>
        </button>
        <!--<button @click="facebookLogin()" type="button" class="provider-button">
          <span class="provider-button__icon">
            <svg
              viewBox="0 0 266 272"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              enable-background="new 0 0 266.893 266.895"
              xml:space="preserve"
            >
              <path
                id="Blue_1_"
                fill="#3C5A99"
                d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812  c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225  H248.082z"
              ></path>
              <path
                id="f"
                fill="#FFFFFF"
                d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935  l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585  v99.803H182.409z"
              ></path>
            </svg>
          </span>
          <span class="provider-button__text">Sign in with Facebook</span>
        </button>-->
        <div class="level options signup-suggest">
          <router-link
            tag="a"
            class="btn btn-link level-right"
            to="/signup"
          >Don't have an account? Sign up free.</router-link>
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
      emailErrMsg: null
    };
  },
  methods: {
    async emailLogin(payload) {
      let vm = this;
      await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .catch(function(error) {
          vm.emailErrMsg = error.message;
        });
    },
    async googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    },
    async facebookLogin() {
      const provider = new firebase.auth.FacebookAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    }
  }
};
</script>

<style>
</style>


<style lang="scss">
$primary: #209cee;
$grey-darker: hsl(0, 0%, 21%);
$grey-dark: hsl(0, 0%, 29%);
$grey: hsl(0, 0%, 48%);
$grey-light: hsl(0, 0%, 71%);
$grey-lighter: hsl(0, 0%, 86%);

#login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  background: #ffffff;

  .login-card {
    background: #fff;
    width: 24rem;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.11);
    border-radius: 2rem;

    .signup-suggest {
      margin-top: 2em;
    }

    .card-title {
      background-color: darken($primary, 5%);
      padding: 2rem;
      border-radius: 2em 2em 0 0;

      h1 {
        color: #fff;
        text-align: center;
        font-size: 1.2rem;
      }
      h2 {
        color: #fff;
        text-align: center;
      }
    }

    .content {
      padding: 3rem 2.5rem 5rem;
    }

    #email,
    #password {
      display: block;
      width: 100%;
      font-size: 1rem;
      margin-bottom: 1.75rem;
      padding: 0.25rem 0;
      border: none;
      border-bottom: 1px solid $grey-lighter;
      transition: all 0.5s;

      &:hover {
        border-color: $grey;
      }

      &:active,
      &:focus {
        border-color: $primary;
      }
    }

    .checkbox {
      color: $grey-light;
      font-size: 0.8rem;

      span {
        margin-left: 0.5rem;
      }
    }

    a {
      font-size: 0.8rem;
    }

    .options {
      color: $grey-light;
      margin-bottom: 1.5rem;
    }

    button.login {
      cursor: pointer;
      font-size: 1.2rem;
      color: $primary;
      border-radius: 4rem;
      display: block;
      width: 100%;
      background: transparent;
      border: 2px solid $primary;
      padding: 0.9rem 0 1.1rem;
      transition: color 0.5s, border-color 0.5s;

      &:hover,
      &:focus {
        color: darken($primary, 10%);
        border-color: darken($primary, 10%);
      }

      &:active {
        transform: translateY(1px);
      }
    }
  }
}

label {
  cursor: pointer;
}

.regular-checkbox {
  display: none;
}

.regular-checkbox + label {
  background-color: #fafafa;
  border: 1px solid $grey-lighter;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 7px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.regular-checkbox:checked + label {
  background-color: #e9ecee;
}

.regular-checkbox:checked + label:after {
  content: "\2714";
  font-size: 11px;
  position: absolute;
  top: 0;
  left: 3px;
  color: $grey-light;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.provider-button {
  height: 40px;
  border-width: 0;
  margin-top: 15px;
  background: white;
  color: #737373;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;

  &:focus,
  &:hover {
    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:active {
    background-color: #e5e5e5;
    box-shadow: none;
    transition-duration: 10ms;
  }
}

.provider-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
}

.provider-button__icon--plus {
  width: 27px;
}

.provider-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 24px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Roboto", arial, sans-serif;
}
</style>
