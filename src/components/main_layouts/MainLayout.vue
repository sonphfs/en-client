<template>
  <div class="container-scroller">
    <Header :user="user" @logout="removeUser"></Header>
    <div class="container-fluid page-body-wrapper">
      <!-- <MenuSide></MenuSide> -->
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import { getToken } from "@/utils/auth";
import Header from "@/components/layouts/Header.vue";
import MenuSide from "@/components/layouts/MenuSide.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    MenuSide,
    Footer
  },
  data() {
    return {
      user: { email: "", username: "" }
    };
  },
  created() {
    if (getToken()) {
      request({
        url: "/auth",
        method: "get"
      })
        .then(res => {
          this.user = res.data.result_data;
        })
        .catch(err => {});
    }
  },
  methods: {
    removeUser() {
      this.user = { email: "", username: "" };
    }
  }
};
</script>

<style scoped>
div.container-scroller {
  background-color: #f3f3f3;
}

div.main-panel {
  width: 100%;
}
div.content-wrapper {
  padding-left: 0rem;
  padding-right: 0rem;
}
.container-fluid.page-body-wrapper {
  width: 70%;
  padding-top: 63px;
  padding-right: 0px;
  padding-left: 0px;
}
</style>