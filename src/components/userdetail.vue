<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-4">
        <h3>用户信息</h3>
        <table class="table table-hover table-striped table-bordered">
          <tr>
            <td>用户ID</td>
            <td>{{userid}}</td>
          </tr>
          <tr>
            <td>用户名</td>
            <td>{{username}}</td>
          </tr>
          <tr>
            <td>电子邮箱</td>
            <td>{{email}}</td>
          </tr>
          <tr>
            <td>注册时间</td>
            <td>{{registertime}}</td>
          </tr>
        </table>
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
import Vue from 'vue'
export default {
  data() {
    return{
      userid: null,
      username: null,
      email: null,
      registertime: null
    }
  },
  route: {
    data: function (transition) {
      Vue.http.get('/api/userdetail&userid='+this.$route.params.id).then((response) => {
        this.userid = (JSON.parse(response.data)[0].userid),
        this.username = (JSON.parse(response.data)[0].username),
        this.email = (JSON.parse(response.data)[0].email),
        this.registertime = (JSON.parse(response.data)[0].register_time)
      },
      (response) => {
      })
    }
  }
}
</script>