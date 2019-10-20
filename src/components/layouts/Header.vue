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
            <button class="btn btn-secondary dropdown-toggle button-menu-top" type="button">Từ vựng</button>
            <div class="dropdown-menu show" v-show="word_active">
              <a class="dropdown-item" href="#">Chủ đề</a>
              <a class="dropdown-item" href="#">Kiểm tra</a>
            </div>
          </div>
          <div class="dropdown" @mouseover="grammar_active = true" @mouseleave="grammar_active = false">
            <button class="btn btn-secondary dropdown-toggle button-menu-top" type="button">Ngữ pháp</button>
            <div class="dropdown-menu show" v-show="grammar_active">
              <a class="dropdown-item" href="#">Bài học</a>
              <a class="dropdown-item" href="#">Kiểm tra</a>
            </div>
          </div>
          <div class="dropdown" @mouseover="test_active = true" @mouseleave="test_active = false">
            <button class="btn btn-secondary dropdown-toggle button-menu-top" type="button">Thi thử</button>
            <div class="dropdown-menu show" v-show="test_active">
              <a class="dropdown-item" href="/list-exam">Thi thử toeic</a>
              <a class="dropdown-item" href="#">Thi rút gọn</a>
            </div>
          </div>
        </ul>
        <form class="ml-auto search-form d-none d-md-block" action="#">
          <div class="form-group">
            <input type="search" class="form-control input-search" placeholder="Search Here" />
          </div>
        </form>
        <ul class="navbar-nav ml-auto" v-if="user.email">
          <li class="nav-item dropdown">
            <a
              class="nav-link count-indicator"
              id="messageDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="mdi mdi-bell-outline"></i>
              <span class="count">7</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="messageDropdown"
            >
              <a class="dropdown-item py-3">
                <p class="mb-0 font-weight-medium float-left">You have 7 unread mails</p>
                <span class="badge badge-pill badge-primary float-right">View all</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img
                    src="@/assets/images/faces/face10.jpg"
                    alt="image"
                    class="img-sm profile-pic"
                  />
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">Marian Garner</p>
                  <p class="font-weight-light small-text">The meeting is cancelled</p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img
                    src="@/assets/images/faces/face12.jpg"
                    alt="image"
                    class="img-sm profile-pic"
                  />
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">David Grey</p>
                  <p class="font-weight-light small-text">The meeting is cancelled</p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img src="@/assets/images/faces/face1.jpg" alt="image" class="img-sm profile-pic" />
                </div>
                <div class="preview-item-content flex-grow py-2">
                  <p class="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins</p>
                  <p class="font-weight-light small-text">The meeting is cancelled</p>
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link count-indicator"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i class="mdi mdi-email-outline"></i>
              <span class="count bg-success">3</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
              aria-labelledby="notificationDropdown"
            >
              <a class="dropdown-item py-3 border-bottom">
                <p class="mb-0 font-weight-medium float-left">You have 4 new notifications</p>
                <span class="badge badge-pill badge-primary float-right">View all</span>
              </a>
              <a class="dropdown-item preview-item py-3">
                <div class="preview-thumbnail">
                  <i class="mdi mdi-alert m-auto text-primary"></i>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                  <p class="font-weight-light small-text mb-0">Just now</p>
                </div>
              </a>
              <a class="dropdown-item preview-item py-3">
                <div class="preview-thumbnail">
                  <i class="mdi mdi-settings m-auto text-primary"></i>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                  <p class="font-weight-light small-text mb-0">Private message</p>
                </div>
              </a>
              <a class="dropdown-item preview-item py-3">
                <div class="preview-thumbnail">
                  <i class="mdi mdi-airballoon m-auto text-primary"></i>
                </div>
                <div class="preview-item-content">
                  <h6
                    class="preview-subject font-weight-normal text-dark mb-1"
                  >New user registration</h6>
                  <p class="font-weight-light small-text mb-0">2 days ago</p>
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown d-none d-xl-inline-block user-dropdown" @mouseover="dave=true" @mouseleave="dave=false">
            <a
              class="nav-link dropdown-toggle"
              id="UserDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                class="img-xs rounded-circle"
                src="https://lh3.googleusercontent.com/a-/AAuE7mAPaAzyOYH-rjrFDVmkBq37JJ2-puZIWDrLVR0yHw"
                alt="Profile image"
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
                  src="https://lh3.googleusercontent.com/a-/AAuE7mAPaAzyOYH-rjrFDVmkBq37JJ2-puZIWDrLVR0yHw"
                  alt="Profile image"
                />
                <p class="mb-1 mt-3 font-weight-semibold">{{user.username}}</p>
                <p class="font-weight-light text-muted mb-0">{{user.email}}</p>
              </div>
              <a class="dropdown-item" href="/my-profile">
                Thông tin cá nhân
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
          <a class="main-header-button-auth btn-register" href="/">Đăng ký</a>
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
      test_active: false
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