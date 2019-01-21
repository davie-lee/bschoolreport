<template>
  <div class="container">
    <router-link :to="{ name: 'anderson' }">
      <a class="button is-small is-rounded">Anderson</a>
    </router-link>
    <router-link :to="{ name: 'booth' }">
      <a class="button is-small is-rounded">Booth</a>
    </router-link>
    <router-link :to="{ name: 'carey' }">
      <a class="button is-small is-rounded">Carey</a>
    </router-link>
    <router-link :to="{ name: 'carlson' }">
      <a class="button is-small is-rounded">Carlson</a>
    </router-link>
    <router-link :to="{ name: 'columbia' }">
      <a class="button is-small is-rounded">Columbia</a>
    </router-link>
    <router-link :to="{ name: 'darden' }">
      <a class="button is-small is-rounded">Darden</a>
    </router-link>
    <router-link :to="{ name: 'fisher' }">
      <a class="button is-small is-rounded">Fisher</a>
    </router-link>
    <router-link :to="{ name: 'foster' }">
      <a class="button is-small is-rounded">Foster</a>
    </router-link>
    <router-link :to="{ name: 'fuqua' }">
      <a class="button is-small is-rounded">Fuqua</a>
    </router-link>
    <router-link :to="{ name: 'goizueta' }">
      <a class="button is-small is-rounded">Goizueta</a>
    </router-link>
    <router-link :to="{ name: 'haas' }">
      <a class="button is-small is-rounded">Haas</a>
    </router-link>
    <router-link :to="{ name: 'harvard' }">
      <a class="button is-small is-rounded">Harvard</a>
    </router-link>
    <router-link :to="{ name: 'insead' }">
      <a class="button is-small is-rounded">Insead</a>
    </router-link>
    <router-link :to="{ name: 'ivey' }">
      <a class="button is-small is-rounded">Ivey</a>
    </router-link>
    <router-link :to="{ name: 'johnson' }">
      <a class="button is-small is-rounded">Johnson</a>
    </router-link>
    <router-link :to="{ name: 'jones' }">
      <a class="button is-small is-rounded">Jones</a>
    </router-link>
    <router-link :to="{ name: 'kelley' }">
      <a class="button is-small is-rounded">Kelley</a>
    </router-link>
    <router-link :to="{ name: 'kellogg' }">
      <a class="button is-small is-rounded">Kellogg</a>
    </router-link>
    <router-link :to="{ name: 'kenanflagler' }">
      <a class="button is-small is-rounded">Kenan-Flagler</a>
    </router-link>
    <router-link :to="{ name: 'lbs' }">
      <a class="button is-small is-rounded">London Business School</a>
    </router-link>
    <router-link :to="{ name: 'marshall' }">
      <a class="button is-small is-rounded">Marshall</a>
    </router-link>
    <router-link :to="{ name: 'mccombs' }">
      <a class="button is-small is-rounded">McCombs</a>
    </router-link>
    <router-link :to="{ name: 'mcdonough' }">
      <a class="button is-small is-rounded">McDonough</a>
    </router-link>
    <router-link :to="{ name: 'olin' }">
      <a class="button is-small is-rounded">Olin</a>
    </router-link>
    <router-link :to="{ name: 'owen' }">
      <a class="button is-small is-rounded">Owen</a>
    </router-link>
    <router-link :to="{ name: 'ross' }">
      <a class="button is-small is-rounded">Ross</a>
    </router-link>
    <router-link :to="{ name: 'rotman' }">
      <a class="button is-small is-rounded">Rotman</a>
    </router-link>
    <router-link :to="{ name: 'scheller' }">
      <a class="button is-small is-rounded">Scheller</a>
    </router-link>
    <router-link :to="{ name: 'sloan' }">
      <a class="button is-small is-rounded">Sloan</a>
    </router-link>
    <router-link :to="{ name: 'stanford' }">
      <a class="button is-small is-rounded">Stanford</a>
    </router-link>
    <router-link :to="{ name: 'stern' }">
      <a class="button is-small is-rounded">Stern</a>
    </router-link>
    <router-link :to="{ name: 'tepper' }">
      <a class="button is-small is-rounded">Tepper</a>
    </router-link>
    <router-link :to="{ name: 'tuck' }">
      <a class="button is-small is-rounded">Tuck</a>
    </router-link>
    <router-link :to="{ name: 'wharton' }">
      <a class="button is-small is-rounded">Wharton</a>
    </router-link>
    <router-link :to="{ name: 'yale' }">
      <a class="button is-small is-rounded">Yale</a>
    </router-link>
    <div class="note">
      <b>Note</b>: If a chart is blank or says null, it indicates we couldn't find the data easily. If you'd like to help find the data, please contribute to our community
      <a
        href="https://docs.google.com/spreadsheets/d/1t8F4GpEQUZ38cASm80WsmF0mYGRfsuu0v0Q7NaHmsp8/edit?usp=sharing"
        target="new"
      >here</a>.
    </div>
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

.note {
  margin-top: 15px;
  font-size: 11px;
  color: #8395a7;
  font-style: italic;
}
</style>
