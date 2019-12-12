<template>
  <div>
    <div class="col-md-12">
      <div class="card">
        <circular-count-down-timer :initial-value="15" :steps="15" :size="60" :second-label="''"></circular-count-down-timer>
        <div class="card-body title-question">
          <p class="question-content">{{ question.content }}</p>
          <p class="pronun">/färmər/</p>
        </div>
      </div>
    </div>
    <div class="col-md-12 answer-body">
      <div class="card">
        <div class="card-body" style="text-align: center">
          <div class="answer">
            <div class="answer-item" @click="choose('A', $event)">{{question.answer_A}}</div>
            <div class="answer-item" @click="choose('B', $event)">{{question.answer_B}}</div>
            <div class="answer-item" @click="choose('C', $event)">{{question.answer_C}}</div>
            <div class="answer-item" @click="choose('D', $event)">{{question.answer_D}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["item"],
  data() {
    return {
      question: {
        content: "What is Your name?",
        answer_A: "My name is Hele",
        answer_B: "Fuking",
        answer_C: "Yolo",
        answer_D: "Dixa",
        correct_answer: "A"
      },
      isChoose: false,
      isCorrect: false,
      selected: false
    };
  },
  created() {
    if (this.item != undefined) {
      this.question = this.item;
    }
  },
  methods: {
    choose(answer) {
      if (this.selected != true) {
        this.selected = true;
        if (answer != this.question.correct_answer) {
          console.log(
            event.target.setAttribute("class", "answer-item btn-danger")
          );
        } else {
          console.log(
            event.target.setAttribute("class", "answer-item btn-success")
          );
        }
        let that = this;
        setTimeout(function() {
          that.nextQuestion();
        }, 1000);
      }
    },
    nextQuestion() {
      this.$emit("nextQuestion");
    }
  }
};
</script>
<style scoped>
p.pronun {
  color: aqua;
}
div.title-question {
  text-align: center;
}
div.answer-body .card .card-body {
  text-align: center;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}
div.button-next {
  margin-top: 10px;
  padding-left: 5%;
  padding-right: 5%;
  text-align: right;
}
div.answer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
div.answer-body {
  margin-top: 10px;
}
div.answer-item {
  padding: 10px;
  border: solid 1px #dde4eb;
  border-radius: 25px;
}
div.answer-item:hover {
  background-color: #dde4eb;
}
</style>
<style>
 #container .item div { text-align: center }
</style>