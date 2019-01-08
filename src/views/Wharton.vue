<template>
  <div>
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
  </div>
</template>

<script>
import WhartonIndustry from "@/components/wharton/WhartonIndustry.vue";
import WhartonProfile from "@/components/wharton/WhartonProfile.vue";
import WhartonEmployment from "@/components/wharton/WhartonEmployment.vue";
import WhartonIndustryPercent from "@/components/wharton/WhartonIndustryPercent.vue";

export default {
  components: {
    WhartonIndustry,
    WhartonProfile,
    WhartonEmployment,
    WhartonIndustryPercent
  }
};
</script>

<style>
</style>
