



let iconCar = document.querySelector(".header__icons2");
let rightCard = document.querySelector(".cart");
let iconDelete = document.querySelector(".delete__icon");
let cartItem = document.querySelectorAll(".cart__container");
let  leftCard = document.querySelector(".left__popup");
let iconMenu = document.querySelector(".header__icons");
let leftDeleteIcon = document.querySelector(".left__popupIcon");
let addButton = document.querySelectorAll(".Add__car");
let counter = document.querySelector(".contador");


//contador//
function updateCartNumber() {
    let cartItems = document.querySelectorAll(".cart__container");
    let cartNumber = cartItems.length;
    counter.textContent = cartNumber;
}




// Función para crear un nuevo artículo en el carrito

function createRightCartItem(event) {
    
    let button = event.currentTarget;
    
   
    let articleContainer = button.parentElement;
    
    // Crear un nuevo elemento <div> //
    let newDiv = document.createElement("div");
    newDiv.classList.add("cart__container");

    // Crear un elemento <img> //
    let imagen = document.createElement("img");
    let imgSrc = articleContainer.querySelector(".products__img").src;
    imagen.classList.add("cart__img");
    imagen.src = imgSrc;

    
    // Crear un elemento <p> 
    let precio = document.createElement("p");
    let precioProducto = articleContainer.querySelector(".products__price").textContent;
    precio.classList.add("cart__price");
    precio.textContent = precioProducto;

    // Crear un elemento <p> 
    let nombre = document.createElement("p");
    let nombreProducto = articleContainer.querySelector(".products__name").textContent;
    nombre.classList.add("cart__name");
    nombre.textContent = nombreProducto;

    // Crear un elemento <i> 
    let iconoQuitar = document.createElement("i");
    iconoQuitar.classList.add("cart__iconcontainer");
    let iconoImagen = document.createElement("img");
    iconoImagen.classList.add("delete__icon");
    iconoImagen.src = "./img/delete_3405244.png";
    iconoQuitar.appendChild(iconoImagen);

    // Agregar los elementos al div 
    newDiv.appendChild(imagen);
    newDiv.appendChild(precio);
    newDiv.appendChild(nombre);
    newDiv.appendChild(iconoQuitar);

    // Agregar el nuevo div al carrito
    rightCard.appendChild(newDiv);

    iconoImagen.addEventListener("click", ()=> {
        newDiv.remove();
        updateCartNumber();
    });
    updateCartNumber();
}

// Agregar un event listener a cada botón "Agregar al Carrito"
addButton.forEach(button => {
    button.addEventListener("click", createRightCartItem);
});
    






iconMenu.addEventListener("click", () => {
    leftCard.classList.remove("displayNone");
    if (!rightCard.classList.contains("displayNone")) {
        rightCard.classList.add("displayNone");
    }
});
leftCard.addEventListener("click", ()=>{
    leftCard.classList.add("displayNone")
});

iconDelete.addEventListener("click", ()=> {
    cartItem[0].remove();
    updateCartNumber();
    
});

iconCar.addEventListener("click", () => {
    rightCard.classList.toggle("displayNone");
    if(!leftCard.classList.contains("displayNone")) {
        leftCard.classList.add ("displayNone")
    }
  });

  updateCartNumber();
  
 