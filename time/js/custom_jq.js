$(function () {
  // jquery framework wrapper

  /* ----------------------------------------
  타이머 시간 컨트롤
  ---------------------------------------- */
  setInterval(function () {
    const now = new Date();
    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    let newHr = 0;
    let newMin = 0;
    let newSec = 0;

    if (hr >= 10) {
      newHr = hr;
    } else {
      newHr = '0' + hr;
    }

    if (min >= 10) {
      newMin = min;
    } else {
      newMin = '0' + min;
    }

    if (sec >= 10) {
      newSec = sec;
    } else {
      newSec = '0' + sec;
    }

    $('p span').eq(0).text(newHr);
    $('p span').eq(1).text(newMin);
    $('p span').eq(2).text(newSec);
  }, 1000);

  /* ----------------------------------------
  테마 변경 버튼 컨트롤
  ---------------------------------------- */
  $('.modes li').on('click', function () {
    // modes li를 클릭 했을 때 실행되는 기능 코드
    const clnm = $(this).text();
    // alert(clnm);
    $('.modes li').removeClass('active');
    $(this).addClass('active');

    $('#wrap').removeClass();
    $('#wrap').addClass(clnm);
  });

  /* ----------------------------------------
  시간에 따른 테마 변경
  ---------------------------------------- */
  // 합성곱 && 둘다 true
  // 합성합 || 둘중 하나 true

  const now = new Date();
  const hr = now.getHours();

  if (hr >= 5 && hr < 11) {
    // console.log('아침');
    $('#wrap').removeClass();
    $('.modes li').removeClass();
    $('#wrap').addClass('morning');
    $('.modes li').eq(0).addClass('active');
  } else if (hr >= 11 && hr < 16) {
    // console.log('오후');
    $('#wrap').removeClass();
    $('.modes li').removeClass();
    $('#wrap').addClass('afternoon');
    $('.modes li').eq(1).addClass('active');
  } else if (hr >= 16 && hr < 20) {
    // console.log('저녁');
    $('#wrap').removeClass();
    $('.modes li').removeClass();
    $('#wrap').addClass('evening');
    $('.modes li').eq(2).addClass('active');
  } else {
    // console.log('밤');
    $('#wrap').removeClass();
    $('.modes li').removeClass();
    $('#wrap').addClass('night');
    $('.modes li').eq(3).addClass('active');
  }
});

$('input[name="checkbox_name"]').on('click', function () {
  if ($(this).is(':checked')) {
    $('#wrap').removeClass();
    $('.modes li').removeClass();
    $('#wrap').addClass('morning');
    $('.modes li').eq(0).addClass('active');
  } else {
    $('#wrap').removeClass();
    $('.modes li').removeClass();
    $('#wrap').addClass('evening');
    $('.modes li').eq(2).addClass('active');
  }
});
