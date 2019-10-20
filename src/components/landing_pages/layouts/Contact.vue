<template>
  <div class="site-section bg-light" id="contact-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <h2 class="section-title mb-3">Liên hệ</h2>
          <p class="mb-5">
            Mọi ý kiến đóng góp, câu hỏi hãy gửi đến chúng tôi
          </p>

          <form @submit.prevent="submitContact" class="aos-init aos-animate">
            <div class="form-group row">
              <div class="col-md-6 mb-3 mb-lg-0">
                <input type="text" v-model="first_name" class="form-control" placeholder="First name" />
              </div>
              <div class="col-md-6">
                <input type="text" v-model="last_name" class="form-control" placeholder="Last name" />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <input type="text" v-model="subject" class="form-control" placeholder="Subject" />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <input type="email" v-model="email" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-12">
                <textarea
                  class="form-control"
                  v-model="body"
                  id
                  cols="30"
                  rows="10"
                  placeholder="Write your message here."
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-6">
                <input
                  type="submit"
                  class="btn btn-primary py-3 px-5 btn-block btn-pill"
                  value="GỬI TIN NHẮN"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "Contact",
  data() {
    return {
      email: "sonph_test@gmail.com",
      first_name: "son",
      last_name: "pham",
      subject: "Subject mail",
      body: "body text"
    };
  },
  methods: {
    submitContact() {
      let data = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        subject: this.subject,
        body: this.body
      }
      request({
        url: '/send-contact',
        method: 'post',
        data
      }).then(res => {
        // eslint-disable-next-line
        console.log(res.data.result_data);
      }).catch(err => {
        // eslint-disable-next-line
        console.log(err.res)
      })
    }
  }
};
</script>