<template>
  <div class="changePassword">
    <header>
      <div class="changePasswordHeader">
        <div class="goback" id="changePasswordgoback" @click="goBack">
          <van-icon name="arrow-left" />修改密码
        </div>
      </div>
    </header>
    <div class="changePasswordContent">
      <van-cell-group>
        <van-field
          v-model="prePassword"
          required
          clearable
          label="原密码"
          placeholder="请输入原密码"
          @blur="CheckPrePassword(),comfirmPassword()"
        />

        <van-field
          v-model="newPassword"
          type="password"
          label="新密码"
          placeholder="请输入新密码"
          required
          @blur="comfirmPassword()"
        />
        <van-field
          v-model="confirmPassword"
          type="password"
          label="新密码"
          placeholder="请确认新密码"
          required
          @blur="comfirmPassword()"
        />
      </van-cell-group>
      <div class="footer">
        <p @click="submit">确认提交</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";

import { Decrypt, Encrypt } from "@/utils/Aes.js";

export default {
  name: "changePassword",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      prePassword: "",
      newPassword: "",
      confirmPassword: "",
      getPrePassword: "",
      isChangePassword: [0, 0]
    };
  },
  methods: {
    goBack() {
      this.$router.push("/index");
    },
    submit() {
      if (this.isChangePassword[0] && this.isChangePassword[1]) {
        console.log("原密码正确，可以修改");
        axios({
          url: "http://39.106.65.18:8080/user/updataPwd", // 后端的接口地址
          method: "get",
          params: {},
          data: {
            // prePassword: Encrypt(this.prePassword),
            newPassword: Encrypt(this.newPassword),
            id: window.sessionStorage.data
          },
          transformRequest: [
            function(data) {
              data = Qs.stringify(data);
              return data;
            }
          ],
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          dataType: "json"
        })
          .then(res => {
            console.log("连接成功"); // 这里多打印一句提示，只是为了更直观一点
            console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
            if (res.data == "modify succeed") {
              this.$notify({
                message: "修改成功！",
                color: "155,147,128",
                background: "rgb(237,232,104)"
              });
            } else {
              this.$notify({
                message: "未知错误，修改失败！",
                color: "155,147,128",
                background: "rgb(237,232,104)"
              });
            }
          })
          .catch(function(error) {
            console.log("连接失败"); // 作用同上
            console.log(error); // 如果连接失败，会抛出错误信息。
          });
      } else {
        this.$notify({
          message: "请确认填入的信息正确",
          color: "155,147,128",
          background: "rgb(237,232,104)"
        });
      }
    },
    CheckPrePassword() {
      axios({
        url: "http://39.106.65.18:8080/user/getUserById", // 后端的接口地址
        method: "get",
        params: {
          id: window.sessionStorage.data
        },
        data: {
          id: window.sessionStorage.data
        },
        transformRequest: [
          function(data) {
            data = Qs.stringify(data);
            return data;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        dataType: "json"
      })
        .then(res => {
          console.log("连接成功"); // 这里多打印一句提示，只是为了更直观一点
          console.log(res); // res 是后端回传的数据，如果连接成功，可以把res打印出来。
          this.getPrePassword = res.data[0].password;

          if (Encrypt(this.prePassword) == this.getPrePassword) {
            this.isChangePassword[0] = 1;
            console.log("原密码正确！");
          } else {
            this.$notify({
              message: "原密码错误！",
              color: "155,147,128",
              background: "rgb(237,232,104)"
            });
            this.isChangePassword[0] = 0;
          }
        })
        .catch(function(error) {
          console.log("连接失败"); // 作用同上
          console.log(error); // 如果连接失败，会抛出错误信息。
        });
    },
    comfirmPassword() {
      if (this.newPassword != "" && this.confirmPassword != "") {
        if (this.newPassword == this.confirmPassword) {
          this.isChangePassword[1] = 1;
        } else {
          this.isChangePassword[1] = 0;
          this.$notify({
            message: "两次输入的密码不一致",
            color: "155,147,128",
            background: "rgb(237,232,104)"
          });
        }
      }
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.changePassword {
  background-color: rgb(251, 251, 251);
  height: 100vh;
}
.changePasswordHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7.5vh;
  background-color: rgb(174, 227, 145);
  padding: 0 3vw 0 3vw;
}

p {
  margin: 0;
}

.goback {
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.changePasswordContent {
  /* min-height: 100vh; */

  padding: 0 0 0 0;
}

.van-skeleton__content h2,
h3 {
  margin: 0;
  padding: 0 5vw 0 5vw;
  text-align: left;
}

.van-skeleton__content h3 {
  margin: 5px 0 0 0;
  font-weight: 300;
}

.van-skeleton__avatar img {
  border-radius: 50%;
}

.footer {
  width: 100%;
  background-color: rgb(246, 179, 127);
  color: white;
  box-sizing: border-box;
}
.footer p {
  margin-top: 5rem;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 500;
  text-align: center;
}
</style>