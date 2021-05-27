console.log('Im working. Im javascript. Im beautiful. Im worth it.');
const a = 222;
//const 는 상수화 시키는 변수라 바꿀 수 없다 let 은 변수가 바뀌는 것을 허용 한다
const what = "woqnfdl";
console.log(what);
// float - 1.11 같은 소수점 숫자

//데이터를 정렬하는 두가지 방법 : array, object (배열, 객체)
const fuckYou = ["woqnfdl","ehfehfdl","tkafyddl",true,false];
console.log(fuckYou[1]);

/* 변수 woqnfdl 의 object 안에 array가 있고 array 안에 또 object가 있는 형태
   , 와 " " 를 빼먹지 말고 잘 써야한다 */
const woqnfdl = {
  name : "woqnfdl",
  sex : "male",
  age : 33,
  isHandsome : true,
  favMovies : ["Love letter","Titanic","Shining"],
  favFoods : [
    {
      name : "pizza",
      fatty : true
    },
    {
      name : "noodle",
      fatty : false
    }
  ]
}
console.log(woqnfdl.sex);
woqnfdl.sex = "female"
console.log(woqnfdl.sex);
console.log(woqnfdl);
console.log(woqnfdl.favFoods[0].fatty);
// woqnfdl 가 object이고 favFoods가 key 인것 처럼 console.log 에서 console 은 object이고 log는 key 이다.
console.log(console);

function sayHello(name, age){
  console.log("hello", name,"Im", age, "years old");
}
 sayHello("fuck", 14);
