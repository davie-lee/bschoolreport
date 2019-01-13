<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="FuncPercentChart" ref="areaCharts"></vue-highcharts>
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
      FuncPercentChart: {
        chart: {
          type: "bar"
        },
        title: {
          text: "Percent Accepts by Function"
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          categories: [],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "Percent (%)",
            align: "high"
          }
        },
        tooltip: {
          valueSuffix: "%"
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
              format: "{point.y}%",
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
            name: "2018",
            color: "#00d2d3",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.getFuncPercentData();
  },
  methods: {
    getFuncPercentData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("function_comp/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let year = snapshot.child("year2018/percent_accepts");
        let itr = 0;
        year.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          vm.$set(vm.FuncPercentChart.xAxis.categories, itr, key);
          vm.$set(vm.FuncPercentChart.series[0].data, itr, childData);
          itr++;
        });

        vm.FuncPercentChart.subtitle.text =
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
