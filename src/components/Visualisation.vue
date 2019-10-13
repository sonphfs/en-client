 <template>
  <chart :chart-data="datacollection" :width="301" :height="300"></chart>
</template>
    <script>
import Chart from "./../Chart.js";
export default {
  components: {
    Chart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ],
        datasets: [
          {
            label: "Total Score",
            data: [380, 380, 380, 430, 600, 400, 300, 900, 730, 715, 700]
          }
        ]
      };
    }
  }
};
</script>
    <style>
</style>