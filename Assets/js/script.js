// Open Weather Map link: https://openweathermap.org/forecast5
// Open Weather Map API key: daf8f38305e86af0479c8ba66ec63552

//Below is a list of all the videos I watched to help me make this weather dashboard
// https://www.youtube.com/watch?v=OE7kml0pigw
// https://www.youtube.com/watch?v=6trGQWzg2AI&t=2647s 
// https://www.youtube.com/watch?v=QEu8_5bYm-w&t=106s 
// https://www.youtube.com/watch?v=y9ZBHoUTWjY&list=PLAEoBV_GLyq4klW-2Pm75_5-r4oHhwqlm&index=3 
// https://www.youtube.com/watch?v=IfG4A8YfxsY 


//Below are the variables
const APIKey: 'daf8f38305e86af0479c8ba66ec63552';




// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
function searchCity() {
    var city = document.getElementById("cityInput").value;
    var searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    searches.push(city);
    localStorage.setItem("recentSearches", JSON.stringify(searches));
}

function displayRecentSearches() {
    var searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    console.log("Recent Searches:", searches);
}

displayRecentSearches();



// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the 
// humidity, and the wind speed





// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the 
// temperature, the wind speed, and the humidity





// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city