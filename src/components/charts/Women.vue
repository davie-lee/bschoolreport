<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="WomenChart" ref="areaCharts"></vue-highcharts>
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
      WomenChart: {
        chart: {
          height: 300,
          type: "column"
        },
        title: {
          text: "Percentage of Women Students"
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
          column: {
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
            name: "Percent (%)",
            color: "#00d2d3",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.getWomenData();
  },
  methods: {
    getWomenData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("demographics/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let itr = 0;
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key; // every year

          if (key != "source") {
            var totalData = childSnapshot.child("Women").val();
            vm.$set(vm.WomenChart.xAxis.categories, itr, key);
            vm.$set(vm.WomenChart.series[0].data, itr, totalData);
            itr++;
          }
        });
        vm.WomenChart.subtitle.text =
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
