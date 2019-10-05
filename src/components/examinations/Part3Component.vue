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
import Question from '@/components/questions/QuestionPart3Component.vue'
export default {
    name: "Part3",
    components: {
        Question
    }
}
</script>