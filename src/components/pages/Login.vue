<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth register-bg-1 theme-one">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <h2 class="text-center mb-4">EN-C LOGIN</h2>
            <div class="auto-form-wrapper">
              <form @submit.prevent="login">
                <div class="form-group">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Email" v-model="email" />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="password"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                  <div v-if="errorMsg" class="help-block text-danger">Email or password incorrect!</div>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary submit-btn btn-block">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- content-wrapper ends -->
    <router-view></router-view>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
import request from "@/utils/request";
import { setToken, getToken } from "@/utils/auth";
import { isAuthorized } from "@/permission";
export default {
  name: "Login",
  data() {
    return {
      email: "phamhungsonk60@gmail.com",
      password: "admin123",
      token: "",
      errorMsg: ""
    };
  },
  components: {},
  created() {},
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password,
        site: "client",
      };
      request({
        url: "/login",
        method: "post",
        data
      })
        .then(res => {
          this.token = res.data.result_data.token;
          setToken(this.token);
          request.defaults.headers.common["Authorization"] =
            "Bearer " + getToken();
          this.$router.push("/dashboard");
        })
        .catch(err => {
           if(err.response.data.msg) {
              this.errorMsg = err.response.data.msg
           }
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
.text-danger {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
}
</style>