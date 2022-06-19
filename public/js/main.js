const btn = document.getElementById("submitBtn")
const field = document.getElementById("cityName")
const day_today = document.getElementById("day")
const date_mon = document.getElementById("date_month")
const city_name = document.getElementById("city")
const icon = document.getElementById("weather_icon")
const temperature = document.getElementById("temp")
const display = document.getElementById("display")

var date = new Date(); 
var dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE",
  "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];

const currDate = date.getDate()
const currDay = dayNames[date.getDay()]
const currMonth = monthNames[date.getMonth()]

day_today.innerHTML= currDay
date_mon.innerHTML = currDate+" "+currMonth
    


const getInfo = async (event)=>{
    event.preventDefault()
    const city = field.value
    url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7948beca8c567faf90214f6df6deefe&units=metric`
    const response = await fetch(url)
    const objData = await response.json()
    const arr = [objData]
    city_name.innerHTML = arr[0].name+", "+arr[0].sys.country

    if(arr[0].weather.main == "Sunny"){
        icon.className = "fa fa-sun";
    }
    else if(arr[0].weather.main == "Clouds"){
        icon.className = "fa fa-cloud";
    }
    else if(arr[0].weather.main == "Rainy"){
        icon.className = "fa fa-rain";
    } 
    else{
        icon.className = "fa fa-cloud";
    } 
    temperature.innerHTML = arr[0].main.temp
    display.style.visibility = "visible";
}

btn.addEventListener("click", getInfo)