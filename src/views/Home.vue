<template>
  <div>
    <section class="hero is-info is-large">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">MBA Job Placement Data</p>
          <p
            class="subtitle"
          >A free resource for prospective mba students to easily view and analyze job placement statistics issued by the top business schools.</p>
          <router-link :to="{ name: 'harvard' }">
            <a class="button is-info is-inverted is-large">Browse by Schools</a>
          </router-link>
          <!--<router-link :to="{ name: 'industry' }">
            <a class="button is-info is-inverted is-large">Browse by Industries</a>
          </router-link>-->
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
