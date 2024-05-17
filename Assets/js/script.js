// Open Weather Map link: https://openweathermap.org/forecast5
// Open Weather Map API key: daf8f38305e86af0479c8ba66ec63552

//Below is a list of all the videos I watched to help me make this weather dashboard
// https://www.youtube.com/watch?v=OE7kml0pigw
// https://www.youtube.com/watch?v=6trGQWzg2AI&t=2647s 
// https://www.youtube.com/watch?v=QEu8_5bYm-w&t=106s 
// https://www.youtube.com/watch?v=y9ZBHoUTWjY&list=PLAEoBV_GLyq4klW-2Pm75_5-r4oHhwqlm&index=3 
// https://www.youtube.com/watch?v=KT6Jaxl0JM4&list=PLAEoBV_GLyq4klW-2Pm75_5-r4oHhwqlm&index=4 
// https://www.youtube.com/watch?v=6imiFFeDIzE&list=PLAEoBV_GLyq4klW-2Pm75_5-r4oHhwqlm&index=5 
// https://www.youtube.com/watch?v=IfG4A8YfxsY 


//Below are the variables





// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history





// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the 
// humidity, and the wind speed
$(document).ready(function () {
    $('#searchButton').click(function () {

        var city = $('#city').val();

        if (city != '') {

            $.ajax({

                url: "https://api.openweathermap.org/data/2.5/weather?q= " + city + "&units=imperial" + "&appid=daf8f38305e86af0479c8ba66ec63552",
                type: "GET",
                dataTyle: "jsonp",
                success: function (data) {
                    var widget = show(data);

                    $("#display").html(widget);

                    $("#city").val('');
                }
            });

        } else {
            $('#error').html('Enter City');
        }
    });
});

function show(data) {
    return "<h2><strong>Current Weather for " + data.name + "</strong></h2>" +
        "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
        "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
        "<h3><strong>Temperature</strong>: " + data.main.temp + "</h3>" +
        "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
        "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "</h3>";
}





// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the
// temperature, the wind speed, and the humidity





// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city