<template>
  <div class="row">
    <div class="col-md-12">
      <div class="banner-subject"></div>
      <div class="body-subject">
        <div class="subject-info">
          <div class="overview">Chủ đề Constracts</div>
          <div class="selected-nav">
            <span>
              <button type="button" class="btn btn-warning btn-rounded nav-btn">Học từ vựng</button>
            </span>
            <span>
              <button type="button" class="btn btn-info btn-rounded nav-btn" @click="test">Kiểm tra</button>
            </span>
          </div>
        </div>
        <hr />
        <div class="subject-list">
          <div class="row subject-item">
            <div class="col-md-3" v-for="word in words">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img src="@/assets/images/faces/face1.jpg" :alt="word.meaning" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name margin-0">{{ word.word }}</p>
                    <p class="margin-0">({{ word.type }})</p>
                    <p class="margin-0">{{ word.meaning }}</p>
                  </div>
                  <div class="lesson-button"></div>
                </div>
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
  name: "ListWord",
  component: {},
  data() {
    return {
      words: []
    };
  },
  created() {
    request({
      url: "/list-word/" + this.$route.params.id,
      method: "get"
    })
      .then(res => {
        this.words = res.data.result_data;
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err.res);
      });
  },
  methods: {
    test() {
      return this.$router.push('/start-test/subject/'+ this.$route.params.id)
    }
  }
};
</script>
<style scoped>
div.col-md-8 {
  margin: 0 auto;
  max-width: 950px;
  box-sizing: border-box;
}
div.card {
  margin-bottom: 20px;
}
div.banner-subject {
  width: 100%;
  border-radius: 0px;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  overflow: hidden;
}
div.banner-subject img {
  height: 115px;
  vertical-align: middle;
}
div.lesson-image {
  margin-bottom: 1rem;
  text-align: center;
}
div.subject-info {
  margin-top: 10px;
}
div.lesson-button {
  text-align: center;
}
p.lesson-name {
  font-weight: bold;
  color: #00bcef;
}
p.margin-0 {
  margin: 0px;
}

div.subject-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
button.nav-btn {
  margin-left: 2rem;
}
</style>