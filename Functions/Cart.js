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
    /* DESABILITAMOS EL SCROLL AL MOMENTO DE
    ABRIR EL CARRITO DE COMPRAS */
    document.body.classList.add("Active")
    // MOSTRAMOS EL LAYOUT TRANSPARENTE
    Layout.classList.add("Active")
    setTimeout(() => {
        /* MOSTRAMOS EL CARRITO DE COMPRAS 
        DESPUES DE 2 MS*/
        CartEmpty.classList.add("Active")
    }, 200);
})
/* CON ESTA FUNCION ASIGNAMOS A AMBOS BOTONES
QUE PUEDAN CERRAR EL LAYOUT TRANSPARANTE Y EL
CARRITO DE COMPRAR */
CartClose.forEach(e => {
    e.addEventListener("click", () => {
        /* HABILITAMOS EL SCROLL AL MOMENTO DE
        CERRAR EL CARRITO DE COMPRAS */
        document.body.classList.remove("Active")
        // OCULTAMOS EL LAYOUT TRANSPARENTE
        Layout.classList.remove("Active")
        /* OCULTAMOS EL CARRITO DE COMPRAS */
        CartEmpty.classList.remove("Active")
    })
})

