<template>
  <div>
    <Header></Header>
    <Home></Home>
    <!-- <Courses></Courses> -->
    <!-- <Teachers></Teachers> -->
    <!-- <Programs></Programs> -->
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import Home from "./layouts/Home.vue";
import Footer from "./layouts/Footer.vue";
// import Courses from "./layouts/Courses.vue";
// import Teachers from "./layouts/Teachers.vue";
// import Programs from "./layouts/Programs.vue";
import Contact from "./layouts/Contact.vue";

export default {
  name: "LandingPage",
  components: {
    Header,
    Home,
    // Courses,
    // Teachers,
    // Programs,
    Contact,
    Footer
  }
}
</script>