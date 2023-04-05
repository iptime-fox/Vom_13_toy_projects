$(function () {
  $('.btns button').on('click', function () {
    $('.btns button').removeClass('active');
    $(this).addClass('active');

    const idx = $(this).index();

    $('.panel').css('display', 'none');
    $('.panel').eq(idx).css('display', 'block');
  });
});
