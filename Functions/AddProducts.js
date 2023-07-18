// OBTENEMOS EL BOTON DE COMPRAR AHORA
const buyNow = document.querySelector(".Btn-BuyNow")
// OBTENEMOS EL BOTON DE AGREGAR AL CARRITO
const addToCart = document.querySelector(".Btn-ToCart")
// OBTENEMOS EL LA ETIQUETA DE LA CANTIDAD DE PRODUCTOS
const productAmount = document.querySelector(".Amount-Products")
// OBTENEMOS EL BOTON QUE AGREGA MÁS PRODUCTOS
const productAdd = document.querySelector(".Product-Add")
// OBTENEMOS EL BOTON QUE RESTA MÁS PRODUCTOS
const productSubtract = document.querySelector(".Product-Subtract")
// CREAMOS LA VARIABLE DE CANTIDAD DE PRODUCTOS
let amount = 1

// ALMACENAMOS LA CANTIDAD DE PRODUCTOS A COMPRAR
buyNow.addEventListener("click", () => {
    localStorage.setItem('amountProducts', String(amount))
    window.location.href = "../Pages/Checkout.html"
})
// ALMACENAMOS LA CANTIDAD DE PRODUCTOS AL CARRITO
addToCart.addEventListener("click", () => {
    // ALMACENAMOS EL ID DEL PRODUCTO
    let idProductToCart = localStorage.getItem('idProduct')
    // CREAMOS UN NUEVO PRODUCTO AL CARRITO
    localStorage.setItem(`productCart${idProductToCart}`, idProductToCart +','+ String(amount))
})
// AUMENTAMOS LA CANTIDAD DE ITEMS PERO UN MAXIMO DE 5
productAdd.addEventListener("click", () => {
    if(amount >= 1 && amount < 5){
        amount++
        productAmount.innerHTML = amount
    }
})
// DISMINUIMOS LA CANTIDAD DE ITEMS PERO SIN LLEGAR A 0
productSubtract.addEventListener("click", () => {
    if(amount > 1){
        amount--
        productAmount.innerHTML = amount
    }
})