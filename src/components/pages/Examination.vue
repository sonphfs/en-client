<template>
  <div class="row">
    <Part1 :questions="filterQuestionByStep(1)" v-show="step == 1" @nextStep="receiveStep"></Part1>
    <Part2 :questions="filterQuestionByStep(2)" v-show="step == 2" @nextStep="receiveStep"></Part2>
    <Part3 :questions="filterQuestionByStep(3)" v-show="step == 3" @nextStep="receiveStep"></Part3>
    <Part4 :questions="filterQuestionByStep(4)" v-show="step == 4" @nextStep="receiveStep"></Part4>
    <Part5 :questions="filterQuestionByStep(5)" v-show="step == 5" @nextStep="receiveStep"></Part5>
    <Part6 :questions="filterQuestionByStep(6)" v-show="step == 6" @nextStep="receiveStep"></Part6>
    <Part7 :questions="filterQuestionByStep(7)" v-show="step == 7" @nextStep="receiveStep"></Part7>
    <SidebarComponent :step="this.step" @updateStep="receiveStep" @nextStep="receiveStep"></SidebarComponent>
  </div>
</template>

<script>
import request from "@/utils/request";
import Part1 from "@/components/examinations/Part1Component";
import Part2 from "@/components/examinations/Part2Component";
import Part3 from "@/components/examinations/Part3Component";
import Part4 from "@/components/examinations/Part4Component";
import Part5 from "@/components/examinations/Part5Component";
import Part6 from "@/components/examinations/Part6Component";
import Part7 from "@/components/examinations/Part7Component";
import SidebarComponent from "@/components/examinations/SidebarComponent";
export default {
  name: "Examination",
  components: {
    Part1,
    Part2,
    Part3,
    Part4,
    Part5,
    Part6,
    Part7,
    SidebarComponent
  },
  data() {
    return {
      examination: [],
      step: 1,
      partData: []
    };
  },
  computed: {
    key() {
      return this.$route.fullPath;
    }
  },
  methods: {
    filterQuestionByStep(step) {
      let questions = this.partData;
      questions = questions.filter(e => {
        return e.part == step;
      });
      return questions;
    },
    receiveQuestionLogs(result) {},
    receiveStep(result) {
      this.step = result;
    }
  },
  created() {
    request({
      url: "/get-exam/" + this.$route.params.code,
      method: "get"
    })
      .then(res => {
        console.log(res.data);
        this.examination = res.data;
        this.partData = this.examination.questions;
      })
      .catch(err => {
        console.log(err.res);
      });
  }
};
</script>