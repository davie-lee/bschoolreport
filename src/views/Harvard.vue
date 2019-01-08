<template>
  <div>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <HarvardProfile/>
        <HarvardEmployment/>
      </div>
      <div class="columns">
        <HarvardIndustry/>
        <HarvardIndustryPercent/>
      </div>
    </div>
  </div>
</template>

<script>
import HarvardIndustry from "@/components/harvard/HarvardIndustry.vue";
import HarvardProfile from "@/components/harvard/HarvardProfile.vue";
import HarvardEmployment from "@/components/harvard/HarvardEmployment.vue";
import HarvardIndustryPercent from "@/components/harvard/HarvardIndustryPercent.vue";

export default {
  components: {
    HarvardIndustry,
    HarvardProfile,
    HarvardEmployment,
    HarvardIndustryPercent
  }
};
</script>

<style>
</style>
