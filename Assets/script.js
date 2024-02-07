var now = dayjs();
var currentDate = (now.format("MM/DD/YYYY"));
var city = "";
var citySearch = $("#city-search");
var citySearchButton = $("#city-search-button");

//Clears localstorage
function deleteItems() {
    localStorage.clear();
}

//Displays weather after clicking search button
citySearchButton.on("click", displayWeather);

//displays weather after running currentWeather function
function displayWeather(event) {
    event.preventDefault();
    if (citySearch.val().trim() !== "") {
        city = citySearch.val().trim();
        currentWeather(city);

        //localstorage for searched cities
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

        //creates list items from cities saved in localstorage
        for (let i = 0; i < searchedCities.length; i++) {
            var list = document.createElement("li");
            list.setAttribute("class", "list-group-item");
            list.setAttribute("id", "city-link");
            list.textContent = searchedCities[i];
            cityList.appendChild(list);
        }
    }
}
