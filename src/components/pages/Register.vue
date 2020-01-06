<template>
  <div>
    <div class="site-section bg-light" id="contact-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <h2 class="text-center mb-4">Register</h2>
              <div class="auto-form-wrapper">
                <form action="#">
                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="username" placeholder="Username" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                    <div v-if="validateMessages.username" class="help-block text-danger">{{validateMessages.username[0]}}</div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="email" placeholder="Email" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                    <div v-if="validateMessages.email" class="help-block text-danger">{{validateMessages.email[0]}}</div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input type="password" class="form-control" v-model="password" placeholder="Password" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                    <div v-if="validateMessages.password" class="help-block text-danger">{{validateMessages.password[0]}}</div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input type="password" class="form-control" v-model="password_confirmation" placeholder="Confirm Password" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                    <div v-if="validateMessages.password_confirmation" class="help-block text-danger">{{validateMessages.password_confirmation[0]}}</div>
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn btn-primary btn-block"
                      @click="register"
                    >Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "SignupForm",
  data() {
    return {
      email: "son_test@gmail.com",
      username: "son_test",
      password: "admin123",
      password_confirmation: "admin123",
      token: "",
      validateMessages: {}
    };
  },
  methods: {
    register() {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      request({
        url: "/signup",
        method: "post",
        data
      })
        .then(res => {
          this.token = res.data.result_data;
        })
        .catch(err => {
          console.log(err.response.data);
          if(err.response.data.errors) {
              this.validateMessages = err.response.data.errors
          }
        });
    }
  }
};
</script>
<style>
.vue-notification {
  padding: 10px;
  margin-bottom: 0px;

  font-size: 12px;

  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}

.vue-notification .warn {
  background: #ffb648;
  border-left-color: #f48a06;
}

.vue-notification .error {
  background: #e54d42;
  border-left-color: #b82e24;
}

.vue-notification .success {
  background: #68cd86;
  border-left-color: #42a85f;
}
.text-danger {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
}
</style>