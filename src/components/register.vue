<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-3">
        <h3>用户注册</h3>
          <form role="form">
            <div class="form-group">
              <label for="username">用户名</label>
              <input type="text" class="form-control" id="username" placeholder="请输入用户名" v-model="username">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" id="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="form-group">
              <label for="password">再输入一次密码</label>
              <input type="password" class="form-control" id="password" placeholder="请输入密码" v-model="passwordconfirm">
            </div>
            <div class="form-group">
              <label for="email">电子邮箱</label>
              <input type="email" class="form-control" id="email" placeholder="请输入电子邮箱" v-model="email">
            </div>
            <button @click="register" class="btn btn-primary btn-md">注册</button>
            <button @click="reset" class="btn btn-danger btn-md">重置</button>
          </form>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .btn {
    margin-right: 15px
  }
</style>

<script>
  export default {
    data() {
      return{
        username: null,
        password: null,
        passwordconfirm: null,
        email: null
      }
    },
    methods: {
      register: function () {
        if (this.password !== this.passwordconfirm) {
          alert('两次密码不一致！')
        } else if(this.username !== null && this.password !== null && this.email !== null) {
          this.password = $.md5(this.password)
          Vue.http.post('/api/register', {username: this.username, password: this.password, email: this.email}).then((response) => {
            if (response.data === 'success') {
              alert('注册成功！')
              this.$router.go({ name: 'booklist' })
            } else if (response.data === 'fail') {
              alert('注册失败！')
            } else if (response.data === 'duplicated') {
              alert('用户名重复！')
            }
          },
          (response) => {
          })
        }
      },
      reset: function () {
        this.username = null,
        this.password = null,
        this.passwordconfirm = null,
        this.email = null
      }
    }
  }  
</script>