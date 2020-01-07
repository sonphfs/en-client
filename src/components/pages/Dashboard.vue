<template>
  <div class="row">
    <div class="col-md-12 subject-wapper">
      <div class="body-subject">
        <div class="subject-info">
          Từ vựng
          <hr />
        </div>
        <div class="subject-list">
          <div class="row subject-item">
            <div v-for="subject in subjects.data" :key="subject.id" class="col-md-4 l-item">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                  <img :src='serverUrl + subject.image' alt="JOB" width="100px" height="100px" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">{{subject.name}}</p>
                  </div>
                  <div class="lesson-button">
                    <button type="button" class="btn btn-success">Bắt đầu</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <paginate
          :page-count="subjectPage"
          :click-handler="getSubjects"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
        </div>
      </div>
    </div>
    <div class="col-md-12 subject-wapper">
      <div class="body-subject">
        <div class="subject-info">
          Ngữ pháp
          <hr />
        </div>
        <div class="subject-list">
          <div class="row subject-item">
            <div v-for="lesson in lessons.data" class="col-md-4 l-item">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img :src='serverUrl + lesson.image' alt="JOB" width="100px" height="100px" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">{{lesson.title}}</p>
                  </div>
                  <div class="lesson-button">
                    <button type="button" class="btn btn-success">Bắt đầu</button>
                  </div>
                </div>
              </div>
            </div>           
          </div>
          <paginate
          :page-count="lessonPage"
          :click-handler="getSubjects"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
        </div>
      </div>
    </div>
    <div class="col-md-12 subject-wapper">
      <div class="body-subject">
        <div class="subject-info">
          Đề thi
          <hr />
        </div>
        <div class="subject-list">
          <div class="row subject-item">
            <div class="col-md-4 l-item">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img src="@/assets/images/hobby.jpg" alt="JOB" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name"></p>
                  </div>
                  <div class="lesson-button">
                    <button type="button" class="btn btn-success">Bắt đầu</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <paginate
          :page-count="examPage"
          :click-handler="getSubjects"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/landing_pages/layouts/Contact.vue";
import request from "@/utils/request"
export default {
  name: "Dashboard",
  components: {
    Contact
  },
  data(){
    return {
      subjects: {
        data: [],
        last_page: 0
      },
      lessons: {
        data: [],
        last_page: 0
      },
      exams: {
        data: [],
        last_page: 0
      },
      serverUrl: process.env.VUE_APP_BASE_SERVER_URL
    }
  },
  created(){
    this.getLessons()
    this.getSubjects()
    this.getExams()
  },
  computed: {
    subjectPage(){
        return this.subjects.last_page
    },
    lessonPage(){
      return this.lessons.last_page
    },
    examPage(){
      return this.exams.last_page
    }
  },
  methods: {
    getSubjects(page=1) {
      request({
        url: "/subjects?page=" + page,
        method: "get"
      }).then(res => {
          this.subjects = res.data.result_data
      })
    },
    getLessons(page=1) {
        request({
        url: "/lessons?page=" + page,
        method: "get"
      }).then(res => {
          this.lessons = res.data.result_data
      })
    },
    getExams(page=1) {
        request({
        url: "/random-exams?page=" + page,
        method: "get"
      }).then(res => {
          this.exams = res.data.result_data
      })
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