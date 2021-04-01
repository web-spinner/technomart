import pagination from "paginationjs";

$('#pagination-container').pagination({
  dataSource: [1, 2, 3],
  pageSize: 1,
  autoHidePrevious: true,
  autoHideNext: true,
  prevText: 'Предыдущая',
  nextText: 'Следующая',
  classPrefix: 'pagination',
  className: 'pagination',
  ulClassName: 'pagination-list',
  activeClassName: 'pagination-active',
  callback: function(data, pagination) {
    //var html = template(data);
    //$('#data-container').html(html);
  }
})
