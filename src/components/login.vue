<template>
	<div class='login'>
		<h1>江苏省放射诊疗设备管理系统</h1>
		<label for="account">账号</label><input type="text" placeholder="请输入账号" id='account' v-model='username'/><br/>
		<label for="password">密码</label><input type="password" name="" placeholder="请输入密码" id='password' v-model='password'/><br/>
		<button type="button" @click='login()'>登录</button>
	</div>
</template>

<script>
import Ajax from "./ajax/ajax_service";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log(this.getData);
      let data = {
        username: this.username,
        password: this.password
      };
      Ajax.login(data)
        .then(res => {
          console.log(res.data.data);
          if (res.data.code === 200) {
            this.$root.userinfo = res.data.data;
            localStorage.setItem("admin", JSON.stringify(res.data.data));
            localStorage.setItem("Traintoken", res.data.data.token);
            this.$router.push("/backStage");
          }
        })
        .catch(err => console.log(err));
    },
    
  }
};
</script>

<style scoped>
.login {
  padding: 2rem;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  border: 1px solid;
  border-radius: 1rem;
}
</style>