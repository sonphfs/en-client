<template>
  <div class="intro-section" id="home-section">
    <div
      class="slide-1"
      style="background-image: url(&quot;https://colorlib.com/preview/theme/oneschool/images/hero_1.jpg&quot;); background-position: 50% 3453px;"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="row align-items-center">
              <div class="col-lg-6 mb-4">
                <h1 data-aos="fade-up" data-aos-delay="100" class="aos-init aos-animate">
                  Learn From
                  The Expert
                </h1>
                <p class="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis
                  rerum amet natus quas necessitatibus.
                </p>
                <p data-aos="fade-up" data-aos-delay="300" class="aos-init aos-animate">
                  <a href="#" class="btn btn-primary py-3 px-5 btn-pill">Admission Now</a>
                </p>
              </div>
              <SignupForm></SignupForm>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from './SignupForm'
export default {
  name: "Home",
  components: {
    SignupForm
  }
};
</script>