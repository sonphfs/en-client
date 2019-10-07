<template>
  <div>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <MenuSide></MenuSide>
      <div class="main-panel">
        <div class="content-wrapper">
        
          <div class="row">
            
          </div>
        </div>
        <!-- content-wrapper ends -->
        <Footer></Footer>
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
import Part2Component from "@/components/examinations/Part2Component.vue"
import SidebarComponent from "@/components/examinations/SidebarComponent.vue"
import MenuSide from '@/components/layouts/MenuSide.vue'
import TitleHeader from '@/components/layouts/TitleHeader.vue'
import RatioHeader from '@/components/layouts/RatioHeader.vue'
import Footer from '@/components/layouts/Footer.vue'

export default {
  name: "BlankPage",
  components: {
    Part2Component,
    SidebarComponent,
    MenuSide,
    RatioHeader,
    TitleHeader,
    Footer
  }
};
</script>

<style>
  .container-fluid.page-body-wrapper {
    padding-top: 63px;
    padding-right: 0px;
    padding-left: 0px;
  }
</style>