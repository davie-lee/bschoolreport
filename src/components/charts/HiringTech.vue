<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="HiringTechChart" ref="areaCharts"></vue-highcharts>
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
      HiringTechChart: {
        chart: {
          height: 700,
          type: "bar"
        },
        title: {
          text: "MBA Placement for Technology"
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
            text: "Percentage (%)",
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
            color: "#54a0ff",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.getHiringTechData();
  },
  methods: {
    getHiringTechData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("placement_tech/");

      dbRef.once("value").then(function(snapshot) {
        let year = snapshot.child("2018/");
        let itr = 0;
        year.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          vm.$set(vm.HiringTechChart.xAxis.categories, itr, key);
          vm.$set(vm.HiringTechChart.series[0].data, itr, childData);
          itr++;
        });

        vm.HiringTechChart.subtitle.text =
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
