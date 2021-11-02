$(document).ready(function() {
  $('.mobileMenu').click(function () {  // 按下行動版選單鈕, 就在body 新增 .open
    $('body').addClass('open');
  });

  $('.close_mobileMenu').click(function () {  // 按下行動版關閉鈕, 就在body 移除 .open
    $('body').removeClass('open');
  });
});