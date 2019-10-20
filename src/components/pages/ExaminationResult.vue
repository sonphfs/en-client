<template>
  <div>
    <TitleHeader></TitleHeader>
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h3 class="title">Kết quả bài thi thử TOEIC</h3>
            <h3 class="title examination">ETS TOEIC 2019 TEST 1</h3>
          </div>
          <div class="row score-table">
              <div class="row score-report">
                <div class="col-md-4 personal-info">
                  <div class="name">Sonph</div>
                  <div class="test-date">Test Date: 10/10/19</div>
                  <div class="num-rigth">Số câu đúng: 128</div>
                  <div class="num-wrong">Số câu sai: 60</div>
                  <div class="not-seleted">Số câu chưa chọn: 12</div>
                </div>
                <div class="col-md-4 component-score">
                  <div class="listening-score">
                    <div class="score-label">LISTENING</div>
                    <div class="score-value">255</div>
                  </div>
                  <div class="listening-score">
                    <div class="score-label">READING</div>
                    <div class="score-value">195</div>
                  </div>
                </div>
                <div class="col-md-4 total-score">
                  <div class="score-label">TOTAL SCORE</div>
                  <div class="score-value">450</div>
                </div>
              </div>
          </div>
          <h3 style="text-align:center;">SCORE ANALYSIS</h3>
          <div class="width80">
            <div class="row score-analysis">
              <div class="col-md-12 part-analysis">
                <div class="table">
                  <div class="row" style="background-color: #8691C1">Listening Score</div>
                  <div class="row">
                    <div class="col-md-4 part-number">Part 1</div>
                    <div class="col-md-8 score-progress">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 25%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 part-number">Part 2</div>
                    <div class="col-md-8 score-progress">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 part-number">Part 3</div>
                    <div class="col-md-8 score-progress">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 75%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 part-number">Part 4</div>
                    <div class="col-md-8 score-progress">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row score-analysis">
              <div class="col-md-12 part-analysis">
                <div class="table">
                  <div class="row" style="background-color: #A5C6A3">Reading score</div>
                  <div class="row">
                    <div class="col-md-4 part-number">Part 5</div>
                    <div class="col-md-8 score-progress">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 part-number">Part 6</div>
                    <div class="col-md-8 score-progress">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 part-number">Part 7</div>
                    <div class="col-md-8 score-progress">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 75%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button-center">
            <button type="button" class="btn btn-secondary">XEM LẠI BÀI THI</button>
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
  name: "ExaminationResult",
  data() {
    return {
      examination_log: []
    };
  },
  components: {
    TitleHeader
  },
  created() {
    request({
      url: "/examination-result/" + this.$route.params.id,
      method: "get"
    })
      .then(res => {
        this.examination_log = res.data.result_data;
      })
      .catch({});
  },
  methods: {}
};
</script>

<style scoped>
.title {
  text-align: center;
}
.examination {
  color: #09c;
}
div.card {
  width: 100%;
}
div.score-table {
  margin: 0 auto;
  margin-bottom: 50px;
}
div.score-report {
  text-align: center;
  padding: 10px;
  border: 2px solid #9298b6;
}
div.score-label {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #45407a;
  padding: 5px 10px;
  max-width: 130px;
  margin: 0 auto;
}
div.score-value {
  width: 80px;
  height: 52px;
  margin: 20px auto;
  padding: 10px 5px;
  font-size: 24px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #666;
  text-align: center;
}
div.component-score {
  border-left: 1.2px solid #333;
  border-right: 1.2px solid #333;
}
div.width80 {
  width: 80%;
  margin: 0 auto;
}
div.score-analysis {
  margin: 0 auto;
}
div.score-analysis div.part-analysis {
  text-align: center;
  margin: 0 auto;
}
div.table {
  width: 100%;
  margin: 0px 10px 0px 10px;
  padding-bottom: 10px;
}
div.table div.row div.score-progress {
  padding: 10px;
  border: 1px solid #9298b6;
}
div.table div.row div.part-number {
  padding: 10px;
  border: 1px solid #9298b6;
}
div.button-center {
  text-align: center;
  margin: 20px;
}
div.button-center button {
  width: 30%;
}
</style>