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
    }
  },
  ready: function () {
    $('#recordTable').bootstrapTable({
      striped: true,
      method: "get", 
      url: "/api/borrowhistory&userid="+this.$route.params.id,
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