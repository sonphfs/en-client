<template>
  <div id="app">
    <div class="container-scroller">
        <LandingPage></LandingPage>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import '@/assets/style/demo/style.css'
import '@/assets/style/shared/style.css'
import '@/assets/style/vendors/iconfonts/mdi/css/materialdesignicons.min.css'
import '@/assets/style/vendors/iconfonts/ionicons/css/ionicons.css'
import '@/assets/style/vendors/iconfonts/typicons/src/font/typicons.css'
import '@/assets/style/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css'
import '@/assets/style/vendors/css/vendor.bundle.base.css'
import '@/assets/style/vendors/css/vendor.bundle.addons.css'

import LandingPage from './components/landing_pages/Index.vue'
export default {
  name: 'app',
  components: {
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
