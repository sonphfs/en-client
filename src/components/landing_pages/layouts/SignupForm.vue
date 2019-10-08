<template>
  <div class="col-lg-5 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
    <form
            @submit.prevent="register"
            class="form-box"
    >
      <h3 class="h4 text-black mb-4">Sign Up</h3>
      <h3 class="h4 text-black mb-4"> {{ token }}</h3>
      <div class="form-group">
        <input type="text" v-bind="username" class="form-control" placeholder="Use Name" />
      </div>
      <div class="form-group">
        <input type="text" v-bind="email" class="form-control" placeholder="Email Addresss" />
      </div>
      <div class="form-group">
        <input type="password" v-bind="password" class="form-control" placeholder="Password" />
      </div>
      <div class="form-group mb-4">
        <input type="password" v-bind="password_confirmation" class="form-control" placeholder="Re-type Password" />
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-primary btn-pill" value="Sign up" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "SignupForm",
  data(){
    return {
      email : '',
      username: '',
      password: '',
      password_confirmation: '',
      token: ''
    }
  },
  methods: {
    register() {
        axios
        .post('http://127.0.0.1:8000/api/v1/signup/', {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(res => {this.token = res})
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>