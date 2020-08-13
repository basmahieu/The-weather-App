const key = "78c03489433ef311c8fcb20a6343eb5b";
let inputValue = document.querySelector(".inputValue");
let name = document.querySelector(".name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let date = document.querySelector(".date");

// Get City & weather information
document.querySelector("#run").onclick = () => {
  const getLocalWeather = async (city) => {
    const base = "https://api.openweathermap.org/data/2.5/weather?";
    const query = `&q=${city}&units=metric&appid=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data;
  };
  getLocalWeather(inputValue.value)
    .then((data) => {
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let descValue = data["weather"][0]["description"];

      name.innerHTML = nameValue;
      temp.innerHTML = Math.floor(tempValue);
      desc.innerHTML = descValue;
    })
    .catch((err) => alert("there seems to be an issue, we're working on it."));
};
