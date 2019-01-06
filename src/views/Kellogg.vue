<template>
  <div>
    <section class="hero is-white has-text-center">
      <NavBar/>
    </section>

    <!-- School Menu -->
    <Selector/>

    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <KelloggProfile/>
        <KelloggEmployment/>
      </div>
      <div class="columns">
        <KelloggIndustry/>
        <KelloggIndustryPercent/>
      </div>
    </div>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Selector from "@/components/Selector.vue";
import KelloggIndustry from "@/components/kellogg/KelloggIndustry.vue";
import KelloggProfile from "@/components/kellogg/KelloggProfile.vue";
import KelloggEmployment from "@/components/kellogg/KelloggEmployment.vue";
import KelloggIndustryPercent from "@/components/kellogg/KelloggIndustryPercent.vue";

export default {
  components: {
    NavBar,
    Footer,
    Selector,
    KelloggIndustry,
    KelloggProfile,
    KelloggEmployment,
    KelloggIndustryPercent
  }
};
</script>

<style>
</style>
