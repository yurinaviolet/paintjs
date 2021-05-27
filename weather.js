const weather = document.querySelector(".js-weather");

const COORDS = 'coords';

const API_KEY = "a06b6ea7a63885a7fa864fefe22260f3";
// API는 다른 서버로부터 손쉽게 데이터(only)를 가져올 수 있는 수단이다. 특정 웹사이트로부터 데이터를 얻거나 컴퓨터끼리 소통하기 위해 고안되었다.

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response) {
    return response.json()
  }).then(function(json) {  //then은 전 단계에서 정보를 받거나 프로세스 수행을 완료
                            //할때까지 기다리는 기능
      const TEMP = json.main.temp;
      const place = json.name;
      weather.innerText =`${TEMP} ℃ @ ${place}`;
  })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude, // 객체에 변수의 이름과 객체의 key의 이름을 같게 저장할 때에는
    longitude // <--요렇게 할수 있다 
  };          // = latitude: latitude,
              //   longitude: longitude
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}            

function handleGeoError() {
  alert(`cant access geolocation`);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadcoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null) {
    askForCoords();
  }
  else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude); 
  }
}

function init() {
  loadcoords();
}

init();