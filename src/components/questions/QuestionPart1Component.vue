<template>
  <div>
    <h5>{{question.no}}. {{ question.content }}</h5>
    <p v-if="question.image">
      <img v-bind:src="question.image" alt="img01" title="ENZA.VN" />
    </p>
    <div class="answer">
      <div class="r0">
        <input
          type="radio"
          v-bind:name="question.id"
          v-model="result.choose"
          value="A"
          id="q15250:2_sub1_answer0"
        />
        <label v-bind:for="question.id">(A)</label>
      </div>
      <div class="r1">
        <input
          type="radio"
          v-bind:name="question.id"
          v-model="result.choose"
          value="B"
          id="q15250:2_sub1_answer1"
        />
        <label v-bind:for="question.id">(B)</label>
      </div>
      <div class="r0">
        <input
          type="radio"
          v-bind:name="question.id"
          v-model="result.choose"
          value="C"
          id="q15250:2_sub1_answer2"
        />
        <label v-bind:for="question.id">(C)</label>
      </div>
      <div class="r1">
        <input
          type="radio"
          v-bind:name="question.id"
          v-model="result.choose"
          value="D"
          id="q15250:2_sub1_answer3"
        />
        <label v-bind:for="question.id">(D)</label>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "QuestionPart1",
  props: ["question"],
  data() {
    return {
      result: { question_id: this.question.id, choose: "" }
    };
  },
  methods: {
    sendAnswerToPart() {
      this.$emit("sendAnswerToPart", this.result);
      console.log("sendAnswerToPart");
    }
  },
  watch: {
    result: {
      deep: true,
      handler() {
        this.sendAnswerToPart();
      }
    }
  }
};
</script>