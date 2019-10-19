<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper">
    <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
      <div class="row w-100">
        <div class="col-lg-4 mx-auto">
          <div class="auto-form-wrapper">
            <h3 class="login-title">EN-C Login</h3>
            <form @submit.prevent="login">
              <div class="form-group">
                <label class="label">Email</label>
                <div class="input-group">
                  <input type="text" v-model="email" class="form-control" placeholder="Email" />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="mdi mdi-check-circle-outline"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="label">Password</label>
                <div class="input-group">
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    placeholder="*********"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="mdi mdi-check-circle-outline"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary submit-btn btn-block">Login</button>
              </div>
              <div class="form-group d-flex justify-content-between">
                <div class="form-check form-check-flat mt-0">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" checked /> Keep me signed in
                  </label>
                </div>
                <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
              </div>
              <div class="form-group">
                <button class="btn btn-block g-login">
                  <img class="mr-3" src="@/assets/images/file-icons/icon-google.svg" alt />Log in with Google
                </button>
              </div>
              <div class="text-block text-center my-3">
                <span class="text-small font-weight-semibold">Not a member ?</span>
                <a href="register.html" class="text-black text-small">Create new account</a>
              </div>
            </form>
          </div>
          <ul class="auth-footer">
            <li>
              <a href="#">Conditions</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
          <p class="footer-text text-center">copyright © 2018 Bootstrapdash. All rights reserved.</p>
          <p>{{ token }}</p>
        </div>
      </div>
    </div>
    <!-- content-wrapper ends -->
    <router-view></router-view>
  </div>
</template>

<script>
import request from "@/utils/request"
import { setToken} from '@/utils/auth'
import {isAuthorized} from '@/permission'
export default {
  name: "Login",
  data() {
    return {
      email: "son_test@gmail.com",
      password: "admin123",
      token: ""
    };
  },
  components: {},
  created() {
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };
      request({
        url: "/login",
        method: "post",
        data
      })
        .then(res => {
          this.token = res.data.result_data.token;
          setToken(this.token)
          this.$router.push('/')
        })
        .catch(err =>{
            console.log(err)
        });
    }
  }
};
</script>

<style scoped>
.container-fluid.page-body-wrapper {
  padding: 0px;
}

h3.login-title {
  color: black;
  text-align: center;
}
</style>