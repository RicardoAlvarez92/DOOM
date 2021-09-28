const nameTitle = document.querySelector("#name" );
const input = document.querySelector("input");


"Guardar el valor que mete el usuario y cambio el titulo con los datos de ese valor"

const writeName = () => {
    const inputValue = input.value;
    nameTitle.textContent = inputValue;  
}
