<template>
  <div class="col-md-9 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h2>Listening Test</h2>
        <p>In the Listening test, you will be asked to demonstrate how well you understand spoken English. The entire Listening test will last approximately 45 minutes. There are four parts, and directions are given for each part. You must mark your answers on the separate answer sheet. Do not write your answers in your test book.</p>
        <h3>Part 1</h3>
        <p>
          <strong>Directions:</strong> For each question in this part, you will hear four statements about a picture in your test book. When you hear the statements, you must select the one statement that best describes what you see in the picture. Then find the number of the question on your answer sheet and mark your answer. The statements will not be printed in your test book and will be spoken only one time. Look at the example item below.
        </p>
        <div v-for="question in questions" v-if="question.part == 1 && question.no == 0">
          <p>
            <strong>Example:</strong>
          </p>
          <p>
            <img
              :src="serverUrl + question.image"
              alt="Example Image"
              width="300px"
              height="300px"
            />
          </p>
          <p>Statement ({{question.correct_answer}}), "They're standing near the table," is the best description of the picture, so you should select answer ({{question.correct_answer}}) and mark it on your answer sheet.</p>
          <hr />
        </div>
        <Question
          v-for="question in questions"
          :question="question"
          v-on:sendAnswerToPart="getAnswer"
          v-if="question.part == 1 && question.no != 0"
        ></Question>
        <hr />
        <nav aria-label="...">
          <ul class="pagination" style="padding-top: 1rem;">
            <li class="page-item">
              <a @click="nextStep" class="page-link" style="color: #007BFF">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "@/components/questions/QuestionPart1Component";
export default {
  name: "Part1Component",
  props: ["questions"],
  data() {
    return {
      result:
        localStorage.getItem("result_listening") != null
          ? JSON.parse(localStorage.getItem("result_listening"))
          : [],
          serverUrl: process.env.VUE_APP_BASE_SERVER_URL
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
      console.log(resultData)
      localStorage.setItem("result_listening", JSON.stringify(this.result));
    },
    sendAnswersQuestionToExam() {
      this.$emit("resultReceivedFromPart", this.result);
    },
    nextStep() {
      this.$emit("nextStep", 2);
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