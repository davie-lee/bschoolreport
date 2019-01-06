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
        <ColumbiaProfile/>
        <ColumbiaIndustry/>
      </div>
      <div class="columns">
        <ColumbiaIndustryPercent/>
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
import ColumbiaIndustry from "@/components/columbia/ColumbiaIndustry.vue";
import ColumbiaProfile from "@/components/columbia/ColumbiaProfile.vue";
//import ColumbiaEmployment from "@/components/columbia/ColumbiaEmployment.vue";
import ColumbiaIndustryPercent from "@/components/columbia/ColumbiaIndustryPercent.vue";

export default {
  components: {
    NavBar,
    Footer,
    Selector,
    ColumbiaIndustry,
    ColumbiaProfile,
    //ColumbiaEmployment,
    ColumbiaIndustryPercent
  }
};
</script>

<style>
</style>
