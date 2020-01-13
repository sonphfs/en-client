<template>
  <chart :chart-data="datacollection" :options="options"></chart>
</template>
<script>
import Chart from "@/charts/line-chart";
import request from "@/utils/request";
export default {
  components: {
    Chart
  },
  props: ["examCode"],
  data() {
    return {
      datacollection: null,
      logData: [],
      options: {
        responsive: true,
        legend: {
          display: false
        },
        layout: {
          padding: 10
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true
              },
              ticks: {
                min: 0,
                max: 990
              }
            }
          ]
        }
      },
      code: null
    };
  },
  created() {
    this.code = this.examCode;
    request({
      url: "exam-log/" + this.code,
      method: "get"
    })
      .then(res => {
        this.logData = res.data.result_data.Logs;
        let labels = [];
        let data = [];
        let target = [];
        this.logData.forEach((e, i) => {
          labels.push(i + 1);
          data.push(e.total_score);
          // target.push(800);
        });
        this.datacollection = {
          labels: labels,
          datasets: [
            {
              label: "Score",
              backgroundColor: "#42b983",
              data: data
            },
            // {
            //   label: "Target",
            //   backgroundColor: "#f87979",
            //   data: target
            // }
          ]
        };
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err.res);
      });
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {}
  }
};
</script>
<style>
</style>