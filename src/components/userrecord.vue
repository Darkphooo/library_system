<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3>借阅记录</h3>
        <h5>{{username}}</h5>
        <table id="recordTable"></table>
      </div>
    </div>
  </div>
</template>

<style lang="less">
</style>

<script>
  export default {
    data() {
      return{
        username: ''
      }
    },
    ready: function () {
      $('#recordTable').bootstrapTable({
        striped: true,
        // sidePagination: client,
        // pageNumber: 1,
        // pageSize: 20,
        columns: [{
          field: 'recordid',
          title: '记录编号'
        }, {
          field: 'bookid',
          title: '书籍编号'
        }, {
          field: 'bookname',
          title: '书籍名称'
        }, {
          field: 'borrow_time',
          title: '借阅时间'
        }, {
          field: 'overdue',
          title: '到期时间'
        }, {
          field: 'return_time',
          title: '归还时间'
        }, {
          field: 'isreturn',
          title: '是否归还',
          formatter: isreturnFormatter
        }],
        data: [{
          recordid: 1,
          bookid: 1,
          bookname: '计算机网络',
          borrow_time: '2017-01-04',
          overdue: '2017-02-04',
          return_time: '2017-01-06',
          isreturn: false
        }, {
          recordid: 2,
          bookid: 1,
          bookname: '计算机网络',
          borrow_time: '2017-01-01',
          overdue: '2017-02-01',
          return_time: '2017-01-04',
          isreturn: true
        }],
      }); 
      function isreturnFormatter (value) {
        if (value === true) {
          return '是'
        } else if (value === false) {
          return '否'
        }
      }
    }
  }  
</script>