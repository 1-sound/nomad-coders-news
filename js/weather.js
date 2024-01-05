const API_KEY = "596fe98026e576ceb62aebaae2b7fd4e"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherDiv = document.querySelector("#weather");
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        temp.innerText = `${data.main.temp}°C`;

        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        const iconImage = document.createElement("img");
        iconImage.src = iconUrl;
        iconImage.id = "weatherIcon";
        weatherDiv.appendChild(iconImage);
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);