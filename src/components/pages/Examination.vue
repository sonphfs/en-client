<template>
  <div class="row">
    <!-- <Part1Component :questions="this.questions"></Part1Component> -->
    <router-view :key="key" :questions="filterQuestionsByPart(this.$route.params.id)"/>
    <SidebarComponent></SidebarComponent>
  </div>
</template>

<script>

import request from '@/utils/request';
import Part1Component from "@/components/examinations/Part1Component";
import SidebarComponent from "@/components/examinations/SidebarComponent";
export default {
  name: "Examination",
  components: {
    Part1Component,
    SidebarComponent
  },
  data() {
    return {
      examination: [],
      questions: []
      
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  methods: {
    filterQuestionsByPart(part){
       let d = this.questions.filter(element => {
         console.log(part)
          return element.part = part
       });
       return this.questions;
    }
  },
  created() {
    request({
          url: '/get-exam',
          method: 'get',
        })
        .then(res => {
          console.log(res.data);
          this.examination = res.data;
          this.questions = this.examination.questions
        })
        .catch(err => {
          console.log(err.res);
        })
  }
};
</script>