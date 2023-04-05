// 1. 요소 선택
const btns = document.querySelectorAll('#btns button');
const panels = document.querySelectorAll('.panel');
// const colors = ['lightgreen', 'lightblue', 'lightcoral'];

// 2. 함수 정의
function activeTabs(i) {
  btns.forEach((btn) => {
    btn.classList.remove('active');
    // btn.style.background = 'white';
    // btn.style.color = 'black';
    // btn.style.border = `1px solid ${colors[i]}`;
  });
  panels.forEach((panel) => {
    panel.style.display = 'none';
  });
  btns[i].classList.add('active');
  // btns[i].style.color = 'white';
  // btns[i].style.background = colors[i];
  panels[i].style.display = 'block';
  // panels[i].style.background = colors[i];
}

// 3. 함수 호출
btns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    activeTabs(idx);
  });
});
