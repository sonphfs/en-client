<template>
  <div class="col-md-9 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h3>Part 4</h3>
        <p>
          <strong>Directions:</strong> You will hear some short talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each short talk. Select the best response to each question. The talks will be spoken only one time.
        </p>
        <hr />
        <p></p>
        <Question
          v-for="question in questions"
          :question="question"
          v-on:sendAnswerToPart="getAnswer"
        ></Question>
        <hr />
        <nav aria-label="...">
          <ul class="pagination" style="padding-top: 1rem;">
            <li class="page-item">
              <a class="page-link" @click="nextStep" style="color: #007BFF">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "@/components/questions/QuestionPart4Component.vue";
export default {
  name: "Part4",
  props: ["questions"],
  data() {
    return {
      result: []
    };
  },
  components: {
    Question
  },
  methods: {
    getAnswer(result) {
      this.result = localStorage.getItem('result_listening') != null ? JSON.parse(localStorage.getItem('result_listening')) : [];
      var resultData = this.result;
      this.result = resultData.filter(e => {
        return e.question_id != result.question_id;
      });
      console.log(resultData)
      this.result.push(result);
      console.log(resultData)
      localStorage.setItem('result_listening', JSON.stringify(this.result))
    },
    sendAnswersQuestionToExam() {
      this.$emit("resultReceivedFromPart", this.result);
    },
    nextStep() {
      this.$emit('nextStep', 5)
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