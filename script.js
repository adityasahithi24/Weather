const apiKey = ' https://home.openweathermap.org/'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const location = document.getElementById('location').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.getElementById('weather');
            weather.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Feels like: ${data.main.feels_like}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            const weather = document.getElementById('weather');
            weather.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}