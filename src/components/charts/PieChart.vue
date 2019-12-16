<template>
  <div id="myChart">
    <pie-chart :data="chartData" :options="chartOptions" :plugins="ChartPlugins"></pie-chart>
  </div>
</template>

<script>
import PieChart from "@/charts/pie-chart";
import request from "@/utils/request";
export default {
  name: "TestResultChart",
  props: ["examLogId"],
  components: {
    PieChart
  },
  data() {
    return {
      score: 0,
      chartOptions: {
        hoverBorderWidth: 20,
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px",
        legend: {
          display: false
        }
      },
      ChartPlugins: [],
      chartData: {}
    };
  },
  created() {
    this.getTestHistories();
    this.bindChartData();
  },
  methods: {
    async getTestHistories() {
      request({
        url: "/exam/get-total-score/" + this.$route.params.examLogId,
        method: "get"
      }).then(res => {
        this.score = res.data.result_data.total_score;
      });
    },
    bindChartData() {
      let bindThis = this;
      this.ChartPlugins = [
        {
          beforeDraw: function(chart) {
            var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;

            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = bindThis.score + "%";
            var textX = Math.round((width - ctx.measureText(text).width) / 2);
            var textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        }
      ];
      console.log(bindThis.score)
      this.chartData = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["result", ""],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883"],
            data: [bindThis.score, 100 - bindThis.score]
          }
        ]
      };
    }
  },
  watch: {
    score(){
      let bindThis = this;
      this.chartData = {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["result", ""],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883"],
            data: [bindThis.score, 100 - bindThis.score]
          }
        ]
      };
    }
  }
};
</script>
