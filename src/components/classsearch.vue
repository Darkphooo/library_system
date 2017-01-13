<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3>分类查询</h3>
        <table id="bookTable"></table>
        <div class="row">
          <div class="col-xs-4">
            <div class="form-group">
              <button class="btn btn-primary btn-md" @click="borrow" v-if="islogin">借阅选中图书</button>
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
import Vue from 'vue'
export default {
  data() {
    return{
      islogin: false,
      userid: null,
      username: null,
      bbookid: null,
      record: [],
      check: null
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
      this.bbookid = $('#bookTable').bootstrapTable('getSelections')[0].bookid
      this.record = JSON.parse(sessionStorage.getItem('record'))
      if (this.record.length === 0) {
        this.check = true
      } else {
        for (var i = 0; i < this.record.length; i ++) {
          if (this.bbookid === this.record[i].bookid) {
            this.check = false
            break
          } else {
            this.check = true
          }
        }
      }
      if (this.check === true) {
        Vue.http.post('/api/borrowbook', {userid: this.userid, bookid: this.bbookid}).then((response) => {
          if (response.data === 'success') {
            alert('借书成功！')
            location.reload()
          } else if (response.data === 'fail') {
            alert('借书失败！')
          } else if (response.data === 'nomore') {
            alert('该书已借完！')
          } else if (response.data === 'reach the upper limit') {
            alert('已达到借书上限！')
          }
        },
        (response) => {
        })
      } else if (this.check === false) {
        alert('您已借过相同的书籍')
      }
    }
  }
}  
</script>