<template>
  <div id="app">
    <component :is="layout"></component>
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

export default {
  name: "app",
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
</style>
