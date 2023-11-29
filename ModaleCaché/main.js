
let modal = document.querySelector(".case");
let bttnClick = document.querySelector("#button")
let colorBody = document.querySelector("#body")

modal.style.display = "none";


bttnClick.addEventListener('click', (event) => {

    colorBody.style.background = "gray";
    bttnClick.style.background = "white";
    modal.style.display = "block";
})

// si on ne clique pas sur bttnClick
// colorBody.addEventListener("click",(event)=>{
//     if (onclick.) {
        
//     }
// })


