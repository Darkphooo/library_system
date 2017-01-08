<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h3>书籍归还</h3>
        <table id="returnTable"></table>
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
      $('#returnTable').bootstrapTable({
        striped: true,
        // sidePagination: client,
        // pageNumber: 1,
        // pageSize: 20,
        columns: [{
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
          field: 'class',
          title: '分类',
          formatter: classFormatter
        }, {
          field: 'storage_time',
          title: '入库时间'
        }, {
          field: 'storage_num',
          title: '库存数量'
        }],
        data: [{
          bookid: 1,
          bookname: '计算机网络',
          publisher: '高等教育出版社',
          author: 'xxx',
          class: 1,
          storage_time: '2017-01-06',
          storage_num: '22'
        }, {
          bookid: 2,
          bookname: '线性代数与解析几何',
          publisher: '北京大学出版社',
          author: 'xx',
          class: 2,
          storage_time: '2017-01-06',
          storage_num: '11'
        }],
      });
      function classFormatter (value) {
        switch (value) {
          case 1: 
            return '教科书';
          case 2:
            return '小说'
        }
      }
    }
  }  
</script>