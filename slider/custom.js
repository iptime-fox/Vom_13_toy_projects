// 1. 슬라이더 이동(일정 시간 동안 자동)
// 2. 마우스 오버 시 슬라이더 기능 멈추고, 마우스 아웃 시 슬라이더 기능 시작
// 3. 네비게이터 클릭 시 슬라이더 이동
// 4. 인디케이터 : * 해당 슬라이더 부분의 인디케이터 활성화 * 인디케이터 클릭 시 해당 위치로 이동

// 요소 선택
const slWrapper = document.querySelector('.slider-wrapper');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('img');

// 초기화 변수
let currentIdx = 0;
let timer;

// 슬라이더 기능 함수 정의
const startSlider = (eq) => {
  console.log(eq);
  imgs.style.left = -100 * eq + '%';
  currentIdx = eq;
};

// 특정 시간 간격으로 슬라이더 이동 함수 정의
const startTimer = () => {
  timer = setInterval(() => {
    const sliderLoop = (currentIdx + 1) % img.length;
    //  (0 + 1) % 4 = 1
    //  (1+1) % 4 = 2
    //  (2+1) % 4 = 3
    //  (3+1) %4 = 0
    startSlider(sliderLoop);
  }, 2000);
};

// 슬라이더 멈추는 함수
const stopTimer = () => {
  clearInterval(timer);
};

// 마우스를 오버 했을때 멈춤
slWrapper.addEventListener('mouseenter', () => {
  stopTimer();
});

// 마우스 아웃 했을때 다시 실행
slWrapper.addEventListener('mouseleave', () => {
  startTimer();
});

// 특정 시간 간격으로 슬라이더 이동 함수 호출
startTimer();

// 슬라이더 기능 함수 호출
// startSlider(0);
