const $body = document.querySelector("body");
const $selectColor = document.querySelector("#colors");

$selectColor.addEventListener("change", (e) => {
    if(e.target.value === "red") {
        $body.className = "";
        $body.classList.add("red");
    }  
     else if (e.target.Value === "blue"){
        $body.className = "";
        $body.classList.add("blue")
    }  
     else if (e.target.Value === "blue"){
        $body.className = "";
        $body.classList.add("blue")
    }

});