// 1. 버튼 클릭 시 활성화
// 2. 버튼 클릭 시 해당 이미지 보여주고 나머지는 안보임
// 2-1 속성값을 이용한 필터링
// 2-2 filter 메서드를 이용한 필터링

// 버튼 요소 선택
const filterBtn = document.querySelectorAll('.filter-btn');
// 이미지 요소 선택
const filterImg = document.querySelectorAll('.filter-image');

// 버튼 활성화 함수 정의
const activateBtn = (e) => {
  const targetBtn = e.currentTarget; //클릭 지정 요소 저장
  // const selectedData = targetBtn.textContent.toLowerCase();
  const selectedAttr = targetBtn.getAttribute('data-filter'); // 클릭 요소 카테고리 문자 저장
  // console.log(selectedAttr, selectedData);

  /********** 속성값을 이용한 필터링 ************/
  // filterImg.forEach((image) => {
  //   image.classList.add('hide'); // 버튼 클릭 시 초기 모든 이미지 요소에 hide 클래스 추가하여 가려줌
  //   setTimeout(() => {
  //     const imagesAttr = image.getAttribute('data-filter'); // 이미지에 있는 데이터 필터 속성값 지정
  //     if (imagesAttr === selectedAttr || selectedAttr === 'all') {
  //       // all을 클릭 : 선조건은 거짓이고 후조건은 참 -> 모든 이미지에 아래 코드 실행
  //       // bag을 클릭 : 기존에 hide 클래스 모두 삭제 -> selectedAttr과 imagesAttr이 같은 요소에 아래 코드 실행
  //       image.classList.remove('hide');
  //       image.classList.add('show');
  //     } else {
  //       // selectedAttr과 imagesAttr이 다른 요소에 hide 클래스 추가 -> 기존에 있던 show 클래스 삭제
  //       image.classList.add('hide');
  //       image.classList.remove('show');
  //     }
  //   }, 100);
  // });

  /*********** filter값을 이용한 필터링 ************/
  Array.from(filterImg).filter((i) => {
    i.classList.add('hide');
    // console.log(
    //   i.children[0].children[0].getAttribute('src').includes(selectedAttr)
    // );
    setTimeout(() => {
      if (
        i.children[0].children[0].getAttribute('src').includes(selectedAttr) ||
        selectedAttr === 'all'
      ) {
        i.classList.remove('hide');
        i.classList.add('show');
      } else {
        i.classList.add('hide');
        i.classList.remove('show');
      }
    }, 100);
  });

  filterBtn.forEach((btn) => {
    btn.classList.remove('active');
  }); // 버튼 전체의 active 클래스 삭제

  targetBtn.classList.add('active'); //클릭한 버튼 요소에 active 클래스 추가
};
// 버튼 클릭 시 함수 호출
filterBtn.forEach((btn) => {
  btn.addEventListener('click', activateBtn);
});
