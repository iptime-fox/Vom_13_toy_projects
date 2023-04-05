// 1. 45개 숫자 추출

// 배열 만드는 방법
// new Array() : https://stonefree.tistory.com/50

const candidate = new Array(45).fill().map((v, idx) => {
  return idx + 1; // 로또는 0이 없어서 +1 해야함
});

// 2. 6개 숫자 추출
// splice 메서드 : https://www.freecodecamp.org/korean/news/javascript-splice-method/

const shuffle = [];
for (let i = candidate.length; i > 0; i--) {
  // 3. 45이내 무작위 번호 추출
  const random = Math.floor(Math.random() * candidate.length);
  // 4. 난수번째 하나의 숫자 삭제
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  // 5. 난수 배열 요소 중 0번째 요소 추출하여 빈 배열에 추가
  shuffle.push(value);
}
// sort 메서드 : https://hianna.tistory.com/409

// 6. 6개 숫자 추출하여 정렬
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
// 7. 보너스 숫자 추출
const bonus = shuffle[6];
// 8. DOM요소 선택
const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

// 9. 6개 숫자 1초 간격으로 출력
for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    // const ballEl = document.createElement('div');
    // ballEl.className = 'ball';
    // ballEl.textContent = winBalls[i];
    // $result.appendChild(ballEl);
    drawBall(winBalls[i], $result);
  }, i * 1000);
}

// 10. 보너스 숫자 출력
setTimeout(() => {
  // const ballEl = document.createElement('div');
  // ballEl.className = 'ball';
  // ballEl.textContent = bonus;
  // $bonus.appendChild(ballEl);
  drawBall(bonus, $bonus);
}, 6000);

// 11. 요소 생성 및 출력 별도 함수로 리펙토링
function drawBall(n, p) {
  const ballEl = document.createElement('div');

  // 12. 번호별 공 색상 구분
  if (n > 0 && n <= 10) {
    ballEl.style.backgroundColor = 'yellow';
  } else if (n > 10 && n <= 20) {
    ballEl.style.backgroundColor = 'skyblue';
  } else if (n > 20 && n <= 30) {
    ballEl.style.backgroundColor = 'lightcoral';
  } else if (n > 30 && n <= 40) {
    ballEl.style.backgroundColor = 'lightgray';
  } else if (n > 40 && n <= 45) {
    ballEl.style.backgroundColor = 'lightgreen';
  }

  ballEl.className = 'ball';
  ballEl.textContent = n;
  p.appendChild(ballEl);
}
