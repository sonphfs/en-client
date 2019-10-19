<template>
  <div class="col-md-9 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h3>Part 7</h3>
        <p>
          <strong>Directions:</strong> In this part, you will read a selection of texts, such as magazine and newspaper articles, letters, and advertisements. Each text is followed by several questions. Select the best answer for each question.
        </p>
        <hr />
        <Question
          v-for="question in questions"
          :question="question"
          v-on:sendAnswerToPart="getAnswer"
        ></Question>
        <nav aria-label="...">
          <ul class="pagination" style="padding-top: 1rem;">
            <li class="page-item">
              <button class="btn btn-primary" @click="submitExam">NỘP BÀI</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

import Question from "@/components/questions/QuestionPart7Component.vue";
export default {
  name: "Part7",
  props: ["questions"],
  data() {
    return {
      result:
        localStorage.getItem("result_reading") != null
          ? JSON.parse(localStorage.getItem("result_reading"))
          : []
    };
  },
  components: {
    Question
  },
  methods: {
    getAnswer(result) {
      var resultData = this.result;
      this.result = resultData.filter(e => {
        return e.question_id != result.question_id;
      });
      this.result.push(result);
      localStorage.setItem("result_reading", JSON.stringify(this.result));
    },
    sendAnswersQuestionToExam() {
      this.$emit("resultReceivedFromPart", this.result);
    },
    submitExam() {
      let data = {
        listening_questions: JSON.parse(localStorage.getItem("result_listening")),
        reading_questions: JSON.parse(localStorage.getItem("result_reading")),
        examination_id: this.$route.params.code
      };
      console.log(data);
      request({
        url: "/submit-examination",
        method: "post",
        data
      })
        .then(res => {
          console.log(res.data.result_data);
          let resultId = res.data.result_data.examination_log_id
          this.$router.push('/examination/result/'+ resultId)
        })
        .catch(err => {
          console.log(err);
        });
      console.log(data);
    }
  },
  watch: {
    result: {
      deep: true,
      handler() {
        this.sendAnswersQuestionToExam();
      }
    }
  }
};
</script>