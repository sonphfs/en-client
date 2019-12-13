<template>
  <div class="container-scroller">
    <Header :user="user" @logout="removeUser"></Header>
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
        <Footer></Footer>
      </div>
    </div>
    <notifications group="learningWord" position="bottom right" />
  </div>
</template>

<script>
import request from "@/utils/request";
import { getToken, removeToken } from "@/utils/auth";
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: { email: "", username: "" },
      words: []
    };
  },
  created() {
    this.getUserInfos();
  },
  mounted() {},
  methods: {
    removeUser() {
      this.user = { email: "", username: "" };
    },
    getRandomLearningWord() {
      request({
        url: "/learning-word/random",
        method: "get"
      }).then(res => {
        this.words = res.data.result_data;
      });
    },
    getUserInfos() {
      this.$route.meta.isAuthenticated = false;
      if (getToken()) {
        request({
          url: "/user/infos",
          method: "get"
        })
          .then(res => {
            this.user = res.data.result_data;
            this.$route.meta.isAuthenticated = true;
            this.getRandomLearningWord();
            this.getRandomWord();
          })
          .catch(err => {
            removeToken();
            // eslint-disable-next-line
            console.log(err.res);
          });
      }
    },
    showNotify(word) {
      this.$notify({
        group: "learningWord",
        speed: 500,
        duration: 20000,
        title: '<h4 style="text-align:center">' + word.word + "</h4>",
        text:
          '<div style="text-align:center">/' +
          word.pronunciation +
          "/<br> " +
          word.meaning +
          "</div> <div>Ví dụ: " +
          word.example +
          "</div>"
      });
    },
    getRandomWord() {
      let bindThis = this;
      setInterval(() => {
        let word =
          bindThis.words[Math.floor(Math.random() * this.words.length)];
        bindThis.showNotify(word);
      }, 25000);
    }
  },
  computed: {
    isAuth() {
      return this.$route.meta.isAuthenticated;
    }
  }
};
</script>

<style scoped>
div.container-scroller {
  background-color: #f3f3f3;
}

div.main-panel {
  width: 100%;
}
div.content-wrapper {
  padding-left: 0rem;
  padding-right: 0rem;
}
.container-fluid.page-body-wrapper {
  width: 70%;
  padding-top: 63px;
  padding-right: 0px;
  padding-left: 0px;
}
</style>