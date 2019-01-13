<template>
  <div id="app">
    <vue-headful title="MBA Job Reports" description="Free resource for prospective MBA students"/>
    <section class="hero is-white has-text-center">
      <NavBar/>
    </section>
    <router-view/>
    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>



<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
