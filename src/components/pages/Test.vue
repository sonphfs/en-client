<template>
  <div>
    <div class="col-md-12">
      <div class="card">
        <div class="card-body title-question">
          <p class="question-content">Chọn từ đúng phiên âm sau</p>
          <p class="pronun">/färmər/</p>
        </div>
      </div>
    </div>
    <div class="col-md-12 answer-body">
      <div class="card">
        <div class="card-body" style="text-align: center">
          <div class="answer">
            <div class="answer-item">comedy</div>
            <div class="answer-item">carpenter</div>
            <div class="answer-item">barber</div>
            <div class="answer-item">Đáp án khác</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 progress-test">
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="col-md-12 button-next">
      <button type="button" class="btn btn-primary btn-rounded btn-fw">Next</button>
    </div>
  </div>
</template>

<style scoped>
p.pronun {
  color: aqua;
}
div.title-question {
  text-align: center;
}
div.answer-body .card .card-body {
  text-align: center;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}
div.button-next {
  margin-top: 10px;
  padding-left: 5%;
  padding-right: 5%;
  text-align: right;
}
div.answer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
div.answer-body {
  margin-top: 10px;
}
div.answer-item {
  padding: 10px;
  border: solid 1px #dde4eb;
  border-radius: 25px;
}
div.answer-item:hover {
    background-color: #dde4eb;
}
</style>