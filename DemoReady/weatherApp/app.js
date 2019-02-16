$(document).ready(
  () => {
    console.log(1);
    getWeatherData();
  }
)

function getWeatherData(){
  /* Navigator takes a little time to fetch the geolocation data */
  if (navigator.geolocation)  {
    navigator.geolocation.getCurrentPosition( (position) => {
      /* lat long co-ordinates */
      let long = position.coords.longitude;
      let lat = position.coords.latitude;

      /* Proxy url for the cors browser isssue .*/
      let proxy = 'https://cors-anywhere.herokuapp.com/';

      /*getting the temprature description div */
      let temprature_description = $('#temprature-description');

      /* fetch API call to darksky API for weather data */
      fetch(`${proxy}https://api.darksky.net/forecast/593677c73ab9b99bea9904fa9fbd0ddb/${lat},${long}`)
      .then(response => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          let centigrade = convertToCentigrade( data.currently.temperature).toPrecision(3);
          console.log(centigrade);
          document.getElementById('temprature-degree').textContent = centigrade + ' C ';
          document.getElementById('temprature-description').innerHTML= data.timezone + "        "+ data.currently.summary
        }
      })
      .catch(err => console.log(err))
    })}
}

  function setIcons(icon ,iconId) {
    const skycons = new Skycons({color : "white"});
    const current_Icon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconId , skycons[current_Icon]);
  }

function convertToCentigrade( faranheit){
  return ((faranheit-32)*5)/9;
}
