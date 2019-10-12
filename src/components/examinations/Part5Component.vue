<template>
  <div class="col-md-9 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h3>Part 5</h3>
        <p>
          <strong>Directions:</strong> A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence.
        </p>
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
import Question from '@/components/questions/QuestionPart5Component.vue'
export default {
  name : "Part5",
  props: ['questions'],
  components: {
    Question
  }
}
</script>