<template>
  <!-- Page Title Header Starts-->
  <div class="row page-title-header">
    <div class="col-12">
      <div class="page-header">
        <h4 class="page-title" style="width: 7%">{{ parentPage }}</h4>
        <div class="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
          <ul class="quick-links">
            <li v-for="item in breadcrumbs">
              <a :href="item.link">{{ item.title}}</a>
            </li>
          </ul>
          <ul class="quick-links ml-auto">
            <li>
              <a href="#">Đề thi</a>
            </li>
            <li>
              <a href="#">Từ vựng</a>
            </li>
            <li>
              <a href="#">Ngữ pháp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Title Header Ends-->
</template>
<script>
export default {
  name: "TitleHeader",
  data() {
    return {
      breadcrumbs: [
        {
          title: "Tên bài thi",
          link: "#"
        },
        {
          title: "Kết quả",
          link: "#"
        }
      ],
      parentPage: "BÀI THI"
    };
  }
};
</script>