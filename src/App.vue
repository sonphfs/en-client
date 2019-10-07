<template>
  <div id="app">
    <div class="container-scroller" v-if="!isHomePage()">
      <Header></Header>
      <Content></Content>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import "@/assets/style/demo/style.css";
import "@/assets/style/shared/style.css";
import "@/assets/style/vendors/iconfonts/mdi/css/materialdesignicons.min.css";
import "@/assets/style/vendors/iconfonts/ionicons/css/ionicons.css";
import "@/assets/style/vendors/iconfonts/typicons/src/font/typicons.css";
import "@/assets/style/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css";
import "@/assets/style/vendors/css/vendor.bundle.base.css";
import "@/assets/style/vendors/css/vendor.bundle.addons.css";

import Header from "@/components/layouts/Header.vue";
import Content from "@/components/layouts/Content.vue";
export default {
  name: "app",
  components: {
    Header,
    Content
  },
  methods: {
    isHomePage: function() {
      return this.$router.currentRoute.fullPath == "/";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
