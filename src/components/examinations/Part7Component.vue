<template>
  <div class="col-md-8 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h3>Part 7</h3>
        <p>
          <strong>Directions:</strong> In this part, you will read a selection of texts, such as magazine and newspaper articles, letters, and advertisements. Each text is followed by several questions. Select the best answer for each question.
        </p>
        <hr />
        <Question></Question>
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
import Question from '@/components/questions/QuestionPart7Component.vue'
export default {
  name : "Part7",
  components: {
    Question
  }
}
</script>