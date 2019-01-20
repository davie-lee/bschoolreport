<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="AverageAgeChart" ref="areaCharts"></vue-highcharts>
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
      AverageAgeChart: {
        chart: {
          height: 300,
          type: "line"
        },
        title: {
          text: "Average Age"
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          categories: [],
          tickmarkPlacement: "on",
          title: {
            enabled: true,
            text: "Students",
            align: "high"
          }
        },
        yAxis: {
          title: {
            enabled: false
          }
        },
        tooltip: {
          split: true
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
              style: {
                fontSize: "9px"
              }
            }
          }
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: "Age",
            color: "#ee5253",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.getAverageAgeData();
  },
  methods: {
    getAverageAgeData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("demographics/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let itr = 0;
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key; // every year

          if (key != "source") {
            var totalData = childSnapshot.child("Average Age").val();
            vm.$set(vm.AverageAgeChart.xAxis.categories, itr, key);
            vm.$set(vm.AverageAgeChart.series[0].data, itr, totalData);
            itr++;
          }
        });
        vm.AverageAgeChart.subtitle.text =
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
