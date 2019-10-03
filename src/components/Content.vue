<template>
    <div>
        <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel" style="width: 100%;">
          <div class="content-wrapper">
            <!-- Page Title Header Starts-->
            <div class="row page-title-header">
              <div class="col-12">
                <div class="page-header">
                  <h4 class="page-title">Dashboard</h4>
                  <div class="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                    <ul class="quick-links">
                      <li><a href="#">ICE Market data</a></li>
                      <li><a href="#">Own analysis</a></li>
                      <li><a href="#">Historic market data</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="page-header-toolbar">
                  // TODO
                </div>
              </div>
            </div>
            <!-- Page Title Header Ends-->
            <div class="row">
              <div class="col-md-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                    // TODO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <Part2Component></Part2Component>
              <SidebarComponent></SidebarComponent>
            </div>
            <div class="row">
            </div>
          </div>
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            <div class="container-fluid clearfix">
              <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2019</span>
              <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">// TODO<i class="mdi mdi-heart text-danger"></i>
              </span>
            </div>
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
</template>

<script>
import Part2Component from './examinations/Part2Component.vue'
import SidebarComponent from './examinations/SidebarComponent.vue'
export default {
    name : "Content",
    components: {
      Part2Component, SidebarComponent
    }
}
</script>