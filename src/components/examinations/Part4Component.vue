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
              <a class="page-link" href="#">Next</a>
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
      result: localStorage.getItem('result_part4') != null ? JSON.parse(localStorage.getItem('result_part4')) : []
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
      localStorage.setItem('result_part4', JSON.stringify(this.result))
    },
    sendAnswersQuestionToExam() {
      this.$emit("resultReceivedFromPart", this.result);
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