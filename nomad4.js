
//&&는 피연산자 and 이고 양 쪽 모두 true 이어야 true
if (29 > 3 && "ㄴoqnfdl" === "woqnfdl"){
  console.log("fuck");  
}
else if (30 > 40){
  console.log("hi");
}
else {
  console.log("suck");
}

// ||는 피연산자 or 이다 둘중 하나만 true 여도 true
if (29 > 3 || "ㄴoqnfdl" === "woqnfdl"){
  console.log("fuck");  
}
else if (30 > 40){
  console.log("hi");
}
else {
  console.log("suck");
}

const age = prompt ("how old are you?");
  
  if (age >= 19 && age <= 23){
    console.log("you can drink but you should not");
  }
  else if (age > 24) {
    console.log("hurray");
  }
  else {
    console.log("fuck, get out here");
  }
