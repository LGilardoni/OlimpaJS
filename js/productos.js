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
let itemsElements = document.querySelector(".products__section");

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
let itemsElements = document.querySelector(".products__section");
let msg = "";
msg += `<p> Oops...un erreur : <br><i>${elt}<i><p>`;
itemsElements.innerHTML = msg;
}



// Carrito de comptas

    // CLICK EN COMPRAR
    const comprarButton = document.querySelector('.comprarButton');
    comprarButton.addEventListener('click', comprarButtonClicked);

    //CONTENEDOR PRINCIPAL DE CARRITO
    const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

    function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
    }

    function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    for (let i = 0; i < elementsTitle.length; i++) {

        if (elementsTitle[i].innerText === itemTitle) {
        
        let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
        elementQuantity.value++;
        updateShoppingCartTotal();
        $('.toast').toast('show'); // ANIMACIONES
        return; //CORTA EL CICLO Y NO SE REPITE LA LÍNEA DE PRODUCTO
        }
    }

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = 
        `<div class="row shoppingCartItem">
            <div class="col-4">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src=${itemImage} class="shopping-cart-image">
                    <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                </div>
            </div>
            <div class="col-4">
                <div
                    class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                        value="1">
                    <button class="btn btn-danger buttonDelete" type="button">X</button>
                </div>
            </div>
        </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow
        .querySelector('.buttonDelete')
        .addEventListener('click', removeShoppingCartItem);

    shoppingCartRow
        .querySelector('.shoppingCartItemQuantity')
        .addEventListener('change', quantityChanged);

    updateShoppingCartTotal();
    }

    function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach((shoppingCartItem) => {

        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;

    });

    shoppingCartTotal.innerHTML = `$${total.toFixed(3)}`;

    }

    function removeShoppingCartItem(event) {

    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();

    }

    function quantityChanged(event) {

    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();

    }

    function comprarButtonClicked() {

    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();

    }