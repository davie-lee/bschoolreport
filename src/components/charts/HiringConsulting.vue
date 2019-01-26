<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="HiringConsultingChart" ref="areaCharts"></vue-highcharts>
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
      HiringConsultingChart: {
        chart: {
          height: 700,
          type: "bar"
        },
        title: {
          text: "MBA Placement for Consulting"
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
    this.getHiringConsultingData();
  },
  methods: {
    getHiringConsultingData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("placement_consulting/");

      dbRef.once("value").then(function(snapshot) {
        let year = snapshot.child("2018/");
        let itr = 0;
        year.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          vm.$set(vm.HiringConsultingChart.xAxis.categories, itr, key);
          vm.$set(vm.HiringConsultingChart.series[0].data, itr, childData);
          itr++;
        });

        vm.HiringConsultingChart.subtitle.text =
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
