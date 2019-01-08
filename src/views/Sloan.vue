<template>
  <div>
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
  </div>
</template>

<script>
import SloanIndustry from "@/components/sloan/SloanIndustry.vue";
import SloanProfile from "@/components/sloan/SloanProfile.vue";
import SloanEmployment from "@/components/sloan/SloanEmployment.vue";
import SloanIndustryPercent from "@/components/sloan/SloanIndustryPercent.vue";

export default {
  components: {
    SloanIndustry,
    SloanProfile,
    SloanEmployment,
    SloanIndustryPercent
  }
};
</script>

<style>
</style>
