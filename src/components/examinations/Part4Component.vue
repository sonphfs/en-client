<template>
  <div class="col-md-8 grid-margin stretch-card">
    <div class="card">
      <div class="card-body" style="padding-left: 80px;">
        <h3>Part 4</h3>
        <p>
          <strong>Directions:</strong> You will hear some short talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each short talk. Select the best response to each question. The talks will be spoken only one time.
        </p>
        <hr />
        <p></p>
        <Question></Question>
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
import Question from '@/components/questions/QuestionPart4Component.vue'
export default {
  name : "Part4",
  components: {
    Question
  }
}
</script>