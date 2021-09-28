    const $btn = document.querySelector("#btn");

$btn.addEventListener("click", () => {
    console.log("Me presionaste");
}); 

/* 
Comentario: mouse over funiona al moments de poner el cursor sobre el elemento

const $btn = document.querySelector("#btn");

$btn.addEventListener("mouseover", () => {
    console.log("Me presionaste");
}); */

const $inpText = document.querySelector("#text");

$inpText.addEventListener("keydown", (e) => {
    console.log(e.target.value);

});


/* 
function mifuncion () {
}
Comentario: esto segundo esigual al de arriba:

() => {

} */