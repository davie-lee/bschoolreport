<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="HiringIBChart" ref="areaCharts"></vue-highcharts>
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
      HiringIBChart: {
        chart: {
          height: 500,
          type: "bar"
        },
        title: {
          text: "MBA Placement for Investment Banking"
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
    this.getHiringIBData();
  },
  methods: {
    getHiringIBData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("placement_ib/");

      dbRef.once("value").then(function(snapshot) {
        let year = snapshot.child("2018/");
        let itr = 0;
        year.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          vm.$set(vm.HiringIBChart.xAxis.categories, itr, key);
          vm.$set(vm.HiringIBChart.series[0].data, itr, childData);
          itr++;
        });

        vm.HiringIBChart.subtitle.text =
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
