<template>
  <div>
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
  </div>
</template>

<script>
import ColumbiaIndustry from "@/components/columbia/ColumbiaIndustry.vue";
import ColumbiaProfile from "@/components/columbia/ColumbiaProfile.vue";
//import ColumbiaEmployment from "@/components/columbia/ColumbiaEmployment.vue";
import ColumbiaIndustryPercent from "@/components/columbia/ColumbiaIndustryPercent.vue";

export default {
  components: {
    ColumbiaIndustry,
    ColumbiaProfile,
    //ColumbiaEmployment,
    ColumbiaIndustryPercent
  }
};
</script>

<style>
</style>
