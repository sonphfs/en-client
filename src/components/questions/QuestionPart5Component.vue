<template>
  <div>
    <h5>{{data.no}}. {{data.content}}</h5>
    <div class="answer">
      <div class="r0">
        <input type="radio" name="q15252:2_sub1_answer" value="0" id="q15252:2_sub1_answer0" />
        <label for="q15252:2_sub1_answer0">(A) {{q.A}}</label>
      </div>
      <div class="r1">
        <input type="radio" name="q15252:2_sub1_answer" value="1" id="q15252:2_sub1_answer1" />
        <label for="q15252:2_sub1_answer1">(B) {{q.B}}</label>
      </div>
      <div class="r0">
        <input type="radio" name="q15252:2_sub1_answer" value="2" id="q15252:2_sub1_answer2" />
        <label for="q15252:2_sub1_answer2">(C) {{q.C}}</label>
      </div>
      <div class="r1">
        <input type="radio" name="q15252:2_sub1_answer" value="3" id="q15252:2_sub1_answer3" />
        <label for="q15252:2_sub1_answer3">(D) {{q.D}}</label>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "QuestionPart5",
  props: ['data'],
  data() {
    return {
      q: this.getAnswerData(this.data.data)
    };
  },
  methods: {
    getAnswerData() {
      return JSON.parse(this.data.data);
    }
  }
};
</script>