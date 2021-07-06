$(document).ready(function() {
    const key = "01569d7d21c3991cf31cb5643b83b56e";
    const city = "Calumet+City";
    const url = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
  
    var html;
    $.getJSON(url, function(response) {
      var data = response;
  
      function convert_case(str) {
        for(var i = 0; i < str.length; i++) {
          return str[0].toUpperCase() + str.slice(1);
        }
      }
  
      function convert_temp(K) {
        var temp = K * (9 / 5) - 459.67;
        return Math.round(temp);
      }
  
      
      $('#city').html(data.name);
      $('#conditions').html(convert_case(data.weather[0].description));
      $('#current').html(convert_temp(data.main.temp) + '&deg;');
      $('#high').html(convert_temp(data.main.temp_max) + '&deg;');
      $('#low').html(convert_temp(data.main.temp_min) + '&deg;');
    });
  
    function convert_case(str) {
      for(var i = 0; i < str.length; i++) {
        return str[0].toUpperCase() + str.slice(1);
      }
    }
  
    $('form').submit(function(evt) {
      evt.preventDefault();
      var searchTerm = $('#city_search').val();
  
      const url = "http://api.openweathermap.org/data/2.5/weather";
      const data = {
        q: searchTerm,
        units: "imperial",
        appid: "01569d7d21c3991cf31cb5643b83b56e"
      }
  
      function showWeather(data) {
        $('#city').html(data.name);
        $('#conditions').html(convert_case(data.weather[0].description));
        $('#current').html(Math.ceil(data.main.temp) + '&deg;');
        $('#high').html(Math.ceil(data.main.temp_max) + '&deg;');
        $('#low').html(Math.ceil(data.main.temp_min) + '&deg;');
      }
      $.getJSON(url, data, showWeather);
  
    }); 
  
  }); 
  

