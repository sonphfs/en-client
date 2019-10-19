<template>
  <div class="row">
    <div class="col-md-8" style="max-width: 950px;">
      <div class="banner-subject">
        <img
          class="img-banner"
          alt="LET'S GO!"
          src="@/assets/images/logo_2.svg"
        />
      </div>
      <div class="body-subject">
        <div class="subject-info">
            WORDS
            <hr>
        </div>
        <div class="subject-list">
          <div class=" row subject-item">
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img src="@/assets/images/logo_2.svg" alt="JOB" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">artist</p>
                    <p>(n)</p>
                    <p>họa sỹ</p>
                  </div>
                  <div class="lesson-button">
                  </div>
                </div>
              </div>
            </div>
             <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img src="@/assets/images/logo_2.svg" alt="JOB" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">JOB</p>
                  </div>
                  <div class="lesson-button">
                  </div>
                </div>
              </div>
            </div> <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img src="@/assets/images/logo_2.svg" alt="JOB" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">JOB</p>
                  </div>
                  <div class="lesson-button">
                  </div>
                </div>
              </div>
            </div> <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img src="@/assets/images/logo_2.svg" alt="JOB" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">JOB</p>
                  </div>
                  <div class="lesson-button">
                  </div>
                </div>
              </div>
            </div> <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <div class="lesson-image">
                    <img src="@/assets/images/logo_2.svg" alt="JOB" />
                  </div>
                  <div class="lesson-name" style="text-align: center">
                    <p class="lesson-name">JOB</p>
                  </div>
                  <div class="lesson-button">
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

<style scoped>
div.col-md-8 {
  margin: 0 auto;
  max-width: 950px;
  box-sizing: border-box;
}
div.card{
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

div.subject-info{
    margin-top: 10px;
}
div.lesson-button{
    text-align: center;
}
</style>