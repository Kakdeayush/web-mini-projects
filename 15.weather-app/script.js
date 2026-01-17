const apiKey = "YOUR_API_KEY";

const searchBtn = document.getElementById("search");
const cityInput = document.getElementById("city");

const locationEl = document.getElementById("location");
const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("condition");
const humidityEl = document.getElementById("humidity");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") return alert("Please enter a city name");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    locationEl.textContent = `${data.name}, ${data.sys.country}`;
    tempEl.textContent = `Temperature: ${data.main.temp} °C`;
    conditionEl.textContent = `Condition: ${data.weather[0].description}`;
    humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
  } catch (error) {
    alert("Failed to fetch weather data");
  }
}
