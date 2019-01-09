<template>
  <div>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <WhartonProfile/>
        <Employment collegeref="wharton"/>
      </div>
      <div class="columns">
        <WhartonIndustry/>
        <WhartonIndustryPercent/>
      </div>
    </div>
  </div>
</template>

<script>
import WhartonIndustry from "@/components/wharton/WhartonIndustry.vue";
import WhartonProfile from "@/components/wharton/WhartonProfile.vue";
import Employment from "../components/charts/Employment.vue";
import WhartonIndustryPercent from "@/components/wharton/WhartonIndustryPercent.vue";

export default {
  components: {
    WhartonIndustry,
    WhartonProfile,
    Employment,
    WhartonIndustryPercent
  }
};
</script>

<style>
</style>
