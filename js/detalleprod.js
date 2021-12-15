    // Pasar parametros enviados por apiCall
    // const selectedItem = document.getElementsByClassName('products__btn')
    // selectedItem.onclick = saveData;

    // function saveData(){
    // var input = document.getElementsByClassName("products__card");
    // localStorage.setItem("item", input.id);
    // var storedValue = localStorage.getItem("item");
    // }

    let articlesList = [];
    window.addEventListener("DOMContentLoaded", (event) => {
    let quantity;
    let sendCart;
    let url = window.location.search; //deberia devolver ?id=numero
    const urlParams = new URLSearchParams(url); //remueve el signo '?'
    const id = urlParams.get("id"); //guarda el id de la url 
    console.log(id)

    // Funcion parametros
    apiCall(id)
        .then((response) => {
        displayProduct(response);
        displayProductColorsOptions(response);
        console.log(response)
        return response;
        })
        .then((object) => {
        sendCart = document.querySelector(".products__btn");
        let quantity = quantityButtonsListener();

        // Agregar al carrito
        sendCart.addEventListener("click", function () {
            console.log("click event")
            let newArticle = new article(
            object.id,
            object.titulo,
            object.precio,
            quantity.textContent
            );
            let oldQuantity = 0;
            let newQuantity;
            let replaceArticle;
            let cartContent = localStorage.getItem("cart");

            if (!cartContent) {
            pushNewArticle(newArticle, articlesList);
            } else {
            articlesList = JSON.parse(cartContent);
            for (let i = 0; i < articlesList.length; i++) {
                if (
                typeof articlesList[i].id === undefined ||
                articlesList[i].id === null
                ) {
                continue;
                } else if (articlesList[i].id === products.id) {
                oldQuantity = articlesList[i].quantity;
                articlesList.splice(i, 1);
                } else {
                continue;
                }
            }

            //Si la cantidad es 0, agregar el producto
            if (oldQuantity === 0) {
                pushNewArticle(newArticle, articlesList);

            //Si la cantidad no es 0, calcular cantidad y agregar el producto
            } else {
                newQuantity =
                parseInt(oldQuantity) + parseInt(quantity.textContent);
                replaceArticle = new article(
                object.id,
                object.titulo,
                object.precio,
                newQuantity
                );
                articlesList.push(replaceArticle);
                localStorage.removeItem("cart");
                localStorage.setItem("cart", JSON.stringify(articlesList));
            }
            }
        });
        })
        .catch((error) => {
        console.error(error);
        });
    });

    async function apiCall(element) {
    const api = await fetch("https://raw.githubusercontent.com/LGilardoni/olimpadesign/main/js/productos.json" + element);
    const response = api.json();
    return response;
    }

    function displayProduct(elt) {
    let page = "";
    page = `<div class="product__image-big">
                <img src="${elt.img}" alt="">
            </div>
        
            <div class="product__infos-details">
                <div class="productName">${elt.titulo}</div>
                <div class="productDescription">${elt.description}</div>
                <form class="productOptions optionsBox">
                    <label for="option">Couleur</label>
                    <select name="option" id="options">
                    </select>
                </form>
            
                <div class="optionsBox">
                    <div class="productQuantity">Quantité: <span id="quantity">1</span></div>
                    <div class="addSubButtons">
                        <button>-</button> <button>+</button>
                    </div>
                </div>
    
                <div class="productPrice">Prix: $${elt.precio}</div>
            </div>`;
    document.querySelector(".product__single").innerHTML = page;
    return page;
    }

    // Selector de color del producto
    // function displayProductColorsOptions(elt) {
    // let optionItem = document.getElementById("options");
    // let options = "";
    // elt.colors.forEach((color) => {
    //     options += `
    //         <option value="" selected>${color}</option>`;
    // });
    // optionItem.innerHTML = options;
    // return options;
    // }

    // Constructor del articulo
    class article {
    constructor(id, titulo, precio, quantity) {
        (this.id = id),
        (this.titulo = titulo),
        (this.precio = precio),
        (this.quantity = quantity);
    }
    }

    //Aumentar o descender cantidad
    // function quantityButtonsListener() {
    // let result = 1;
    // let productBoutons = document.querySelectorAll(".addSubButtons button");
    // let quantity = document.getElementById("quantity");

    // function AddTextContent(arr) {
    //     quantity.textContent = arr;
    // }

    // productBoutons[1].addEventListener("click", function () {
    //     result++;
    //     AddTextContent(result);
    // });
    // productBoutons[0].addEventListener("click", function () {
    //     if (result > 1) {
    //     result--;
    //     AddTextContent(result);
    //     }
    // });
    // return quantity;
    // }

    // Funcion oara crear array de productos
    function pushNewArticle(arr, myListOfArticles) {
    myListOfArticles.push(arr);
    localStorage.setItem("cart", JSON.stringify(myListOfArticles));
    }

    // export { apiCall, displayProduct , displayProductColorsOptions};
