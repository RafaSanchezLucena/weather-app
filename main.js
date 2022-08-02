import "./style.css";

const div = document.querySelector(".container");

const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "46b09705b0msh419e77df9426930p19b7e4jsn2eb1d4271df5",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

// fetch("https://weatherapi-com.span.rapidapi.com/current.json?q=madrid", OPTIONS)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const obtenerDatos = async (city) => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
      OPTIONS
    );
    const data = await response.json();
    // Declaración de variables con los datos obtenidos.
    let { current } = data;
    let {
      condition,
      humidity,
      temp_c,
      wind_dir,
      wind_kph,
      precip_in,
      pressure_mb,
      feelslike_c,
    } = current;
    let { icon } = condition;

    div.innerHTML = /*html*/ `<div class="weather">
                      <div class="header">
                      <span class="poblacion">${city}</span>
                      <button  id="icono" onclick="changeCity()" class="icon"><span class="material-symbols-outlined"> settings </span></button>
                      <br></div>
                      <span><strong>Temp:</strong> ${temp_c}º,</span>
                      <span><strong>Sensación:</strong> ${feelslike_c}º</span><br>
                      <span><strong>Presión:</strong> ${pressure_mb}Pa,</span>
                      <span><strong>Humedad:</strong> ${humidity}%</span><br>
                      <span><strong>Viento:</strong> ${wind_kph}Km/h ${wind_dir}</span><br>
                      <span><strong>Lluvia hoy:</strong> ${precip_in}mm</span><br>
                      <img src="${icon}"/>                   
                    </div>
    `;
  } catch (error) {
    alert("La búsqueda no dio resultado.");
    console.log(error);
  }
};

obtenerDatos("Alcoi");

window.changeCity = () => {
  const nombre = prompt("Elige otra población");
  if (nombre != "" && nombre != null) {
    obtenerDatos(nombre);
  } else {
    alert("Campo obligatorio.");
  }
};
