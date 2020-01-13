<template>
  <div>
    <TitleHeader></TitleHeader>
    <RatioHeader></RatioHeader>
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
import TitleHeader from "@/components/layouts/TitleHeader.vue";
import RatioHeader from "@/components/layouts/RatioHeader.vue";
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
    SidebarComponent,
    TitleHeader,
    RatioHeader
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
    },
    initResult() {
      let listeningQuestions = [];
      let readingQuestions = [];
      this.partData.forEach(e => {
        if (
          e.no != 0 &&
          (e.part == 1 || e.part == 2 || e.part == 3 || e.part == 4)
        ) {
          listeningQuestions.push({ question_id: e.id, choose: "" });
        }
        if (e.no != 0 && e.part == 5) {
          readingQuestions.push({ question_id: e.id, choose: "" });
        }
        if (e.no != 0 && (e.part == 6 || e.part == 7) && e.parent_id != 0) {
          readingQuestions.push({ question_id: e.id, choose: "" });
        }
      });
      localStorage.setItem(
        "result_listening",
        JSON.stringify(listeningQuestions)
      );
      localStorage.setItem("result_reading", JSON.stringify(readingQuestions));
    }
  },
  created() {
    let bindThis = this;
    request({
      url: "/get-exam/" + this.$route.params.code,
      method: "get"
    })
      .then(res => {
        console.log(res.data.result_data);
        this.examination = res.data.result_data;
        bindThis.$route.meta.examType = this.examination.type;
        this.partData = this.examination.questions;
        this.initResult();
      })
      .catch(err => {
        console.log(err.res);
      });
  }
};
</script>