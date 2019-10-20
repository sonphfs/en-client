<template>
  <chart :chart-data="datacollection" :width="301" :height="300"></chart>
</template>
    <script>
import Chart from "@/charts/line-chart";
import request from "@/utils/request";
export default {
  components: {
    Chart
  },
  data() {
    return {
      datacollection: null,
      logData: []
    };
  },
  created() {
    request({
      url: "exam-log",
      method: "get"
    })
      .then(res => {
        console.log(res.data)
        this.logData = res.data.result_data.Logs;
        let labels = [];
        let data = [];
        this.logData.forEach((e, i) => {
          labels.push(i + 1);
          data.push(e.total_score);
        });
        this.datacollection = {
          labels: labels,
          datasets: [
            {
              label: "Score",
              data: data
            }
          ]
        };
      })
      .catch(err => {
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