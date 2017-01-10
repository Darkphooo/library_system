<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3>书籍归还</h3>
        <table id="returnTable"></table>
        <div class="row">
          <div class="col-xs-4">
            <div class="form-group">
              <button class="btn btn-primary btn-md" @click="return">归还选中书籍</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
</style>

<script>
import Vue from 'vue'
export default {
  data() {
    return{
      userid: null,
      username: null,
      rbookid: null
    }
  },
  route: {
    data: function (transition) {
      Vue.http.get('/api/returnlist&userid='+sessionStorage.getItem('userid')).then((response) => {
        sessionStorage.setItem('record', response.data)
      },
      (response) => {
      })
    }
  },
  ready: function () {
    Vue.http.get('/api/returnlist&userid='+this.userid).then((response) => {
      sessionStorage.setItem('record', response.data)
    },
    (response) => {
    })
    var vs = this
    if (sessionStorage.getItem('username') !== null) {
      this.userid = sessionStorage.getItem('userid'),
      this.username = sessionStorage.getItem('username'),
      this.islogin = true
    }
    $('#returnTable').bootstrapTable({
      striped: true,
      method: "get", 
      url: "/api/returnlist&userid="+vs.$route.params.id,
      search: true,
      clickToSelect: true,
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
    return: function () {
      this.rbookid = $('#returnTable').bootstrapTable('getSelections')[0].bookid,
      Vue.http.post('/api/returnbook', {userid: this.userid, bookid: this.rbookid}).then((response) => {
        if (response.data === 'success') {
          alert('还书成功！')
        } else if (response.data === 'fail') {
          alert('该书已还！')
        }
      },
      (response) => {
      })
    }
  }
} 
</script>