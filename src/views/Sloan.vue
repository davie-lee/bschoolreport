<template>
  <div>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <SloanProfile/>
        <Employment collegeref="sloan" />
      </div>
      <div class="columns">
        <SloanIndustry/>
        <SloanIndustryPercent/>
      </div>
    </div>
  </div>
</template>

<script>
import SloanIndustry from "@/components/sloan/SloanIndustry.vue";
import SloanProfile from "@/components/sloan/SloanProfile.vue";
import SloanIndustryPercent from "@/components/sloan/SloanIndustryPercent.vue";
import Employment from "../components/charts/Employment";
export default {
  components: {
    SloanIndustry,
    SloanProfile,
    Employment,
    SloanIndustryPercent
  }
};
</script>

<style>
</style>
