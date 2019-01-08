<template>
  <div>
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
  </div>
</template>

<script>
import StanfordIndustry from "@/components/stanford/StanfordIndustry.vue";
import StanfordProfile from "@/components/stanford/StanfordProfile.vue";
import StanfordEmployment from "@/components/stanford/StanfordEmployment.vue";
import StanfordIndustryPercent from "@/components/stanford/StanfordIndustryPercent.vue";

export default {
  components: {
    StanfordIndustry,
    StanfordProfile,
    StanfordEmployment,
    StanfordIndustryPercent
  }
};
</script>

<style>
</style>
