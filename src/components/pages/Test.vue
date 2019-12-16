<template>
  <div>
    <Question v-for="(question, key) in exam.questions" :item="question" v-show="key++==step" @nextQuestion="nextStep"></Question>
    <div class="col-md-12 progress-test">
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "@/components/elements/Question";
import request from "@/utils/request";
export default {
  name: "Test",
  components: {
    Question
  },
  data(){
    return {
        exam: {},
        step: 1
    }
  },
  created(){
      this.getExam()
  },
  methods: {
    getExam(){
        request({
          url: "/test/1"
        }).then(res=> {
            this.exam = res.data.result_data
        }).catch(err=>{

        })
    },
    nextStep(){
      this.step++
    }
  },
};
</script>