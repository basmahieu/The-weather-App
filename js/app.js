const key = "78c03489433ef311c8fcb20a6343eb5b";
let inputValue = document.querySelector(".inputValue");

// Don't Display cards
document.querySelector("#hide").style.display = "none";

// Get City & weather information
// display Cards on click
document.querySelector("#run").onclick = () => {
  document.querySelector("#hide").style.display = "block";

  const getLocalWeather = async (city) => {
    const base = "https://api.openweathermap.org/data/2.5/forecast?";
    const query = `&q=${city}&units=metric&appid=${key}`;

    console.log("starting request");
    const response = await fetch(base + query);
    const data = await response.json();
    return data;
    // console.log(data);
  };
  getLocalWeather(inputValue.value)
    .then((data) => {
      console.log("End request");

      nextDays(data);
    })

    .catch((err) =>
      console.log("there seems to be an issue, we're working on it.")
    );
};

let weekday = new Array(
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
);

// Get 5 days function
function nextDays(days) {
  for (let i = 0; i < 5; i++) {
    //Push to DOM

    let temp = document.querySelector(".temp" + [i]);
    let desc = document.querySelector(".desc" + [i]);
    let icon = document.querySelector(".icon" + [i]);
    let time = document.querySelector(".date" + [i]);
    let daysNew = document.querySelector(".days" + [i]);

    let name = document.querySelector(".name");

    // Days

    // document.getElementById("cityname" + [i]).innerHTML = weekdag[dag];
    // console.log(weekdag);

    // Get values
    let daysData = new Date(days.list[i * 8].dt_txt).getDay();
    let daysName = weekday[daysData];

    let timeValue = days["list"][i * 8]["dt_txt"];
    let nameValue = days["city"]["name"];
    let tempValue = days["list"][i * 8]["main"]["temp"];
    let descValue = days["list"][i * 8]["weather"][0]["description"];
    let test = days["list"][i]["weather"][0]["icon"];
    let iconSrc = `img/icons/${test}.svg`;

    icon.setAttribute("src", iconSrc);

    daysNew.innerHTML = daysName;
    name.innerHTML = nameValue;
    time.innerHTML = timeValue;
    temp.innerHTML = Math.round(tempValue) + "°";
    desc.innerHTML = descValue;

    // Check data
    console.log(daysName);
    console.log(iconSrc);
    console.log(timeValue);
    console.log(nameValue);
    console.log(tempValue);
    console.log(descValue);
  }
}

// $("#wrapper").append(
//   '<div class="card text-center mt-4 display"><img src="" alt=" " class="icon weather-icons" /><h3 class="desc"></h3><div class="temp temperature"></div><div class="name"></div> <div class="date"></div></div>'
// );
