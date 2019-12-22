<template>
  <div>
    <h5>{{question.no}}. {{ question.content }}</h5>
    <p v-if="question.image">
      <img src="https://tienganhmoingay.com/static/ToeicTests/images/Ets_Toeic_2019_Test_1/Ets_Toeic_2019_Test_1_2.png" width="300px" height="300px"/>
    </p>
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
      <div class="r1">
        <input
          type="radio"
          v-bind:name="question.id"
          v-model="result.choose"
          value="D"
          v-bind:id="question.id+'D'"
        />
        <label v-bind:for="question.id+'D'">(D)</label>
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
      result: { question_id: this.question.id, choose: "" },
      serverUrl: process.env.VUE_APP_BASE_SERVER_URL
    };
  },
  methods: {
    sendAnswerToPart() {
      this.$emit("sendAnswerToPart", this.result);
      // eslint-disable-next-line
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