<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-3">
        <h3>用户注册</h3>
          <form role="form">
            <div class="form-group">
              <label for="username">用户名</label>
              <input type="text" class="form-control" id="username" placeholder="请输入用户名" v-model="rUsername">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" id="password" placeholder="请输入密码" v-model="rPassword">
            </div>
            <div class="form-group">
              <label for="password">再输入一次密码</label>
              <input type="password" class="form-control" id="password" placeholder="请输入密码" v-model="rPasswordconfirm">
            </div>
            <div class="form-group">
              <label for="email">电子邮箱</label>
              <input type="email" class="form-control" id="email" placeholder="请输入电子邮箱" v-model="rEmail">
            </div>
            <div class="form-group">
              <span class="error">{{error}}</span>
            </div>
            <button @click.prevent="register" class="btn btn-primary btn-md">注册</button>
            <button @click.prevent="reset" class="btn btn-danger btn-md">重置</button>
          </form>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .btn {
    margin-right: 15px;
  }
  .error {
    color: red;
  }
</style>

<script>
import Vue from 'vue'
export default {
  data() {
    return{
      rUsername: null,
      rPassword: null,
      rPasswordconfirm: null,
      rEmail: null,
      error: null
    }
  },
  methods: {
    register: function () {
      if (this.rPassword !== this.rPasswordconfirm) {
        this.error = '两次密码不一致！'
      } else if(this.rUsername !== null && this.rPassword !== null && this.rEmail !== null) {
        this.rPassword = $.md5(this.rPassword),
        Vue.http.post('/api/register', {username: this.rUsername, password: this.rPassword, email: this.rEmail}).then((response) => {
          if (response.data === 'success') {
            alert('注册成功！')
            this.$router.go({ name: 'booklist' })
          } else if (response.data === 'fail') {
            this.error = '注册失败！'
          } else if (response.data === 'duplicated') {
            this.error = '用户名重复！'
          }
        },
        (response) => {
        })
      }
    },
    reset: function () {
      this.rUsername = null,
      this.rPassword = null,
      this.rPasswordconfirm = null,
      this.rEmail = null
    }
  }
}
</script>