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
        <StanfordProfile/>
        <StanfordEmployment/>
      </div>
      <div class="columns">
        <StanfordIndustry/>
        <StanfordIndustryPercent/>
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
import StanfordIndustry from "@/components/stanford/StanfordIndustry.vue";
import StanfordProfile from "@/components/stanford/StanfordProfile.vue";
import StanfordEmployment from "@/components/stanford/StanfordEmployment.vue";
import StanfordIndustryPercent from "@/components/stanford/StanfordIndustryPercent.vue";

export default {
  components: {
    NavBar,
    Footer,
    Selector,
    StanfordIndustry,
    StanfordProfile,
    StanfordEmployment,
    StanfordIndustryPercent
  }
};
</script>

<style>
</style>
