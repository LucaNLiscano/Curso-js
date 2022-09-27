const inputColor = document.getElementById("inputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const parrafoExa = document.getElementById("parrafoExa");
const cardColor = document.getElementById("cardColor");

//console.log(inputColor);
//console.log(btnVisualizar);
//console.log(parrafoExa);
//console.log(cardColor);

btnVisualizar.addEventListener("click", () => {
  console.log("confirmo");
  console.log(inputColor.value);
  parrafoExa.textContent = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;
});
