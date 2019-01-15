<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="AverageGpaChart" ref="areaCharts"></vue-highcharts>
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
      AverageGpaChart: {
        chart: {
          height: 300,
          type: "line"
        },
        title: {
          text: "Average GPA"
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
            name: "GPA",
            color: "#2e86de",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.getAverageGpaData();
  },
  methods: {
    getAverageGpaData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("demographics/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let itr = 0;
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key; // every year

          if (key != "source") {
            var totalData = childSnapshot.child("Average GPA").val();
            vm.$set(vm.AverageGpaChart.xAxis.categories, itr, key);
            vm.$set(vm.AverageGpaChart.series[0].data, itr, totalData);
            itr++;
          }
        });
        vm.AverageGpaChart.subtitle.text =
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
