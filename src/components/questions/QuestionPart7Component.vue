<template>
  <div>
    <div class="paragraph" v-if="question.paragraph">
      <pre><strong>Questions 153-154 refer to the following e-mail.</strong></pre>
      <p>
        To: All families in our community
        <br />From: The San Jose Museum of Art
      </p>
      <p>It's my pleasure to notify you that we are having our December Kids Art Sunday on December 11, 2007. With the objective of making the artwork on view accessible to young audiences, the Museum's Education Department will present a stimulating range of hands-on art workshops. A speech by the curator Benito Juarez, gallery tours and other activities related to the current exhibitions will be also available to the visitors. There is no admission charge, and no reservations are required. However, you need to be at the Museum no later than 3 P.M. if you do not want to miss a single event.</p>
      <p>If you are interested in a setting with more one-on-one attention, join us for the members only portion of Kids Art Sunday, Side by Side. It takes place in the SJ annex and includes a gallery discussion and structured hands-on art activities. Pre-registration is required for Side by Side and only one child is allowed per adult. To register or become a member, please call (408) 555-6867.</p>
      <hr />
      <p></p>
    </div>

    <div class="content" v-if="!question.paragraph">
      <h5>{{question.no}}. {{question.content}}</h5>

      <div class="answer">
        <div class="r0">
          <input
            type="radio"
            v-bind:name="question.id"
            v-model="result.choose"
            value="A"
            v-bind:id="question.id+'A'"
          />
          <label v-bind:for="question.id+'A'">{{ question.answer_A}}</label>
        </div>
        <div class="r1">
          <input
            type="radio"
            v-bind:name="question.id"
            v-model="result.choose"
            value="B"
            v-bind:id="question.id+'B'"
          />
          <label v-bind:for="question.id+'B'">{{ question.answer_A}}</label>
        </div>
        <div class="r0">
          <input
            type="radio"
            v-bind:name="question.id"
            v-model="result.choose"
            value="C"
            v-bind:id="question.id+'C'"
          />
          <label v-bind:for="question.id+'C'">{{ question.answer_A}}</label>
        </div>
        <div class="r1">
          <input
            type="radio"
            v-bind:name="question.id"
            v-model="result.choose"
            value="D"
            v-bind:id="question.id+'D'"
          />
          <label v-bind:for="question.id+'D'">{{ question.answer_A}}</label>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionPart7",
  props: ["question"],
  data() {
    return {
      result: { question_id: this.question.id, choose: "" }
    };
  },
  methods: {
    sendAnswerToPart() {
      this.$emit("sendAnswerToPart", this.result);
      // eslint-disable-next-line
      console.log("sendAnswerToPart");
    },
    sendAnswersQuestionToExam() {
      this.$emit('resultReceivedFromPart',this.result);
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