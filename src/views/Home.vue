<template>
  <div>
    <section class="hero is-info is-large">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">MBA Employment Data</p>
          <p
            class="subtitle"
          >We visualized all the employment salary report data issued by the top business schools we could find to help you make better decisions</p>
          <router-link :to="{ name: 'harvard' }">
            <a class="button is-info is-inverted is-large">Browse Data for Free</a>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-size: 50px;
  padding-bottom: 10px;
}
</style>
