<template>
    <div>
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <NavProfile></NavProfile>
          <!-- <li class="nav-item nav-category">Main Menu</li> -->
          <li class="nav-item">
            <a class="nav-link" href="/">
              <i class="menu-icon typcn typcn-document-text"></i>
              <span class="menu-title">Trang chủ</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="menu-icon typcn typcn-coffee"></i>
              <span class="menu-title">Ngữ pháp</span>

            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/forms/basic_elements.html">
              <i class="menu-icon typcn typcn-shopping-bag"></i>
              <span class="menu-title">Từ vựng</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/charts/chartjs.html">
              <i class="menu-icon typcn typcn-th-large-outline"></i>
              <span class="menu-title">Thi thử toeic</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
import NavProfile from '@/components/layouts/NavProfile.vue'
export default {
    name: "MenuSide",
    components: {
      NavProfile
    }
}
</script>

<style scoped>
  nav#sidebar {
    height: 100%;
  }
</style>