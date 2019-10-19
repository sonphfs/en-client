<template>
  <div>
    <h5>{{question.no}}. {{ question.content }}</h5>
    <div class="answer">
      <div class="r0">
        <input
          type="radio"
          v-bind:name="question.id"
          v-model="result.choose"
          value="A"
          v-bind:id="question.id+'A'"
        />
        <label v-bind:for="question.id+'A'">(A)</label>
      </div>
      <div class="r1">
        <input
          type="radio"
          v-bind:name="question.id"
          v-model="result.choose"
          value="B"
          v-bind:id="question.id+'B'"
        />
        <label v-bind:for="question.id+'B'">(B)</label>
      </div>
      <div class="r0">
        <input
          type="radio"
          v-bind:name="question.id"
          v-model="result.choose"
          value="C"
          v-bind:id="question.id+'C'"
        />
        <label v-bind:for="question.id+'C'">(C)</label>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "QuestionPart2",
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