// Define your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather information
async function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Check if the API returned an error message
        if (data.cod && data.cod !== 200) {
            throw new Error(data.message);
        }

        // Extract relevant weather information
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        
        // Log the weather information
        console.log(`Weather in ${city}: ${weatherDescription}, Temperature: ${temperature}°C, Humidity: ${humidity}%`);
    } catch (error) {
        console.error('Error fetching weather:', error.message);
    }
}

// Example usage: fetch weather information for a specific city
fetchWeather('London');
