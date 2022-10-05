//console.log(document.getElementsByTagName("li"));
//console.log(document.getElementsByClassName("card"));
//console.log(document.getElementsByName("nombre"));
//console.log(document.getElementById("menu"));
//console.log(document.querySelector("#menu"));
//console.log(document.querySelector("a"));
//console.log(document.querySelectorAll("a"));
//console.log(document.querySelectorAll("a").length);
//document.querySelectorAll("a").forEach((el) => console.log(el));
//console.log(document.querySelector(".card"));
//console.log(document.querySelectorAll(".card"));
//console.log(document.querySelectorAll(".card")[2]);
//console.log(document.querySelector("#menu li"));
//console.log(document.querySelectorAll("#menu li"));

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);
