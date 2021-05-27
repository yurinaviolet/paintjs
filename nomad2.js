const title = document.querySelector("#title");
title.innerHTML = "Fuck you HTML";
console.dir(title);
title.style.color = "red";
//위 console.log(title)에서 title은 DOM (Document Object Module) 자바스크립트가 html의 모든 요소를 가져와서 객체로 바꾸는 기능

console.dir(document);
document.title = "I own you now";

function handleResize(){
    console.log("I have been resized");
}
window.addEventListener("resize", handleResize);
