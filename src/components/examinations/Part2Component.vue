<template>
  <div class="col-md-9 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h3>Part 2</h3>
        <p>
          <strong>Directions:</strong> You will hear a question or statement and three responses spoken in English. They will be spoken only one time and will not be printed in your test book. Select the best response to the question or statement and mark the letter (A), (B), or (C) on your answer sheet.
        </p>
        <div v-for="question in questions" v-if="question.part == 2&&question.no==0">
          <p>
            <strong>Example</strong>
          </p>
          <p>
            You will hear:
            <strong>{{question.content}}</strong>
          </p>
          <p>You will also hear:</p>
          <ul>
            <li>(A) {{question.answer_A}}</li>
            <li>(B) {{question.answer_B}}</li>
            <li>(C) {{question.answer_C}}</li>
          </ul>
          <p>The best response to the question {{question.content}} is choice ({{question.correct_answer}}), "I am looking for something," so ({{question.correct_answer}}) is the correct answer. You should mark answer ({{question.correct_answer}}) on you answer sheet.</p>
          <hr />
        </div>
        <p></p>
        <Question
          v-for="question in questions"
          :question="question"
          v-on:sendAnswerToPart="getAnswer"
          v-if="question.part == 2&&question.no!=0"
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
import Question from "@/components/questions/QuestionPart1Component.vue";
export default {
  name: "Part2Component",
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
      this.result.push(result);
      localStorage.setItem("result_listening", JSON.stringify(this.result));
    },
    sendAnswersQuestionToExam() {
      this.$emit("resultReceivedFromPart", this.result);
    },
    nextStep() {
      this.$emit("nextStep", 3);
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