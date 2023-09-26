const input = document.querySelector('#search');
const searchButton = document.querySelector('#search-button');
const degree = document.querySelector(".deg");
const locationName = document.querySelector("#country");
const temp = document.querySelector('#temp');
const weather = document.querySelector('#weather');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const precipitation = document.querySelector('#precipitation');

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=065313054d594883b4b134801232109&q=${cityName}&aqi=yes`);

    return await promise.json();
}


searchButton.addEventListener('click', async () => {
    const cityName = input.value;
    if (cityName === '')
        return;
    const result = await getData(cityName);

    // console.log(result);

    locationName.innerHTML = result.location.name;
    temp.innerHTML = result.current.temp_c;
    weather.innerHTML = result.current.condition.text;
    humidity.innerHTML = result.current.humidity + '%';
    windSpeed.innerHTML = result.current.wind_kph + 'km/h';
    precipitation.innerHTML = result.current.precip_mm + '%';

    
    degree.addEventListener('click', () => {
        if(degree.innerHTML === '°C') {
            temp.innerHTML = result.current.temp_f;
            degree.innerHTML = '°F';
        }
        else {
            temp.innerHTML = result.current.temp_c;
            degree.innerHTML = '°C'
        }
    })
});

// document.addEventListener('DOMContentLoaded', function () {

// });
