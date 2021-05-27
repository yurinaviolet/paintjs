const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image(); // new Image() 와 document.createElement('image') 는 같은 기능
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
/* - Javascript에 math(수학)란 모듈이 있다.
   - Math.random 랜덤 숫자 생성
   - Math.floor(바닥)→ 버림
   - Math.ceil(천장)→ 올림 */
  const number = Math.floor(Math.random() * IMG_NUMBER); 
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();