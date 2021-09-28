/* document.write("Hola desde javascript"); */

/* Devuelve un arreglo de los elementos que tengan esa etiqueta */

/* const title = document.getElementsByTagName("h1");
title[0].innerHTML = "Titulo cambiado desde Java Script";

const texto = document.getElementById("text");
texto.innerHTML = "este testo esta escrito desde java script"

texto.style.background = "blue";
texto.style.color = "white";

console.log(texto); */

/* console.log(title); */

/* text.content no puedes escribir etiquetas HTML */ /* inner.Html puedes escribir etiquetas de texto */


/* 1.-document.getElementByID obtiene elementos por id
    2.-document.getElementsByClassName obtiene elementos de una clase y devuelve un arreglo
    3.- document.getElementsByName obtiene elementos por nombre y devuelve un arreglo
     */

const texto = document.querySelector("#text"); /* puedes llamar desde la clase o id */
texto.textContent = "Estoy escribiendo desde java script";

/* crear elementos html */
const div = document.createElement("div");
const body = document.querySelector("body");

body.append(div); /* aggrega al boy el div */





