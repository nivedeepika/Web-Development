// Function to fetch weather data from OpenWeatherMap API
async function getWeather() {
    const apiKey = '084af31ea8b95e8ef0e0a9040458c5a1'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === '404') {
            // Handle city not found error
            document.getElementById('weatherInfo').innerHTML = '<p>City not found. Please enter a valid city name.</p>';
        } else {
            // Display weather information
            const weatherInfo = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
