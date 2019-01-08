<template>
  <div>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <KelloggProfile/>
        <KelloggEmployment/>
      </div>
      <div class="columns">
        <KelloggIndustry/>
        <KelloggIndustryPercent/>
      </div>
    </div>

  </div>
</template>

<script>
import KelloggIndustry from "@/components/kellogg/KelloggIndustry.vue";
import KelloggProfile from "@/components/kellogg/KelloggProfile.vue";
import KelloggEmployment from "@/components/kellogg/KelloggEmployment.vue";
import KelloggIndustryPercent from "@/components/kellogg/KelloggIndustryPercent.vue";

export default {
  components: {
    KelloggIndustry,
    KelloggProfile,
    KelloggEmployment,
    KelloggIndustryPercent
  }
};
</script>

<style>
</style>
