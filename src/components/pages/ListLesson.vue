<template>
  <div class="row">
    <div class="col-md-12 subject-wapper">
      <div class="banner-subject">
        <h3>HỌC TỪ VỰNG THEO CHỦ ĐỀ</h3>
        <p>
          Học từ vựng tiếng Anh theo chủ đề là phương pháp học từ vựng vô cùng hiệu quả và không gây nhàm chán.
          Chúng ta có thể tùy chọn các chủ đề từ cơ bản như gia đình, thể thao cho đến những chủ đề nâng cao như nghề nghiệp, công việc.
        </p>
      </div>
      <div class="body-subject">
        <div class="subject-info">
          Chủ đề
          <span class="subject-count">{{ subjects.total }}</span>
          <hr />
        </div>
        <div class="subject-list">
          <div class="row subject-item">
            <div class="col-md-4 l-item" v-for="subject in subjects.data">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img :src='serverUrl + subject.image' alt="JOB" width="100px" height="100px" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">{{subject.name}}</p>
                  </div>
                  <div class="lesson-button">
                    <button
                      type="button"
                      class="btn btn-success"
                      @click="start(subject.id)"
                    >Bắt đầu</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <paginate
          :page-count="pageCount"
          :click-handler="getSubjects"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  name: "ListSubject",
  data() {
    return {
      subjects: {},
      last_page: 0,
      serverUrl: process.env.VUE_APP_BASE_SERVER_URL
    };
  },
  methods: {
    start(subjectId) {
      return this.$router.push("/subject/" + subjectId);
    },
    getSubjects(page = 1) {
      request({
        url: "/subjects?page=" + page,
        method: "get"
      })
        .then(res => {
          this.subjects = res.data.result_data;
          this.last_page = this.subjects.last_page
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err.res);
        });
    }
  },
  created() {
    this.getSubjects()
  },
  computed:{
    pageCount(){
      return this.last_page
    }
  }
};
</script> 
<style scoped>
div.subject-wapper {
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

div.subject-info {
  margin-top: 10px;
}
div.lesson-button {
  text-align: center;
}
div.lesson-button button.btn-success {
  border-radius: 30px;
}
div.lesson-image {
  text-align: center;
  margin-bottom: 2rem;
}
div.lesson-name {
  margin-bottom: 2rem;
}

span.subject-count {
  font-size: 13px;
  background: red;
  color: #fff;
  padding: 4px 7px;
  margin-left: 5px;
  border-radius: 50%;
}
div.l-item:hover {
  transform: translate(0px, -3px);
}
</style>
<style>
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > .active > a,
.pagination > .active > a:focus,
.pagination > .active > a:hover,
.pagination > .active > span,
.pagination > .active > span:focus,
.pagination > .active > span:hover {
  z-index: 3;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
</style>