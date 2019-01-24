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
          height: 300,
          type: "column"
        },
        title: {
          text: "MBA Hiring for Nonprofit & Government"
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          categories: [],
          tickmarkPlacement: "on",
          title: {
            enabled: true,
            text: "% of Respondents",
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
            name: "Hiring",
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
      var dbRef = firebase.database().ref("gmac/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let itr = 0;
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key; // every year

          if (key != "source") {
            var totalData = childSnapshot.child("Nonprofit").val();
            vm.$set(vm.HiringConsultingChart.xAxis.categories, itr, key);
            vm.$set(vm.HiringConsultingChart.series[0].data, itr, totalData);
            itr++;
          }
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
