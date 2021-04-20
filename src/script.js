function showTemperature (response) {
let cityElement = document.querySelector("#city");
let temperatureElement = document.querySelector("#temperature");
let windElement = document.querySelector("#wind");
let humidityElement = document.querySelector("#humidity");
cityElement.innerHTML = response.data.name;
temperatureElement.innerHTML = Math.round(response.data.main.temp);
windElement.innerHTML =  response.data.wind.speed;
humidityElement.innerHTML = response.data.main.humidity
}
let apiKey = "126c20b90ebb15582267fe5043978b84";
let city = document.querySelector("#enterCity.value");
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);