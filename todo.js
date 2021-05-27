const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id); //parseInt는 string을 숫자로 바꿔준다
  });
  toDos = cleanToDos
  saveToDos();
  //filter는 forEach와 같이 각각의 아이템과 같이 실행 된다. filter는 () 안의 함수가 ture를 return하는 아이템들이 있는 배열을 새로 만든다 
  //즉, filter는 배열의 모든 아이템을 가지고 함수를 실행하고 그 중에서 true인 아이템들만 가지고 새로운 array를 만든다
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //localStorage엔 js의 Object 데이터를 저장할수 없다. 오직 string만 저장 할 수 있다. JSON.stringify(~~)는 js의 데이터를 string으로 바꿔준다. JSON = 'JavaScript Object Notation'
}
      
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "☠️";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //parse는 sting화 되어 localstorage에 저장된 js의 object 데이터를 JSON으로 다시 분석해서 js의 object 데이터로 바꿔준다.
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });//forEach는 배열에 담겨있는 것들 각각에 한번씩 ()안의 함수를 실행 시켜 준다.            
  } 
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
