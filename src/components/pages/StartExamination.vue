<template>
  <div>
    <!-- Page Title Header Starts-->
    <div class="row page-title-header">
      <div class="col-12">
        <h3>Thi thử TOEIC online</h3>

        <div class="page-header">
          <h4 class="page-title" style="width: 7%">Thi thử</h4>
          <div class="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
            <ul class="quick-links">
              <li>
                <a href="#">Fulltest</a>
              </li>
              <li>
                <a href="#">Bắt đầu</a>
              </li>
            </ul>
            <ul class="quick-links ml-auto">
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Hướng dẫn</a>
              </li>
              <li>
                <a href="#">Thi</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Title Header Ends-->
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body" style="padding-left: 80px;">
          <div class="title">
            <h3>Làm bài thi</h3>
          </div>
          <div class="title examination">
            <h3>{{ exam.title}}</h3>
          </div>
          <h3>Chuẩn bị:</h3>
          <ul>
            <li>
              Máy tính hoặc điện thoại có
              <strong>đường truyền Internet tốt</strong> để việc làm bài không bị gián đoạn.
            </li>
            <li>
              Cài đặt
              <strong>trình duyệt mới nhất</strong> (Chrome, Cốc Cốc, Firefox, Safari...)
            </li>
            <li>
              <strong>Cắm tai nghe</strong> hoặc bật loa ngoài để kiểm tra trước âm thanh
            </li>
          </ul>
          <div class="mediaplugin mediaplugin_videojs">
            <div style="max-width:400px;">
              <audio
                controls="true"
                data-setup-lazy="{&quot;language&quot;: &quot;en&quot;, &quot;fluid&quot;: true, &quot;controlBar&quot;: {&quot;fullscreenToggle&quot;: false}, &quot;aspectRatio&quot;: &quot;1:0&quot;}"
                id="id_videojs_5d9f152d1e234_1"
                class="video-js"
                title="sample01.mp3"
              >
                <source src="https://enza.com.vn/toeic/audio/sample/sample01.mp3" type="audio/mp3" />
              </audio>
            </div>
          </div>
          <h3>Nội dung các phần thi:</h3>
          <ul>
            <li>
              <strong>Phần thi Nghe hiểu</strong>
            </li>
            <li>
              <strong>Phần thi Đọc hiểu</strong>
            </li>
          </ul>
          <h3>Khi làm bài:</h3>
          <ul>
            <li>Chọn đáp án đúng bằng cách nhấp chuột vào các lựa chọn A, B, C, D.</li>
            <li>
              Nhấn nút
              <strong>[Next]</strong> ở phía dưới cùng của trang để sang phần kế tiếp (Part 2, Part 3...)
            </li>
            <li>
              Nhấn nút
              <strong>[Submit all and Finish]</strong> để nộp bài.
            </li>
          </ul>
          <h3>Chú ý khác:</h3>
          <ul>
            <li>
              Với mỗi bài thi: Bạn được phép làm
              <strong>không giới hạn</strong>. Tuy nhiên để có kết quả chính xác bạn chỉ nên làm
              <strong>01 lần.</strong>
            </li>
            <li>Nếu kiểm tra trình độ, bạn đừng làm đi làm lại một đề vì kết quả sẽ không phản ánh đúng mức độ hiện tại của bạn.</li>
          </ul>
          <h3>Thời gian làm bài: {{getTime}} phút</h3>
        </div>
        <div class="align-center">
          <button class="btn btn-primary" @click="start()">START EXAM</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import request from "@/utils/request";
export default {
  name: "StartExamination",
  components: {},
  data(){
      return {
        exam: {}
      }
  },
  methods: {
    start() {
      Swal.fire({
        title: "Bắt đầu làm bài",
        text:
          "Thời gian sẽ đếm ngược kể từ thời điểm bạn bắt đầu và bạn phải gửi trước khi hết hạn. Bạn có chắc chắn rằng bạn muốn bắt đầu bây giờ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "START ATTEMPT",
        cancelButtonText: "CANCEL",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6"
      }).then(result => {
        if (result.value) {
          this.resetLocalStorage();
          return this.$router.push("/exam/" + this.$route.params.code);
        }
      });
    },
    resetLocalStorage() {
      localStorage.clear();
    },
    getExamInfos(){
      request({
        url: "/get-exam/" + this.$route.params.code,
        method: "get"
      }).then(res => {
          console.log(res)
          this.exam = res.data.result_data
      }).catch(err => {

      })
    },
  },
  created(){
    this.getExamInfos()
  },
  computed: {
    getTime(){
      if(this.exam.type == 1) {
        return 25
      }else {
        return 120
      }
    }
  }
};
</script>

<style scoped>
div.title {
  text-align: center;
  color: #000;
}
div.align-center {
  text-align: center;
  margin-bottom: 5%;
  margin-top: 2.5%;
}
div.align-center button {
  width: 25%;
  padding: 2%;
}
</style>