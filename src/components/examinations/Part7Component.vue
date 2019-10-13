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
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "@/components/questions/QuestionPart7Component.vue";
export default {
  name: "Part7",
  props: ["questions"],
  data() {
    return {
      result: JSON.parse(localStorage.getItem('result_part7'))
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
      localStorage.setItem('result_part7', JSON.stringify(this.result))
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