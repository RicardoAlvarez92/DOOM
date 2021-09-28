const $btn = document.querySelector("#btn");
const $list = document.querySelector("#list");
let contador= 1;

$btn.addEventListener("click",() => {
    const listItem = document.createElement("li");
    let x = x++
    listItem.textContent = "objeto" ;
   
    $list.appendChild(listItem);    
} );





