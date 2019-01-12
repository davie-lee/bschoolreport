<template>
  <div id="nav">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">MBA Job Report Statistics</a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p v-if="isLoggedIn" @click="logout()" class="control">
                <a
                  class="button is-info is-rounded"
                >
                  <span>Logout</span>
                </a>
              </p>
              <p v-else @click="router.push('/login')" class="control">
                <a
                  class="button is-info is-rounded"
                >
                  <span>Sign in</span>
                </a>
              </p>
              <p class="control">
                <a
                  class="button is-info is-rounded"
                  href="https://mbajobreport.typeform.com/to/hMGk76"
                  target="blank"
                >
                  <span>Request MBA School</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "../router";

export default {
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapState({
      isLoggedIn: "isLoggedIn"
    }),
    router: () => router
  }
};
</script>

<style scoped>
</style>
