<template>
  <div class="row" style="width: 90%; margin: 0 auto">
    <div class="col-md-3 grid-margin">
      <div class="card" style="max-height: 345px;">
        <div class="card-body d-flex flex-column">
          <div class="setting-nav-tab">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a
                  href="#personal"
                  aria-controls="personal"
                  role="tab"
                  data-toggle="tab"
                  @click="isSecurity=false"
                >Thông tin cá nhân</a>
              </li>
              <li role="presentation">
                <a
                  href="#security"
                  aria-controls="security"
                  role="tab"
                  data-toggle="tab"
                  @click="isSecurity=true"
                >Thay đổi mật khẩu</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9 grid-margin">
      <div class="card">
        <div class="card-body d-flex flex-column">
          <div class="infos" v-show="!isSecurity">
            <div class="avatar">
              <img
                alt="avatar"
                src="https://lh3.googleusercontent.com/a-/AAuE7mAPaAzyOYH-rjrFDVmkBq37JJ2-puZIWDrLVR0yHw"
              />
              <span class="icon-update">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </span>
            </div>
            <div class="user-info">
              <form class="forms-sample" @submit.prevent="updateProfile()">
                <div class="form-group">
                  <label for="Enter username">Tên</label>
                  <input
                    type="username"
                    class="form-control"
                    id="username"
                    placeholder="username"
                    v-model="userInfos.username"
                  />
                </div>
                <div class="form-group">
                  <label for="Email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Enter email"
                    v-model="userInfos.email"
                  />
                </div>
                <div class="form-group">
                  <label for="Phone">Số điện thoại</label>
                  <input
                    type="phone"
                    class="form-control"
                    id="Phone"
                    placeholder="Enter Phone"
                    v-model="userInfos.phone"
                  />
                </div>
                <div class="form-group">
                  <label for="address">Địa chỉ</label>
                  <input
                    type="address"
                    class="form-control"
                    id="address"
                    placeholder="Enter address"
                    v-model="userInfos.address"
                  />
                </div>
                <button type="submit" class="btn btn-success mr-2">Lưu thay đổi</button>
              </form>
            </div>
          </div>
          <div class="change-password" v-show="isSecurity">
            <form class="forms-sample">
              <div class="form-group">
                <label for="curent_password">Mật khẩu cũ</label>
                <input
                  type="password"
                  class="form-control"
                  id="curent_password"
                  placeholder="Enter password"
                  v-model="changePassword.current_password"
                />
              </div>
              <div class="form-group">
                <label for="password">Mât khẩu mới</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter password"
                  v-model="changePassword.password"
                />
              </div>
              <div class="form-group">
                <label for="password_confirmation">Nhập lại mật khẩu mới</label>
                <input
                  type="password"
                  class="form-control"
                  id="password_confirmation"
                  placeholder="Enter password"
                  v-model="changePassword.password_confirmation"
                />
              </div>
              <button
                type="button"
                class="btn btn-success mr-2"
                @click="updatePassword"
              >Lưu thay đổi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "Profile",
  data() {
    return {
      isSecurity: false,
      userInfos: { username: "", email: "", phone: "", address: "" },
      changePassword: {
        current_password: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    isActive() {
      if (this.isSecurity) return "active";
    },
    updateProfile() {
      let data = this.userInfos;
      request({
        url: "/user/update-profile",
        method: "post",
        data
      })
        .then(res => {
          if (res.data.result_data == true) {
            alert("Lưu thành công!");
          }
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err.res);
        });
    },
    updatePassword() {
      let data = this.changePassword;
      request({
        url: "/user/change-password",
        method: "post",
        data
      })
        .then(res => {
          if (res.data.result_data == true) {
            alert("Lưu thành công!");
          }
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);
        });
    }
  },
  created() {
    request({
      url: "/user/infos",
      method: "get"
    })
      .then(res => {
        this.userInfos = res.data.result_data;
      })
      .catch({});
  }
};
</script>

<style scoped>
.nav-tabs {
  border: none;
}
.setting-nav-tab {
  padding-right: 30px;
}
.setting-nav-tab .nav-tabs > li {
  float: none;
  margin: 0px;
  padding: 0px;
  margin-bottom: 3px;
}
.setting-nav-tab .nav-tabs > li {
  float: none;
  margin: 0px;
  padding: 0px;
  margin-bottom: 3px;
}
.setting-nav-tab .nav-tabs > li {
  float: none;
  margin: 0px;
  padding: 0px;
  margin-bottom: 3px;
}
.setting-nav-tab .nav-tabs > li > a {
  display: inline-block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  border-radius: 30px;
  font-family: opensanssemibold !important;
  font-size: 15px;
  color: var(--color-default-text);
  padding: 0px 25px;
  border: 0px;
  margin: 0px;
  transition: 0.2s all ease;
}
.setting-nav-tab .nav-tabs > li.active > a {
  border: 0px;
  background: #f0f0f0;
  color: #00bcef;
}
.setting-nav-tab .nav-tabs > li > a:hover,
.setting-nav-tab .nav-tabs > li > a:focus {
  border: 0px;
  background: #f0f0f0;
  color: #414042;
}
input.form-control {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #e8e8e8;
}
input.form-control:focus {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #00bcef;
}

div.infos {
  display: grid;
  grid-template-columns: 18% 82fr;
}
</style>
