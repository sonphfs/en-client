<template>
  <div class="col-md-9 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h3>Part 3</h3>
        <p>
          <strong>Directions:</strong> You will hear some conversations between two people. You will be asked to answer three questions about what the speakers say in each conversation. Select the best response to each question. The conversations will be spoken only one time.
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
import Question from "@/components/questions/QuestionPart3Component.vue";
export default {
  name: "Part3",
  props: ["questions"],
  data() {
    return {
      result: JSON.parse(localStorage.getItem('result_part3'))
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
      localStorage.setItem('result_part3', JSON.stringify(this.result))
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