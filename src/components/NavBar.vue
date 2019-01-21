<template>
  <div id="nav">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link :to="{ name: 'harvard' }">
          <a class="navbar-item" href="/">
            <img src="@/assets/bschool_logo.png">
          </a>
        </router-link>
      </div>
      <div class="navbar-menu is-transparent">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p v-if="isLoggedIn" @click="logout()" class="control">
                <a class="button is-info is-rounded">
                  <span>Logout</span>
                </a>
              </p>
              <p v-else @click="router.push('/login')" class="control">
                <a class="button is-info is-rounded">
                  <span>Login</span>
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
.navbar-item {
  display: flex;
}

.navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
  align-items: stretch;
  display: flex;
  padding: 0;
}

.navbar-menu {
  flex-grow: 1;
  flex-shrink: 0;
}
.navbar-start {
  justify-content: flex-start;
  margin-right: auto;
}
.navbar-end {
  justify-content: flex-end;
  margin-left: auto;
}
</style>
