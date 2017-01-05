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
        <a class="navbar-brand" href="#">图书管理系统</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">首页</a></li>
          <li><a href="#">图书查询</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">分类浏览<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">小说</a></li>
            </ul>
          </li>
          <li><a href="#" v-if="(islogin === true)">图书借阅</a></li>
          <li><a href="#" v-if="(islogin === true)">图书归还</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">注册</a></li>
          <li class="dropdown" v-if="(islogin === false)">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">登录<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <form class="navbar-form navbar-left" role="login">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="用户名">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="密码">
                </div>
                <button type="submit" class="btn btn-success btn-block">登录</button>
              </form>
            </ul>
          </li>
          <li class="dropdown" v-if="(islogin === true)">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{username}}<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">借阅记录</a></li>
              <form class="navbar-form" role="logout">
                <button type="submit" class="btn btn-danger btn-block">注销</button>
              </form>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<style lang="less">
  .form-control {
    margin-bottom: 5px;
  }
</style>

<script>
export default {
  data() {
    return{
      islogin: false,
      username: '测试用户'
    }
  },
  ready: function () {
    $('li.dropdown').mouseover(function() {   
     $(this).addClass('open');
    }).mouseout(function() {
      $(this).removeClass('open');
    });  
  }
}  
</script>