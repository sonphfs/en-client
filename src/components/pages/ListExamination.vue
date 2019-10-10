<template>
  <div>
    <TitleHeader></TitleHeader>
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2" style="font-weight: bold;">FULL TEST</div>
              <div class="col-md-1">Category</div>
              <div class="col-md-2">
                <select class="custom-select custom-select mb-1">
                  <option selected>All</option>
                  <option value="1">ETS</option>
                  <option value="2">Economy</option>
                  <option value="3">Succeed</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <ul>
                  <li>New - Practice Full Test TOEIC Reading, Listening 7</li>
                  <hr />
                  <li>New - Practice Full Test TOEIC Reading, Listening 6</li>
                  <hr />
                  <li>Practice Full Test TOEIC Reading, Listening 5</li>
                  <hr />
                  <li>Practice Full Test TOEIC Reading, Listening 2</li>
                  <hr />
                  <li>Practice Full Test TOEIC Reading, Listening 1</li>
                  <hr />
                  <li>Thi thử đề TOEIC ETS</li>
                  <hr />
                  <li>Thi thử đề TOEIC ETS</li>
                  <hr />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2" style="font-weight: bold; margin-bottom:10px;">SHORT TEST</div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <ul>
                  <li>New - Đề thi ngày 10/10/2010</li>
                  <hr />
                  <li>New - Đề thi ngày 9/10/2010</li>
                  <hr />
                  <li>Đề thi ngày 8/10/2010</li>
                  <hr />
                  <li>Đề thi ngày 7/10/2010</li>
                  <hr />
                  <li>Đề thi ngày 6/10/2010</li>
                  <hr />
                  <li>Đề thi ngày 5/10/2010</li>
                  <hr />
                  <li>Đề thi ngày 4/10/2010</li>
                  <hr />
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

export default {
  name: "Dashboard",
  components: {
    TitleHeader
  }
};
</script>