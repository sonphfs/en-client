<template>
  <div class="row">
    <router-view></router-view>
    <SidebarComponent></SidebarComponent>
  </div>
</template>

<script>
import Part1Component from "@/components/examinations/Part1Component";
import SidebarComponent from "@/components/examinations/SidebarComponent";
import Question from "@/components/questions/QuestionPart1Component";
export default {
  name: "Examination",
  components: {
    Question,
    Part1Component,
    SidebarComponent
  }
};
</script>