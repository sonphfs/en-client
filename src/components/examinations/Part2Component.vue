<template>
  <div class="col-md-9 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h3>Part 2</h3>
        <p>
          <strong>Directions:</strong> You will hear a question or statement and three responses spoken in English. They will be spoken only one time and will not be printed in your test book. Select the best response to the question or statement and mark the letter (A), (B), or (C) on your answer sheet.
        </p>
        <p>
          <strong>Example</strong>
        </p>
        <p>
          You will hear:
          <strong>What are you doing?</strong>
        </p>
        <p>You will also hear:</p>
        <ul>
          <li>(A) I am doing fine.</li>
          <li>(B) I am looking for something.</li>
          <li>(C) I can't do it.</li>
        </ul>
        <p>The best response to the question "What are you doing?" is choice (B), "I am looking for something," so (B) is the correct answer. You should mark answer (B) on you answer sheet.</p>
        <hr />
        <p></p>
        <Question v-for="question in questions" :data="question"></Question>
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
import Question from "@/components/questions/QuestionPart2Component.vue"
export default {
  name: "Part2Component",
  props: ['questions'],
  components: {
    Question
  }
}
</script>