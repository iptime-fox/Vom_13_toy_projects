const imgWrapper = document.querySelector('section');

let images = [];
for (let i = 0; i < 200; i++) {
  images += `<img src ='img/pic${i}.jpg'>`;
}

imgWrapper.innerHTML = images;

imgWrapper.addEventListener('mousemove', function (e) {
  let x = e.offsetX;
  const screenW = document.body.offsetWidth;
  const imgTags = document.querySelectorAll('section img');

  imgTags.forEach((tag) => {
    tag.style.display = 'none';
  });

  const percent = Math.floor((x / screenW) * 200);
  // console.log(percent);

  imgTags[percent].style.display = 'block';
});
