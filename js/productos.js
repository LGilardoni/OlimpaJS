// Llamada a la funcion + await
async function apiCall() {
const api = await fetch("https://raw.githubusercontent.com/LGilardoni/olimpadesign/main/js/productos.json");
console.log(api);
const response = api.json();
return response;
}

apiCall()
.then((response) => {
    displayProducts(response);
    loaderHide();
})
.catch((error) => {
    loaderHide();
    displayError(error);
});

// Funcion para crear cards de Productos
function displayProducts(elt) {
let elements = "";
let itemsElements = document.querySelector(".products__main");

elt.forEach((products) => {
    elements += 
    `<section class="products__card">
        <div class="products__image photo" id=${products.img}>
            <div class="icons">
                <a href="404.html"><span class="iconify" data-icon="fluent:eye-show-12-regular"></span></a>
                <a href="404.html"><span class="iconify" data-icon="bi:suit-heart"></span></a>
            </div>
        </div>
        <div class="products__text">
            <h3 id="${products.id}">${products.titulo}</h3>
            <span class="products__span">$${products.precio}</span>
            <div class="products__btn"><a><span>Comprar</span></a></div>
        </div>
        <div class="badge--new">New in</div>
    </section>`;
});
itemsElements.innerHTML = elements;
}

// Funcion para loader
function loaderHide() {
let loader = document.querySelector(".loader");
loader.classList.add("hidden");
}

function displayError(elt) {
let itemsElements = document.querySelector(".products__main
                                           ");
let msg = "";
msg += `<p> Oops...un erreur : <br><i>${elt}<i><p>`;
itemsElements.innerHTML = msg;
}
