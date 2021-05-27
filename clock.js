const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  //ternary operator 삼항연산자 : 작은 if 라고 생각하면 쉽다 ?는 (if) :는 (else)에 해당한다 ex) seconds가 10보다 작으면 0${seconds}를 실행 시킬것이고 아니면 seconds를 실행시킨다
}      

function init() {
  getTime();
  setInterval(getTime,1000);
}

init();