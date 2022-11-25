const lat = "43.613499";
const lon = "-116.203453";
const APIKEY= "5be535fa5e3977d7f2980c18ef561e11";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        showWeather(jsObject);
    });
// windchill
function showWeather(obj) {
    let tempobj = document.querySelector("#temperature");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");
    let weathericon = document.querySelector("#weathericon"); 
    let figurecaption = document.querySelector('figcaption');

    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

    let windchillmsg = "";
    let temp = obj.main.temp;
    let windspeed = obj.wind.speed;

    if (temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16)));
        windchillmsg = `${chill}&deg; F`;
    }

    tempobj.textContent = Math.round(temp);
    windspeedobj.textContent = Math.round(windspeed);
    windchillobj.innerHTML = windchillmsg;
    weathericon.setAttribute("src", iconURL);
    weathericon.setAttribute("alt", obj.weather[0].description);
    figurecaption.textContent = obj.weather[0].main;
}
// setwindchill(49, 10);