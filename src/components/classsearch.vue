<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3>分类查询</h3>
        <table id="bookTable"></table>
        <div class="row">
          <div class="col-xs-4">
            <div class="form-group">
              <button class="btn btn-primary btn-md" @click="borrow" v-if="islogin">借阅选中书籍</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .form-group {
    margin-top: 10px;
  }
</style>

<script>
export default {
  data() {
    return{
      islogin: false,
      bookid: null,
      bookname: null,
      publisher: null,
      author: null
    }
  },
  ready: function () {
    var vs = this
    if (sessionStorage.getItem('username') !== null) {
      this.userid = sessionStorage.getItem('userid'),
      this.username = sessionStorage.getItem('username'),
      this.islogin = true
    }
    var classlist = JSON.parse(sessionStorage.getItem('classlist'))
    $('#bookTable').bootstrapTable({
      striped: true,
      method: "get", 
      url: "/api/booklistclass&classid="+vs.$route.params.id,
      search: true,
      sidePagination: 'client',
      pageNumber: 1,
      pageSize: 20,
      queryParamsType : "undefined",
      queryParams: function queryParams(params) {
        var param = {
        };
        return param;
      },
      columns: [{
        radio: true
      }, {
        field: 'bookid',
        title: '书籍编号'
      }, {
        field: 'bookname',
        title: '书籍名称'
      }, {
        field: 'publisher',
        title: '出版社'
      }, {
        field: 'author',
        title: '作者'
      }, {
        field: 'classid',
        title: '分类',
        formatter: classFormatter
      }, {
        field: 'storage_time',
        title: '入库时间'
      }, {
        field: 'storage_num',
        title: '库存数量'
      }]
    });
    function classFormatter (value) {
      var classname
      $(classlist).each(function (index, element) {
        if (value === element.classid) {
          classname = element.classname
        }
      })
      return classname
    }
  },
  methods: {
    borrow: function () {

    }
  }
}  
</script>