<template>
  <div class="container-scroller">
    <Header :user="user" @logout="removeUser"></Header>
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
        <Footer></Footer>
      </div>
    </div>
    <notifications group="learningWord" position="bottom right"/>
  </div>
</template>

<script>
import request from "@/utils/request";
import { getToken, removeToken } from "@/utils/auth";
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: { email: "", username: "" }
    };
  },
  created() {
    this.$route.meta.isAuthenticated = false;
    if (getToken()) {
      request({
        url: "/user/infos",
        method: "get"
      })
        .then(res => {
          this.user = res.data.result_data;
          this.$route.meta.isAuthenticated = true;
        })
        .catch(err => {
          removeToken()
          // eslint-disable-next-line
          console.log(err.res)
        });
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