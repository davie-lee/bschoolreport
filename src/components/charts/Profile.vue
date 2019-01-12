<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="ProfileChart" ref="areaCharts"></vue-highcharts>
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
      ProfileChart: {
        chart: {
          type: "area"
        },
        title: {
          text: "Total Students Enrolled"
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
          area: {
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
            name: "Total Enrolled",
            color: "#2e86de",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.getProfileData();
  },
  methods: {
    getProfileData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("demographics/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let itr = 0;
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key; // every year

          if (key != "source") {
            var totalData = childSnapshot.child("total").val();
            vm.$set(vm.ProfileChart.xAxis.categories, itr, key);
            vm.$set(vm.ProfileChart.series[0].data, itr, totalData);
            itr++;
          }
        });
        vm.ProfileChart.subtitle.text =
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
