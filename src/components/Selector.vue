<template>
  <div class="container">
    <router-link :to="{ name: 'harvard' }">
      <a class="button is-small is-rounded">Harvard</a>
    </router-link>
    <router-link :to="{ name: 'stanford' }">
      <a class="button is-small is-rounded">Stanford</a>
    </router-link>
    <router-link :to="{ name: 'wharton' }">
      <a class="button is-small is-rounded">Wharton</a>
    </router-link>
    <router-link :to="{ name: 'sloan' }">
      <a class="button is-small is-rounded">Sloan</a>
    </router-link>
    <router-link :to="{ name: 'kellogg' }">
      <a class="button is-small is-rounded">Kellogg</a>
    </router-link>
    <router-link :to="{ name: 'booth' }">
      <a class="button is-small is-rounded">Booth</a>
    </router-link>
    <router-link :to="{ name: 'columbia' }">
      <a class="button is-small is-rounded">Columbia</a>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  margin: 1px;
}

.container {
  margin-bottom: 20px;
}
</style>
