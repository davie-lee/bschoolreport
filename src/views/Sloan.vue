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
        <SloanProfile/>
        <SloanEmployment/>
      </div>
      <div class="columns">
        <SloanIndustry/>
        <SloanIndustryPercent/>
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
import SloanIndustry from "@/components/sloan/SloanIndustry.vue";
import SloanProfile from "@/components/sloan/SloanProfile.vue";
import SloanEmployment from "@/components/sloan/SloanEmployment.vue";
import SloanIndustryPercent from "@/components/sloan/SloanIndustryPercent.vue";

export default {
  components: {
    NavBar,
    Footer,
    Selector,
    SloanIndustry,
    SloanProfile,
    SloanEmployment,
    SloanIndustryPercent
  }
};
</script>

<style>
</style>
