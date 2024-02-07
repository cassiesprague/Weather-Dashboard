var now = dayjs();
var currentDate = (now.format("MM/DD/YYYY"));
var city = "";
var citySearch = $("#city-search");
var citySearchButton = $("#city-search-button");

//Below clears localstorage
function deleteItems() {
    localStorage.clear();
}

//Below displays weather after clicking search button
citySearchButton.on("click", displayWeather);

//Below displays weather after running currentWeather function
function displayWeather(event) {
    event.preventDefault();
    if (citySearch.val().trim() !== "") {
        city = citySearch.val().trim();
        currentWeather(city);

        //Below is localstorage for searched cities
        var cityList = document.getElementById("city-list");
        cityList.textContent = "";

        var searchedCities = localStorage.getItem("visitedCities");
        if (searchedCities === null) {
            searchedCities = [];
        } else {
            searchedCities = JSON.parse(searchedCities);
        }
        searchedCities.push(city);

        var visitedCityNames = JSON.stringify(searchedCities);
        localStorage.setItem("visitedCities", visitedCityNames);

        //Below creates list items from cities saved in localstorage
        for (let i = 0; i < searchedCities.length; i++) {
            var list = document.createElement("li");
            list.setAttribute("class", "list-group-item");
            list.setAttribute("id", "city-link");
            list.textContent = searchedCities[i];
            cityList.appendChild(list);
        }
    }
}

//Below gets current weather for city and displays information in current weather card
function currentWeather(city) {
    const apiKey = "ee41023e27cbe7d2955c0ddebe7d0f31";
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey + "&units=imperial";

    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (weatherData) {

        var weathericon = weatherData.weather[0].icon;
        var iconurl = "https://openweathermap.org/img/wn/" + weathericon + "@2x.png";
        var now = dayjs();
        var city = document.getElementById("current-city");
        city.innerHTML = (weatherData.name + " " + "(" + now.format("MM/DD/YYYY") + ")" + '<img src="' + iconurl + '">');

        var temp = document.getElementById("temperature");
        temp.textContent = "Temperature: " + weatherData.main.temp + " °F";

        var humidity = document.getElementById("humidity");
        humidity.textContent = "Humidity: " + weatherData.main.humidity + "%";

        var wind = document.getElementById("wind-speed");
        wind.textContent = "Wind Speed: " + weatherData.wind.speed + " MPH";
