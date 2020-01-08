<template>
  <div class="row" style="margin: 0 auto">
    <div class="col-md-4 grid-margin">
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
    <div class="col-md-8 grid-margin">
      <div class="card">
        <div class="card-body d-flex flex-column">
          <div class="infos" v-show="!isSecurity">
            <div class="avatar">
              <img
                class="avatar-img"
                alt="avatar"
                width="150px"
                height="150px"
                v-if="userInfos.avatar" :src="serverUri + userInfos.avatar"
              />
              <img
                class="avatar-img"
                alt="avatar"
                width="150px"
                height="150px"
                v-if="!userInfos.avatar" :src="serverUri + 'enc/uploads/users/avatars/default-userAvatar.png'"
              />
              <button
                type="button"
                class="btn btn-outline-info btn-upload-avatar"
                @click="confirmUpdate('avatar', 'Chọn và thay đổi avatar!')"
              >
                <i class="mdi mdi-upload"></i>Upload avatar
              </button>
              <input
                type="file"
                name="file"
                id="file"
                ref="avatar"
                style="display: none"
                @change="uploadAvatarEvent"
                accept="image/*"
              />
            </div>
            <div class="user-info">
              <form
                class="forms-sample"
                @submit.prevent="confirmUpdate('infos', 'Cập nhật thông tin cá nhân!')"
              >
                <div class="form-group">
                  <label for="Enter username">Tên</label>
                  <input
                    type="username"
                    class="form-control"
                    id="username"
                    placeholder="username"
                    v-model="userInfos.username"
                  />
                  <div v-if="validateMessages.username" class="help-block text-danger">{{validateMessages.username[0]}}</div>
                </div>
                <div class="form-group">
                  <label for="Email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Enter email"
                    v-model="userInfos.email"
                    readonly=""
                  />
                  <div v-if="validateMessages.email" class="help-block text-danger">{{validateMessages.email[0]}}</div>
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
                  <div v-if="validateMessages.phone" class="help-block text-danger">{{validateMessages.phone[0]}}</div>
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
                  <div v-if="validateMessages.address" class="help-block text-danger">{{validateMessages.address[0]}}</div>
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
                <div v-if="validateMessages.current_password" class="help-block text-danger">{{validateMessages.current_password[0]}}</div>
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
                <div v-if="validateMessages.password" class="help-block text-danger">{{validateMessages.password[0]}}</div>
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
                <div v-if="validateMessages.password_confirmation" class="help-block text-danger">{{validateMessages.password_confirmation[0]}}</div>
              </div>
              <button
                type="button"
                class="btn btn-success mr-2"
                @click="confirmUpdate('password', 'Thay đổi mật khẩu')"
              >Lưu thay đổi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
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
      },
      validateMessages: {},
      serverUri: process.env.VUE_APP_BASE_SERVER_URL
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
          this.userInfos = res.data.result_data;
          this.showSuccessDiaglog();
          this.validateMessages = {}
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);
          this.validateMessages = err.response.data.errors
        });
    },
    confirmUpdate(type, message) {
      Swal.fire({
        title: "Xác nhận",
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "CANCEL",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6"
      }).then(result => {
        if (result.value) {
          switch (type) {
            case "avatar":
              this.$refs.avatar.click();
              break;
            case "password":
              this.updatePassword();
              break;
            case "infos":
              this.updateProfile();
              break;
            default:
              break;
          }
        }
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
          this.userInfos = res.data.result_data;
          this.showSuccessDiaglog();
          this.validateMessages = {}
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);
          this.validateMessages = err.response.data.errors
        });
    },
    uploadAvatarEvent($event) {
      let file = this.$refs.avatar.files[0];
      console.log(file);
      let formData = new FormData();
      formData.append("avatar", file);
      request
        .post("/user/update-profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          this.userInfos = res.data.result_data;
          this.showSuccessDiaglog();
          this.validateMessages = {}
        })
        .catch(err => {
          console.log(err);
        });
    },
    showSuccessDiaglog() {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Thông tin cập nhật thành công!",
        showConfirmButton: false,
        timer: 2000
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
  grid-template-columns: 25% 75%;
}

button.btn-upload-avatar {
  margin-top: 10%;
  padding: 6.4px 5px;
  color: #212529;
  background-color: #dde4eb;
  border-color: #dde4eb;
}

img.avatar-img {
  width: 120px;
}
.text-danger {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
}
</style>
