<template>
  <div>
    <div class="col-md-12 completed-body">
      <div class="body-cover">
        <p class="completed-title">Hoàn thành bước học</p>
        <p class="completed-topic-name">Chủ đề: JOB</p>

        <div class="completed-icon">
          <img src="@/assets/images/complete.png" alt="completed image" />
        </div>

        <p
          class="completed-detail"
        >Chúc mừng bạn đã hoàn thành bước học từ vựng. Giờ bạn có thể chọn Học lại nếu cảm thấy chưa chắc chắn hoặc Kiểm tra ngay.</p>
      </div>
    </div>
    <div class="col-md-12 completed-nav" style="background-color: #dbdbdb">
      <div>
        <button type="button" class="btn btn-danger btn-rounded btn-fw">Học lại</button>
      </div>
      <div>
        <button type="button" class="btn btn-success btn-rounded btn-fw">Kiểm tra</button>
      </div>
    </div>
  </div>
</template>

<style>
div.completed-body {
  margin-top: 2.5%;
  margin-bottom: 10%;
}
div.completed-body div.body-cover {
  text-align: center;
}

div.completed-title {
  font-family: opensanslight;
  font-size: 20px;
  margin: 0px auto;
  max-width: 350px;
}

p.completed-detail {
  font-family: opensanslight;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  max-width: 265px;
  margin: auto;
  margin-top: 15px;
}

div.completed-nav {
  height: 10%;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  margin: 0px;
  height: 8rem;
  text-align: center;
  line-height: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
div.content-wrapper {
  padding-bottom: 0px;
}
footer.footer {
  display: none;
}
</style>