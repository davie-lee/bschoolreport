<template>
  <div>
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

  </div>
</template>

<script>
import BoothIndustry from "@/components/booth/BoothIndustry.vue";
import BoothProfile from "@/components/booth/BoothProfile.vue";
import BoothEmployment from "@/components/booth/BoothEmployment.vue";
import BoothIndustryPercent from "@/components/booth/BoothIndustryPercent.vue";

export default {
  components: {
    BoothIndustry,
    BoothProfile,
    BoothEmployment,
    BoothIndustryPercent
  }
};
</script>

<style>
</style>
