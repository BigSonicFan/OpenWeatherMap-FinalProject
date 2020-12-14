//window that loads page
window.addEventListener('load', LoadedPage);

//variables
//querySelector is class version of getElementById
var searchButton = document.querySelector('.button');
var inputZipCode = document.querySelector('.inputZipCode');

//function after click search button
searchButton.addEventListener('click', function()
{
        //the fetch method to get openweathermap link for zip code
        fetch('https://api.openweathermap.org/data/2.5/weather?zip='+inputZipCode.value+',us&appid=846981fdada77238347c40fd919752f0')
        //the .then response for response.json
        .then(response => response.json())
        //the .then response for data
        .then(data => {
            console.log(data);
            //variables for certain data (city, temperature for fahrenheit and celsius, description, and icon)
            var nameValue = data.name;
            var tempFValue = (((data.main.temp - 273.15) * 9/5) + 32).toFixed(0);
            var tempCValue = (data.main.temp - 273.15).toFixed(0);
            var descValue = data.weather[0].main;
            var iconSrc = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + ".png";
            //
            document.querySelector('.name').innerHTML = "Current Condition in " + nameValue;
            //if user clicked fahrenheit button
            document.querySelector('.tempF').innerHTML = "Temperature in Fahrenheit: " + tempFValue + "°F";
            //if user clicked celsius button
            document.querySelector('.tempC').innerHTML = "Temperature in Celsius: " + tempCValue + "°C";
            document.querySelector('.desc').innerHTML = "Current Weather: " + descValue;
            document.querySelector('.icon').src = iconSrc;

            document.querySelector('.temperature').style.display = "inline-block";
            document.querySelector('.conditionDisplay').style.display = "none";
            document.querySelector('.startOverButton').style.display = "none";
        })
    //the catch error if zip code is not valid
.catch(err => alert("This is not a US Zip Code. Zip Code must contain 5 digits. Try Again."))
})

//function that window loads
function LoadedPage()
{
    //css in javascript
    document.body.style.backgroundImage = "url('BlueSky.jpg')";
    document.body.style.backgroundSize = "cover";
    //setting displays for querySelectors to none when page loads
    document.querySelector('.temperature').style.display = "none";
    document.querySelector('.conditionDisplay').style.display = "none";
    document.querySelector('.startOverButton').style.display = "none";
    //addEventListeners
    document.getElementById('fahrenheit').addEventListener('click', FahrenheitDisplay);
    document.getElementById('celsius').addEventListener('click', CelsiusDisplay);
    //button to come back to zip code menu
    document.getElementById('startOver').addEventListener('click', StartOver);
}
//function when user clicked on fahrenheit button
function FahrenheitDisplay()
{
    //display conditions to the querySelectors and getElementByIds
    document.getElementById('selectionGroup').style.display = "none";
    document.querySelector('.input').style.display = "none";
    document.querySelector('.temperature').style.display = "none";
    document.querySelector('.conditionDisplay').style.display = "inline-block";
    document.querySelector('.startOverButton').style.display = "inline-block";
    document.getElementById('fahrenheit').style.display = "inline-block";
    document.getElementById('celsius').style.display = "inline-block";
    document.getElementById('fahrenheitDisplay').style.display = "inline-block";
    document.getElementById('celsiusDisplay').style.display = "none";
}
//function when user clicked on celsius button
function CelsiusDisplay()
{
    //display conditions to the querySelectors and getElementByIds
    document.getElementById('selectionGroup').style.display = "none";
    document.querySelector('.input').style.display = "none";
    document.querySelector('.temperature').style.display = "none";
    document.getElementById('fahrenheit').style.display = "inline-block";
    document.getElementById('celsius').style.display = "inline-block";
    document.querySelector('.conditionDisplay').style.display = "inline-block";
    document.querySelector('.startOverButton').style.display = "inline-block";
    document.getElementById('celsiusDisplay').style.display = "inline-block";
    document.getElementById('fahrenheitDisplay').style.display = "none";
}

function StartOver()
{
    document.getElementById('selectionGroup').style.display = "inline-block";
    document.querySelector('.input').style.display = "inline-block";
    document.querySelector('.inputZipCode').value = "";
    document.querySelector('.temperature').style.display = "none";
    document.querySelector('.conditionDisplay').style.display = "none";
    document.querySelector('.startOverButton').style.display = "none";
    document.getElementById('celsiusDisplay').style.display = "none";
    document.getElementById('fahrenheitDisplay').style.display = "none";   
}