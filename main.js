import "./style.css";
import { obtenerDatos } from "./fetch";

const btn = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const input = document.querySelector(".modal__input");

// Carga de datos inicial con la población "Alcoi" por defecto.
const cargaInicial = () => {
  let ciudad = "Alcoi";
  obtenerDatos(ciudad);
  setInterval(obtenerDatos, 300000, ciudad);
};

cargaInicial();

// Mostramos el modal para elegir una nueva población.
window.changeCity = () => {
  modal.classList.add("modal--show");
};

// Carga de datos con el nuevo nombre de la población y cierre del modal.
btn.addEventListener("click", () => {
  let valor = input.value;
  if (valor != "" && valor != null) {
    obtenerDatos(valor);
    setInterval(obtenerDatos, 300000, valor)
  } else {
    alert("Campo obligatorio");
  }
  modal.classList.remove("modal--show");
  input.value = "";
});
