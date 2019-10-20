<template>
  <div class="row">
    <div class="col-md-12 subject-wapper" >
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
          <span class="subject-count">50</span>
          <hr />
        </div>
        <div class="subject-list">
          <div class="row subject-item">
            <div class="col-md-4 l-item" v-for="subject in subjects">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img src="@/assets/images/hobby.jpg" alt="JOB" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">{{subject.name}}</p>
                  </div>
                  <div class="lesson-button">
                    <button type="button" class="btn btn-success" @click="start(subject.id)">Học ngay</button>
                  </div>
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
import request from '@/utils/request'
export default {
  name: "ListSubject",
  data() {
    return {
        subjects: []
    }
  },
  methods: {
    start(subjectId){
        return this.$router.push('/subject/'+ subjectId)
    }
  },
  created() {
    request({
      url: '/subjects',
      method: 'get'
    }).then(res => {
      this.subjects = res.data.result_data
    }).catch(err => {
        // eslint-disable-next-line
        console.log(err.res)
    })
  }
}
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
div.lesson-button button.btn-success{
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