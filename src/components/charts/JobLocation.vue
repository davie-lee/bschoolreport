<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="JobLocationChart" ref="areaCharts"></vue-highcharts>
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
      JobLocationChart: {
        chart: {
          type: "column"
        },
        title: {
          text: "2018 Job Location Placement"
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
          column: {
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
            color: "#ff6b6b",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.getJobLocatonData();
  },
  methods: {
    getJobLocatonData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("job_location/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let year = snapshot.child("year2018/percent");
        let itr = 0;
        year.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          vm.$set(vm.JobLocationChart.xAxis.categories, itr, key);
          vm.$set(vm.JobLocationChart.series[0].data, itr, childData);
          itr++;
        });

        vm.JobLocationChart.subtitle.text =
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
