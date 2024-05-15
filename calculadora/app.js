const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonPresionado = boton.textContent;
    pantalla.textContent = botonPresionado;
  });
});
