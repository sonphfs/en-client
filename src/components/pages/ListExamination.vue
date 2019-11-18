<template>
  <div>
    <TitleHeader></TitleHeader>
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card" v-for="type in examinationTypes">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12" style="font-weight: bold; margin-bottom:10px;">{{ type.name }}</div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <ul>
                  <li v-for="examination in examinationList" v-if="examination.type == type.id">
                    <a
                      href="start-exam/a0Fgab6a"
                    >New - Practice Full Test TOEIC Reading, Listening 7</a>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleHeader from "@/components/layouts/TitleHeader.vue";
import request from "@/utils/request";
export default {
  name: "Dashboard",
  components: {
    TitleHeader
  },
  data() {
    return {
      examinationList: [],
      examinationTypes: []
    };
  },
  methods: {
    getData() {
      request({
        url: "/get-list-exam",
        method: "get"
      })
        .then(res => {
          this.examinationList = res.data.result_data.examinationList;
          this.examinationTypes = res.data.result_data.examinationTypes;
        })
        .catch(err => {
          console.log(err.res);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>