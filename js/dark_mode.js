const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
document.body.classList.toggle("dark");
btnSwitch.classList.toggle("active");

//Guardar el modo en el local storage
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else{
        localStorage.setItem("dark-mode", "false");
    }
});

//Obtener el modo del local storage
if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
} else{
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
}