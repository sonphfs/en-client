<template>
  <div class="row" style="margin: 0 auto">
    <div class="col-md-12">
      <div class="body-subject">
        <div class="subject-info">
          <div class="overview">Chủ đề Constracts</div>
          <div class="selected-nav">
            <span>
              <button type="button" class="btn btn-warning btn-rounded nav-btn">Học lại</button>
            </span>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="col-md-5 grid-margin">
      <div class="card">
        <div class="card-body d-flex flex-column">
          <div class="testing-result-general">
            <p class="general-title">Kết quả kiểm tra</p>
            <p class="general-description">
              Lần thứ:
              <span class="des-number">3</span>
            </p>
            <div class="general-content">
              <div class="testing-result-percent">
                <TestResultChart :examLogId="this.$route.params.examLogId"></TestResultChart>
              </div>
              <div class="general-detail">
                <p class="detail-item">
                  <span class="detail-icon icon-1"></span>Số câu đúng:
                  <span class="detail-value" v-if="examLog.exam_result">{{examLog.exam_result.correct_answer_count}}</span>
                </p>
                <p class="detail-item">
                  <span class="detail-icon icon-2"></span>Số câu sai:
                  <span class="detail-value" v-if="examLog.exam_result">{{examLog.exam_result.total_incorrect}}</span>
                </p>
                <p class="detail-item">
                  <span class="detail-icon icon-3"></span>Số câu chưa chọn:
                  <span class="detail-value" v-if="examLog.exam_result">{{examLog.exam_result.not_selected}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-7 grid-margin">
      <div class="card">
        <div class="card-body d-flex flex-column">
          <TestScoreHistoriesChart :examLogId="this.$route.params.examLogId"></TestScoreHistoriesChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestResultChart from "@/components/charts/PieChart";
import TestScoreHistoriesChart from "@/components/charts/TestScoreHistoriesChart";
import request from "@/utils/request"
export default {
  name: "TestResult",
  components: {
    TestResultChart,
    TestScoreHistoriesChart
  },
  data() {
    return {
      examLog: {}
    }
  },
  created() {
    request({
      url: "/test-log/" + this.$route.params.examLogId,
      method: "get"
    })
    .then(res => {
      this.examLog = res.data.result_data
    })
  },
};
</script>

<style scoped>
.testing-result-general {
  display: inline-block;
  width: 100%;
  background: #fff;
  border-radius: 6px;
  padding: 30px 15px;
}
.testing-result-general .general-title {
  font-family: opensanslight;
  font-size: 20px;
  color: var(--color-default-title);
  margin-bottom: 5px;
  text-align: center;
}
p {
  margin: 0 0 10px;
}
.testing-result-general .general-description {
  font-family: opensanslight;
  font-size: 15px;
  color: var(--color-default-title);
  margin-bottom: 40px;
  text-align: center;
}
.testing-result-general .general-content {
  display: flex;
}
.testing-result-percent {
  margin: auto;
}
.testing-result-general .general-detail {
  margin: auto;
}
.testing-result-general .general-detail .detail-item {
  font-family: opensansregular;
  font-size: 13px;
  color: var(--color-default-text);
  margin-bottom: 10px;
}
.selected-nav{
  text-align: right;
}
</style>
<style>
canvas#doughnut-chart {
  width: 200px !important;
  height: 200px !important;
}
canvas#line-chart {
  height: 500px !important;
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