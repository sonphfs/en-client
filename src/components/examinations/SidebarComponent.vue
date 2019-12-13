<template>
  <div class="col-md-3 grid-margin stretch-card part-navigation">
    <div class="card" style="max-height: 345px;">
      <div class="card-body d-flex flex-column">
        <div class="chartjs-size-monitor">
          <div class="chartjs-size-monitor-expand">
            <div></div>
          </div>
          <div class="chartjs-size-monitor-shrink">
            <div></div>
          </div>
        </div>
        <div class="wrapper">
          <h4 class="card-title mb-0">PART NAVIGATION</h4>
          <p></p>
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              <li class="page-item">
                <a @click="changeStep(1)" tabindex="-1" class="page-link">1</a>
              </li>
              <li class="page-item">
                <a @click="changeStep(2)" tabindex="-1" class="page-link">2</a>
              </li>
              <li class="page-item">
                <a @click="changeStep(3)" tabindex="-1" class="page-link">3</a>
              </li>
              <li class="page-item">
                <a @click="changeStep(4)" tabindex="-1" class="page-link">4</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              <li class="page-item">
                <a @click="changeStep(5)" tabindex="-1" class="page-link">5</a>
              </li>
              <li class="page-item">
                <a @click="changeStep(6)" tabindex="-1" class="page-link">6</a>
              </li>
              <li class="page-item">
                <a @click="changeStep(7)" tabindex="-1" class="page-link">7</a>
              </li>
            </ul>
          </nav>
          <div id="net-profit-legend" class="mb-4">
            <div class="chartjs-legend">
              <ul>
                <li>
                  <span style="background-color: rgba(88, 208, 222, 0.8);"></span>Time left:
                </li>
              </ul>
            </div>
            <p>{{hours}} giờ: {{minutes}} phút: {{seconds}} giây</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import Swal from "sweetalert2";
export default {
  name: "SidebarComponent",
  props: ["step"],
  data() {
    return {
      testTime: 30 - 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
      currentStep: this.step,
      isSubmit: false
    };
  },
  methods: {
    countdownTimeStart() {
      setInterval(() => {
        this.hours = Math.floor(this.testTime / 3600);
        this.minutes = Math.floor((this.testTime % 3600) / 60);
        this.seconds = (this.testTime % 3600) % 60;
        if(this.testTime > 0) {
          this.testTime--;
        }
      }, 1000);
    },
    changeStep(step) {
      this.currentStep = step;
    },
    updateStepToParent() {
      this.$emit("updateStep", this.currentStep);
    },
    submitExam() {
      let data = {
        listening_questions: JSON.parse(
          localStorage.getItem("result_listening")
        ),
        reading_questions: JSON.parse(localStorage.getItem("result_reading")),
        examination_code: this.$route.params.code
      };
      request({
        url: "/submit-examination",
        method: "post",
        data
      })
        .then(res => {
          this.isSubmit = true;
          console.log(res.data.result_data);
          let resultId = res.data.result_data.examination_log_id;
          this.$router.push(
            "/examination/result/" + resultId + "/" + this.$route.params.code
          );
        })
        .catch(err => {
          console.log(err);
        });
      console.log(data);
    }
  },
  created() {
    if (this.testTime > 0) {
      this.countdownTimeStart();
    }
  },
  watch: {
    currentStep() {
      this.updateStepToParent();
    },
    testTime() {
      if (this.testTime === 0) {
        if (this.isSubmit == false) this.submitExam();
        this.submitExam();
        Swal.fire(
          "Hết thời gian!",
          "Bài thi của bạn đã được nộp. Kết quả được gửi kèm trong email!",
          "info"
        );
      }
    }
  }
};
</script>

<style scoped>
.page-link {
  padding: 0.5rem 0.75rem;
}
</style>