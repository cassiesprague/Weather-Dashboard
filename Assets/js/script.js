// Open Weather Map link: https://openweathermap.org/forecast5
// Open Weather Map API key: daf8f38305e86af0479c8ba66ec63552


//Below are the variables
const APIKey: "daf8f38305e86af0479c8ba66ec63552";


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
var searchCity = document.getElementsById("search-input");
function getCityLocation(city){
    var geoURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "city" + "&appid=" + "APIKey"
    fetch(geoURL).then(function(response){
        return response.json()
    }) .then(function(data){
        console.log(data)
        getWeather(data[0].latitude,data[0].longitude)
    })
}

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the 
// humidity, and the wind speed


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the 
// temperature, the wind speed, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city