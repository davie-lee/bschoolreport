<template>
  <div class="column is-6">
    <div class="card">
      <div class="content">
        <vue-highcharts v-if="isDataReady" :options="IndustryChart" ref="areaCharts"></vue-highcharts>
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
      IndustryChart: {
        chart: {
          type: "bar"
        },
        title: {
          text: "Median Salary by Industry"
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
            text: "Dollar ($)",
            align: "high"
          }
        },
        tooltip: {
          valuePrefix: "$"
        },
        plotOptions: {
          bar: {
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
            name: "2018",
            color: "#01a3a4",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.getIndustryData();
  },
  methods: {
    getIndustryData: function() {
      var vm = this;
      vm.isDataReady = false;
      var dbRef = firebase.database().ref("industry_comp/" + this.collegeref);

      dbRef.once("value").then(function(snapshot) {
        let year = snapshot.child("year2018/median_salary");
        let itr = 0;
        year.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          vm.$set(vm.IndustryChart.xAxis.categories, itr, key);
          vm.$set(vm.IndustryChart.series[0].data, itr, childData);
          itr++;
        });

        vm.IndustryChart.subtitle.text =
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
