<template>
  <div class="col-lg-5 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
    <form
            @submit.prevent="register"
            class="form-box"
    >
      <h3 class="h4 text-black mb-4">Sign Up</h3>
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
export default {
  name: "SignupForm",
  data(){
    return {
      email : '',
      username: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    register() {
        let data = {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
        this.$store.dispatch('register', data)
            .then(()=> this.$router.push('/'))
            .catch(err => console.log(err))
    }
  }
}
</script>