<template>
  <div class="row">
    <component
      :is="loadPart"
      :questions="this.partData"
      @resultReceivedFromPart="receiveQuestionLogs"
    ></component>
    <SidebarComponent></SidebarComponent>
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
    Part: () => loadPart(),
    SidebarComponent
  },
  data() {
    return {
      examination: [],
      part: this.$route.params.num,
      partData: [],
      result: localStorage.getItem('result') != null ? JSON.parse(localStorage.getItem('result')) : []
    };
  },
  computed: {
    key() {
      return this.$route.fullPath;
    }
  },
  methods: {
    loadPart() {
      return System.import(
        "@/components/examinations/Part" + this.part + "Component"
      );
    },
    receiveQuestionLogs(result) {
      this.result = result;
    }
  },
  created() {
    request({
      url: "/get-exam",
      method: "get"
    })
      .then(res => {
        console.log(res.data);
        this.examination = res.data;
        this.partData = this.examination.questions.filter(element => {
          return element.part == this.$route.params.num;
        });
      })
      .catch(err => {
        console.log(err.res);
      });
  }
};
</script>