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
            data: []
          }
        ]
      }
    };
  },
  mounted: async function() {
    await this.getEmploymentData();
  },
  methods: {
    getEmploymentData: async function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase
        .database()
        .ref("employment_profile/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let year = snapshot.child("year2018");
        let itr = 0;
        year.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          if (key != "Total") {
            vm.$set(vm.EmploymentChart.series[0].data, itr, [key, childData]);
            itr++;
          }
        });

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
