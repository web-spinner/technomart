$(document).ready(function(){
  let buttonOpen = $('#btn-open-write');
  let buttonClose = $('#btn-close-write');
  let popupWrite = $('.popup-write');

  buttonClose.click(function(){
    popupWrite.hide();
  });

  buttonOpen.click(function(){
    popupWrite.show();
  });
});
