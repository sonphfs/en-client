<template>
  <div>
    <Question
      v-for="(question, key) in exam.questions"
      :key="key + Math.random()"
      :item="question"
      v-show="key==step"
      @nextQuestion="nextStep"
    ></Question>
    <div class="col-md-12 progress-test">
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 25%"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "@/components/elements/Question";
import request from "@/utils/request";
export default {
  name: "Test",
  components: {
    Question
  },
  data() {
    return {
      exam: {},
      step: 0,
      examLogId: null
    };
  },
  created() {
    this.getExam();
    localStorage.setItem("exam_data", JSON.stringify([]));
  },
  methods: {
    getExam() {
      request({
        url: "/test/1"
      })
        .then(res => {
          this.exam = res.data.result_data;
        })
        .catch(err => {});
    },
    nextStep() {
      if (this.step == this.exam.questions.length-1) {
        this.submitExam();
      } else {
        this.step++;
      }
    },
    submitExam() {
      let examData = JSON.parse(localStorage.getItem("exam_data"));
      let data = {
        questions: examData
      }
      request({
        url: "/submit-test",
        method: "post",
        data
      }).then(res => {
        this.examLogId = res.data.result_data.id;
        this.$router.push("/test/result/" + 1 + "/322");
      });
    }
  }
};
</script>