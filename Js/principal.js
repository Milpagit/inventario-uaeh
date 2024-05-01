const cloud = document.getElementById("cloud");
const Barralateral = document.querySelector(".Barralateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const main = document.querySelector("main");
const boton = document.querySelector(".boton");
const modal = document.querySelector(".modal");
const cerrar = document.querySelector(".cerrar");

const modoOscuroActivado = localStorage.getItem("dark-mode") === "true";
console.log(modoOscuroActivado);

if (modoOscuroActivado) {
  console.log("poniendo modo oscuro");
  document.body.classList.add("dark-mode");
}

/* palanca.addEventListener("click", () => {
  let body = document.body;
  body.classList.toggle("dark-mode");
  circulo.classList.toggle("prendido");
}); */

cloud.addEventListener("click", () => {
  Barralateral.classList.toggle("minibarra");
  main.classList.toggle("min-main");
  spans.forEach((span) => {
    span.classList.toggle("oculto");
  });
});

//Modal***********************************************************

boton.addEventListener("click", () => {
  modal.showModal();
});
cerrar.addEventListener("click", () => {
  modal.close();
});

// Aplicar estilos de modo oscuro si la preferencia está establecida

const botonModoOscuro = document.querySelector(".switch");
console.log(botonModoOscuro);
palanca.addEventListener("click", activarDesactivarModoOscuro);

function activarDesactivarModoOscuro() {
  const modoOscuroActivado = localStorage.getItem("dark-mode") === "true";
  console.log(modoOscuroActivado);
  localStorage.setItem("dark-mode", !modoOscuroActivado);
  const body = document.querySelector('body');
  body.classList.toggle("dark-mode");
  circulo.classList.toggle("prendido");
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------
