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
        <WhartonProfile/>
        <WhartonEmployment/>
      </div>
      <div class="columns">
        <WhartonIndustry/>
        <WhartonIndustryPercent/>
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
import WhartonIndustry from "@/components/wharton/WhartonIndustry.vue";
import WhartonProfile from "@/components/wharton/WhartonProfile.vue";
import WhartonEmployment from "@/components/wharton/WhartonEmployment.vue";
import WhartonIndustryPercent from "@/components/wharton/WhartonIndustryPercent.vue";

export default {
  components: {
    NavBar,
    Footer,
    Selector,
    WhartonIndustry,
    WhartonProfile,
    WhartonEmployment,
    WhartonIndustryPercent
  }
};
</script>

<style>
</style>
