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
        <p>
          <strong>Example:</strong>
        </p>
        <p>
          <img
            src="https://enza.com.vn/toeic/image/sample/c-they-re-standing-near-the-table.jpg"
            alt="Image File"
            title="ENZA.VN"
          />
        </p>
        <p>Statement (C), "They're standing near the table," is the best description of the picture, so you should select answer (C) and mark it on your answer sheet.</p>
        <hr />
        <Question
          v-for="question in questions"
          :question="question"
          v-on:sendAnswerToPart="getAnswer"
        ></Question>
        <hr />
        <nav aria-label="...">
          <ul class="pagination" style="padding-top: 1rem;">
            <li class="page-item">
              <a href="#" class="page-link">Next</a>
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
      result: localStorage.getItem('result_part1') != null ? JSON.parse(localStorage.getItem('result_part1')) : []
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
      localStorage.setItem('result_part1', JSON.stringify(this.result))
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