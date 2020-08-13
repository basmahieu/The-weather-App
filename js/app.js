const key = "78c03489433ef311c8fcb20a6343eb5b";
let inputValue = document.querySelector(".inputValue");
let name = document.querySelector(".name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let date = document.querySelector(".date");
let icon = document.querySelector(".icon img");

// Don't Display cards
document.querySelector(".card").style.display = "none";

// Get icon
// const iconSrc = data["icon"];
// const icons = `http://openweathermap.org/img/wn/${iconSrc}.png`;
// icon.setAttribute("src", icons);

// Get City & weather information
// display Card on click
document.querySelector("#run").onclick = () => {
  document.querySelector(".card").style.display = "block";

  const getLocalWeather = async (city) => {
    const base = "https://api.openweathermap.org/data/2.5/weather?";
    const query = `&q=${city}&units=metric&appid=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data;
    // console.log(data);
  };
  getLocalWeather(inputValue.value)
    .then((data) => {
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let descValue = data["weather"][0]["description"];
      let test = data["weather"][0]["icon"];
      let iconSrc = `img/icons/${test}.png`;
      icon.setAttribute("src", iconSrc);

      name.innerHTML = nameValue;
      temp.innerHTML = Math.floor(tempValue) + "°";
      desc.innerHTML = descValue;
    })

    .catch((err) =>
      console.log("there seems to be an issue, we're working on it.")
    );
};

// let iconValue = data["icon"];

// icon.innerHTML = `http://openweathermap.org/img/wn/${iconValue}.png`;
