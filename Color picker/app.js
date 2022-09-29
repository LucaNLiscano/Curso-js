//declaracion de las variables con el get by id.
const inputColor = document.getElementById("inputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const parrafoExa = document.getElementById("parrafoExa");
const cardColor = document.getElementById("cardColor");

//prueba de confirmacion de las variables.
//console.log(inputColor);
//console.log(btnVisualizar);
//console.log(parrafoExa);
//console.log(cardColor);

//al hacer click en el boton cambiara el texto al codigo del color y el color de abajo se cambia al color de arriba.
btnVisualizar.addEventListener("click", () => {
  console.log(inputColor.value);
  parrafoExa.textContent = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;
});
