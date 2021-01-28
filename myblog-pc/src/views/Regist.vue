<template>
  <div class="container">
    <div class="regist-form">
      <h3>用户注册</h3>
      <p>用户名：<input type="text" name="username" id="username" v-model="username" @change="onChange"/><span id="info">{{ info }}</span></p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>昵称：<input type="text" name="nickname" v-model="nickname" /></p>
      <p><button id="btn-regist" @click="doRegist">注册</button></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inpVal: "",
      username: "",
      password: "",
      nickname: "",
      info: "",
    };
  },
  methods: {
    onChange(e) {
      var { value } = e.target;
      this.inpVal = { value };
      console.log(this.inpVal.value);
      this.$http.get("/user/checkUser", {
        params: {
          inpVal:this.inpVal.value
        },
      }).then((res) => {
        let { state } = res.data;
        console.log(res.data);
        if (state == "success") {
          this.info = "ok";
        } else if(state=='fail') {
          this.info = "用户名已存在";
        }
      });
    },
    doRegist() {
      if(this.info=='ok'){
        this.$http
        .post("/user/regist", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        })
        .then((res) => {
          let { state } = res.data;
          if (state == "success") {
            alert("注册成功！");
            this.$router.push("/login");
          } else {
            alert("注册失败!");
          }
        });
      }else{
        alert('用户名存在，请重新输入')
      } 
    },
  },
};
</script>

<style scoped>
.regist-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}

.regist-form p {
  padding: 20px 0;
}

#btn-regist {
  width: 70px;
}
</style>
