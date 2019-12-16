<template>
  <div id="myChart">
    <pie-chart :data="chartData" :options="chartOptions" :plugins="ChartPlugins"></pie-chart>
  </div>
</template>

<script>
import PieChart from "@/charts/pie-chart";
export default {
  name: "TestResultChart",
  props: ["resultData"],
  components: {
    PieChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20,
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px",
        legend: {
          display: false
        },
      },
      ChartPlugins: [{
          beforeDraw: function(chart) {
            var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;

            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var text = "80%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          }
        }]
      ,
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["result", ""],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883"],
            data: [80, 20]
          }
        ]
      }
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      Chart.pluginService.register({});
    }
  }
};
</script>
