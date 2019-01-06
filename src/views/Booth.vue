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
        <BoothProfile/>
        <BoothEmployment/>
      </div>
      <div class="columns">
        <BoothIndustry/>
        <BoothIndustryPercent/>
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
import BoothIndustry from "@/components/booth/BoothIndustry.vue";
import BoothProfile from "@/components/booth/BoothProfile.vue";
import BoothEmployment from "@/components/booth/BoothEmployment.vue";
import BoothIndustryPercent from "@/components/booth/BoothIndustryPercent.vue";

export default {
  components: {
    NavBar,
    Footer,
    Selector,
    BoothIndustry,
    BoothProfile,
    BoothEmployment,
    BoothIndustryPercent
  }
};
</script>

<style>
</style>
