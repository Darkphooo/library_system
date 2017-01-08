<template> 
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" v-link="{path: '/'}">图书管理系统</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li v-bind:class="[{ active: (isActive === 'booklist') }]" ><a @click.prevent="booklist">图书查询</a></li>
          <li class="dropdown" v-bind:class="[{ active: (isActive === 'class') }]" >
            <a class="dropdown-toggle" data-toggle="dropdown">分类浏览<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a @click.prevent="classsearch(id)">小说</a></li>
            </ul>
          </li>
          <li v-bind:class="[{ active: (isActive === 'borrow') }]" ><a @click.prevent="borrow" v-if="(islogin === true)">图书借阅</a></li>
          <li v-bind:class="[{ active: (isActive === 'return') }]" ><a @click.prevent="return" v-if="(islogin === true)">图书归还</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-bind:class="[{ active: (isActive === 'register') }]"  v-if="(islogin === false)"><a @click.prevent="register">注册</a></li>
          <li class="dropdown" v-if="(islogin === false)">
            <a class="dropdown-toggle" data-toggle="dropdown">登录<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <form class="navbar-form navbar-left" role="login">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="用户名">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="密码">
                </div>
                <button @click.prevent="login" class="btn btn-success btn-block">登录</button>
              </form>
            </ul>
          </li>
          <li class="dropdown" v-if="(islogin === true)">
            <a class="dropdown-toggle" data-toggle="dropdown">{{username}}<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a @click.prevent="detail">用户资料</a></li>
              <li><a @click.prevent="record">借阅记录</a></li>
              <form class="navbar-form" role="logout">
                <button @click.prevent="logout" class="btn btn-danger btn-block">注销</button>
              </form>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .form-control {
    margin-bottom: 5px;
  }
  a {
    cursor: pointer;
  }
</style>

<script>
export default {
  data () {
    return{
      islogin: false,
      username: '测试用户',
      userid: 1
    }
  },
  ready: function () {
    if (sessionStorage.getItem('username') !== null) {
      this.islogin = true
    }
  },
  computed: {
    isActive () {
      if (this.$route.matched[1]) {
        return this.$route.matched[1].handler.name
      }
    }
  },
  methods: {
    login: function () {
      this.islogin = true
      sessionStorage.setItem('username', this.username)
    },
    logout: function () {
      this.islogin = false
      sessionStorage.removeItem('username')
    },
    booklist: function () {
      this.$router.go({ name: 'booklist' })
    },
    classsearch: function (id) {
      this.$router.go({ name: 'class', params: { id: id }})
    },
    borrow: function () {
      this.$router.go({ name: 'borrow' })
    },
    return: function () {
      this.$router.go({ name: 'return' })
    },
    register: function () {
      this.$router.go({ name: 'register' })
    },
    record: function () {
      this.$router.go({ name: 'record', params: { id: this.userid }})
    },
    detail: function () {
      this.$router.go({ name: 'detail', params: { id: this.userid }})
    }
  }
}  
</script>