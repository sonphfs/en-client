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
                      <input type="text" class="form-control" placeholder="Username" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Email" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input type="password" class="form-control" placeholder="Password" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input type="password" class="form-control" placeholder="Confirm Password" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn btn-primary btn-block"
                      @click="showNotify"
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
export default {
  name: "LienHe",
  components: {},
  data() {
    return {};
  },
  methods: {
    showNotify() {
      this.$notify({
        group: "learningWord",
        speed: 500,
        duration: 30000,
        title: '<h4 style="text-align:center">Agreement</h4>',
        text:
          '<div style="text-align:center">/əˈgrēmənt/<br> Sự đồng ý</div> <div>Ví dụ: We are in agreement or partial agreement on many of the most significant issues, but we shall have to remain at odds on a few</div>'
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
</style>