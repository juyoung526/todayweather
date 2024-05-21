

let year = document.querySelector("#year"),
    today = document.querySelector("#today");

let cityBox = document.querySelectorAll(".cityBar button"),
    here = document.querySelector("#Here"),
    korea = document.querySelector("#korea"),
    japan = document.querySelector("#japan"),
    america = document.querySelector("#america"),
    europ = document.querySelector("#europ");

let place = document.querySelector("#place"),
    temp = document.querySelector("#temp"),
    iconImg = document.querySelector("#icon"),
    max = document.querySelector("#max"),
    min = document.querySelector("#min")

//시간
const now = new Date();
let Year = now.getFullYear();
let month = now.toLocaleString('en-US', { month: 'short' });

year.textContent = `${Year}`
today.innerText = `${month}`

//날씨

here.addEventListener("click", App)
App();
function App() {
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        getWeather(lat, lon);
    })
}
const getWeather = async (lat, lon) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=kr`);
    let data = await response.json();
    console.log(data);

    place.textContent = data.name;
    temp.textContent = data.main.temp + "˚C";
    max.textContent = data.main.temp_max;
    min.textContent = data.main.temp_min;
    icon = data.weather[0].icon;
    iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    iconImg.setAttribute('src', iconUrl);
}

korea.addEventListener("click", Ko)
japan.addEventListener("click", Ja)
america.addEventListener("click", Am)
europ.addEventListener("click", Eu)


function Ko() {

    let cityname = 'seoul';
    const getWeather = async (cityname) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname} &appid=${api_key}&units=metric&lang=kr`);
        let data = await response.json();
        console.log(data);

        place.textContent = data.name;
        temp.textContent = data.main.temp + "˚C";
        max.textContent = data.main.temp_max;
        min.textContent = data.main.temp_min;
        icon = data.weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        iconImg.setAttribute('src', iconUrl);
    }
    getWeather(cityname);
}

function Ja() {

    let cityname = 'tokyo';
    const getWeather = async (cityname) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname} &appid=${api_key}&units=metric&lang=kr`);
        let data = await response.json();
        console.log(data);

        place.textContent = data.name;
        temp.textContent = data.main.temp + "˚C";
        max.textContent = data.main.temp_max;
        min.textContent = data.main.temp_min;
        icon = data.weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        iconImg.setAttribute('src', iconUrl);
    }
    getWeather(cityname);
}

function Am() {

    let cityname = 'new york';
    const getWeather = async (cityname) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname} &appid=${api_key}&units=metric&lang=kr`);
        let data = await response.json();
        console.log(data);

        place.textContent = data.name;
        temp.textContent = data.main.temp + "˚C";
        max.textContent = data.main.temp_max;
        min.textContent = data.main.temp_min;
        icon = data.weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        iconImg.setAttribute('src', iconUrl);
    }
    getWeather(cityname);
}

function Eu() {

    let cityname = 'paris';
    const getWeather = async (cityname) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname} &appid=${api_key}&units=metric&lang=kr`);
        let data = await response.json();
        console.log(data);

        place.textContent = data.name;
        temp.textContent = data.main.temp + "˚C";
        max.textContent = data.main.temp_max;
        min.textContent = data.main.temp_min;
        icon = data.weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        iconImg.setAttribute('src', iconUrl);
    }
    getWeather(cityname);
}



//버튼
cityBox.forEach((item, index) => {
    item.addEventListener("click", function () {
        cityBox.forEach((item) => {
            item.classList.remove("on")
        })
        cityBox[index].classList.add("on")
    })
})