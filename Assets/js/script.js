// Open Weather Map link: https://openweathermap.org/forecast5
// Open Weather Map API key: daf8f38305e86af0479c8ba66ec63552


//Below are the variables
//The link below is a reference I used to help with the js for this weather dashboard
//https://www.youtube.com/watch?v=GXrDEA3SIOQ
const APIKey: "daf8f38305e86af0479c8ba66ec63552";
var button = document.querySelector('#search-button')
var input = document.querySelector('#search-input')
var recentSearches = document.querySelector('#recent-searches')


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value+'&appid=daf8f38305e86af0479c8ba66ec63552')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("Invalid City Name"))
})




// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the 
// humidity, and the wind speed


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the 
// temperature, the wind speed, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city