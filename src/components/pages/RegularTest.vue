<template>
  <div class="row" style="margin-top: 5%;">
    <div class="title-center" style="margin: 0 auto;">
      <h3>Nội qui phòng thi</h3>
      <p>Dưỡi đây là một số điểm cần lưu ý</p>
    </div>
    <div class="col-md-12 subject-list">
      <!-- <div class="row subject-item">
        <div class="col-md-6 l-item" style="max-width: 25%">
          <div class="card">
            <div class="card-body">
            
            </div>
          </div>
        </div>
        <div class="col-md-6 l-item" style="max-width: 25%">
          <div class="card">
            <div class="card-body">
            
            </div>
          </div>
        </div>
      </div>-->
    </div>
    <div class="col-md-3 grid"></div>
    <div class="col-md-6 grid">
      <div class="btn-try">
        <button type="button" class="btn btn-warning btn-rounded btn-fw" @click="relearn">Học lại</button>
      </div>
      <div class="btn-test">
        <button type="button" class="btn btn-secondary btn-rounded btn-fw" @click="startTest">Kiểm tra</button>
      </div>
      <div class="col-md-3 grid"></div>
    </div>
  </div>
</template>
<script>
export default {
    name: "Start",
    components: {},
    data() {
        return {

        }
    },
    computed: {
        subjectId() {
            return this.$route.params.id
        }
    },
    methods: {
        startTest(){
            return this.$router.push('/test/'+ this.subjectId)
        },
        relearn() {
            return this.$router.push('/subject/'+ this.subjectId)
        }
    }
}
</script>
<style scoped>
div.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
div.grid div {
  text-align: center;
}
div.subject-list {
    margin-bottom: 10%;
}
</style>