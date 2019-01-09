<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="EmploymentChart" ref="areaCharts"></vue-highcharts>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import VueHighcharts from "vue2-highcharts";

export default {
  components: {
    VueHighcharts
  },
  props: ["collegeref"],
  data() {
    return {
      isDataReady: false,
      EmploymentChart: {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: "Employment Summary"
        },
        subtitle: {
          text: ""
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45,
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              style: {
                fontSize: "9px"
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: "Total",
            data: [
              ["Seeking Employment", ""],
              ["Company Sponsored", ""],
              ["Self Employed", ""],
              ["Postponed Job Search", ""],
              ["Continuing Education", ""],
              ["No Response", ""]
            ]
          }
        ]
      }
    };
  },
  mounted: async function() {
    await this.getEmploymentReport();
  },
  methods: {
    getEmploymentReport: async function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase
        .database()
        .ref("employment_profile/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        var year = snapshot.child("year2018");

        vm.$set(
          vm.EmploymentChart.series[0].data[0],
          1,
          year.child("Seeking Employment").val()
        );
        vm.$set(
          vm.EmploymentChart.series[0].data[1],
          1,
          year.child("Company Sponsored").val()
        );
        vm.$set(
          vm.EmploymentChart.series[0].data[2],
          1,
          year.child("Starting Own Business").val()
        );
        vm.$set(
          vm.EmploymentChart.series[0].data[3],
          1,
          year.child("Postponing Job Search").val()
        );
        vm.$set(
          vm.EmploymentChart.series[0].data[4],
          1,
          year.child("Continuing Education").val()
        );
        vm.$set(
          vm.EmploymentChart.series[0].data[5],
          1,
          year.child("No Response").val()
        );

        vm.EmploymentChart.subtitle.text =
          "Source: " + snapshot.child("source").val();
        vm.isDataReady = true;
      });
    }
  }
};
</script>

<style>
.card {
  padding: 20px;
}
</style>
