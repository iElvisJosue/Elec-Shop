// OBTENEMOS EL BOTON QUE MOSTRARA EL CARRITO
const Cart = document.querySelector(".Header-Option-Cart")
// OBTENEMOS EL LAYOUT TRANSPARENTE
const Layout = document.querySelector(".Layout")
// OBTENEMOS LA SECCION DEL CARRITO VACIO
const CartEmpty = document.querySelector(".Cart-Empty")
// OBTENEMOS LOS BOTONES QUE CERRARAN NUESTRO CARRITO
const CartClose = document.querySelectorAll(".Cart-Empty-Close, .Cart-Empty-Searching")


/* CON ESTA FUNCION MOSTRAMOS EL LAYOUT TRANSPARENTE 
Y DESPUES DE 2MILISEGUNDOS MOSTRAMOS LA SECCION DEL
CARRITO DE COMPRAS*/
Cart.addEventListener("click", () => {
    Layout.classList.add("Active")
    setTimeout(() => {
        CartEmpty.classList.add("Active")
    }, 200);
})
/* CON ESTA FUNCION ASIGNAMOS A AMBOS BOTONES
QUE PUEDAN CERRAR EL LAYOUT TRANSPARANTE Y EL
CARRITO DE COMPRAR */
CartClose.forEach(e => {
    e.addEventListener("click", () => {
        Layout.classList.remove("Active")
        CartEmpty.classList.remove("Active")
    })
})

