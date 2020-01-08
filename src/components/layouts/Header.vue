<template>
  <div>
    <!-- partial:partials/_navbar.html -->
    <nav
      class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
      style="width: 70%; margin: auto;"
    >
      <Logo></Logo>
      <div class="navbar-menu-wrapper d-flex align-items-center">
        <ul class="navbar-nav">
          <div class="dropdown" @mouseover="word_active = true" @mouseleave="word_active = false">
            <button class="btn btn-secondary  button-menu-top" type="button"><a href="/list-subject">Từ vựng</a></button>
          </div>
          <div class="dropdown" @mouseover="grammar_active = true" @mouseleave="grammar_active = false">
            <button class="btn btn-secondary  button-menu-top" type="button"><a href="/list-subject">Ngữ pháp</a></button>
          </div>
          <div class="dropdown" @mouseover="test_active = true" @mouseleave="test_active = false">
            <button class="btn btn-secondary  button-menu-top" type="button"><a href="/list-exam">Làm bài thi</a></button>
          </div>
          <div class="dropdown">
            <button class="btn btn-secondary  button-menu-top" type="button"><a href="/contact">Liên hệ</a></button>
          </div>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="user.email">
          <li class="nav-item dropdown d-none d-xl-inline-block user-dropdown" @mouseover="dave=true" @mouseleave="dave=false">
            <a
              class="nav-link dropdown-toggle"
              id="UserDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                  class="img-md rounded-circle"
                  v-if="user.avatar" :src="serverUri + user.avatar"
                />
                <img
                  class="img-md rounded-circle"
                  v-if="!user.avatar" :src="serverUri + 'enc/uploads/users/avatars/default-userAvatar.png'"
                />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown show user-dropdown-infos" style="margin-top: 2px;"
              v-show="dave"
              aria-labelledby="UserDropdown"
            >
              <div class="dropdown-header text-center">
                <img
                  class="img-md rounded-circle"
                  v-if="user.avatar" :src="serverUri + user.avatar"
                />
                <img
                  class="img-md rounded-circle"
                  v-if="!user.avatar" :src="serverUri + 'enc/uploads/users/avatars/default-userAvatar.png'"
                />
                <p class="mb-1 mt-3 font-weight-semibold">{{user.username}}</p>
                <p class="font-weight-light text-muted mb-0">{{user.email}}</p>
              </div>
              <a class="dropdown-item" href="/my-profile">
                Thông tin cá nhân
                <span class="badge badge-pill badge-danger"></span>
                <i class="dropdown-item-icon ti-dashboard"></i>
              </a>
              <a class="dropdown-item" href="/toeic-histories">
                Lịch sử bài thi
                <span class="badge badge-pill badge-danger"></span>
                <i class="dropdown-item-icon ti-dashboard"></i>
              </a>
              <a class="dropdown-item" @click="logout">
                Đăng xuất
                <i class="dropdown-item-icon ti-power-off"></i>
              </a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto nav-auth" v-if="!user.email">
          <a class="main-header-button-auth btn-login" href="/login">Đăng nhập</a>
          <a class="main-header-button-auth btn-register" href="/register">Đăng ký</a>
        </ul>
        <button
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import request from "@/utils/request";
import { removeToken } from "@/utils/auth";
import Logo from "@/components/layouts/Logo.vue";

export default {
  name: "Header",
  props: ["user"],
  components: {
    Logo
  },
  data() {
    return {
      dave: false,
      word_active: false,
      grammar_active: false,
      test_active: false,
      serverUri: process.env.VUE_APP_BASE_SERVER_URL
    };
  },
  methods: {
    logout() {
      request({
        url: "/logout",
        method: "post"
      }).then(res => {
        removeToken();
        this.$emit("logout", []);
        this.$router.push('/dashboard')
      });
    },
    mouseOver() {
      this.active = !this.active;
    }
  }
};
</script>

<style scoped>
.form-control {
  display: inline-block;
  border: 1px solid #dee2e6;
  font-family: "roboto", sans-serif;
  font-size: 0.75rem;
  color: #212529;
  padding: 0 0.75rem;
  line-height: 14px;
  font-weight: 300;
}
input.input-search {
  height: 32px;
}

a.main-header-button-auth {
  font-family: opensanssemibold;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  outline: 0px;
  width: 110px;
  height: 30px;
  line-height: 30px;
  background: #39c9f6;
  display: inline-block;
  text-align: center;
  border-radius: 15px;
}
a.main-header-button-auth:hover {
  background: #23a6d9;
}

a.btn-login {
  margin-right: 5%;
}

button.button-menu-top {
  background-color: #fff;
  border: none;
}
.navbar-nav .dropdown-menu {
  position: absolute;
  margin: 0px;
  bottom: none;
}

</style>