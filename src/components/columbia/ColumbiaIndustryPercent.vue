<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts :options="areaOptions" ref="areaCharts"></vue-highcharts>
      </div>
    </div>
  </div>
</template>

<script>
import VueHighcharts from "vue2-highcharts";
import * as data from "@/assets/columbiadata.js";

export default {
  components: {
    VueHighcharts
  },
  data() {
    return {
      areaOptions: data.ColumbiaIndustryPercent
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.card {
  padding: 20px;
}
</style>
