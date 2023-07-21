// CREAMOS UN ARRAY DE OBJETOS CON LAS CARACTERISTICAS A UTILIZAR DE LOS PRODUCTOS
const cartProductDetails = [
    {
        image: `Images/Product/Product1.png`,
        image2: `../Images/Product/Product1.png`,
        name: `Monitor Curvo - G34WQC-A`,
        price: `7,300`
    },
    {
        image: `Images/Product/Product2.png`,
        image2: `../Images/Product/Product2.png`,
        name: `Sapphire Pulse - RX 6600`,
        price: `3,450`
    },
    {
        image: `Images/Product/Product3.png`,
        image2: `../Images/Product/Product3.png`,
        name: `Game Factor - Enfriamiento Liquido`,
        price: `789`
    },
    {
        image: `Images/Product/Product4.png`,
        image2: `../Images/Product/Product4.png`,
        name: `DDI - Seagate Barracuda 3.5`,
        title: `<b>DDI - Seagate Barracuda 3.5</b> 789 MXN`,
        price: `789`
    },
    {
        image: `Images/Product/Product5.png`,
        image2: `../Images/Product/Product5.png`,
        name: `Gabinete - Aerocool HIVE-G-BK-V1`,
        price: `909`
    },
    {
        image: `Images/Product/Product6.png`,
        image2: `../Images/Product/Product6.png`,
        name: `Silla Gamer - ROG Destrier Ergo`,
        price: `8,669`
    },
    {
        image: `Images/Product/Product7.png`,
        image2: `../Images/Product/Product7.png`,
        name: `MSI - GeForce 210`,
        price: `800`
    },
    {
        image: `Images/Product/Product8.png`,
        image2: `../Images/Product/Product8.png`,
        name: `Gigabyte - GTX 1660`,
        price: `5,000`
    },
    {
        image: `../Images/Product/Product9.png`,
        name: `Gigabyte - RTX 3060`,
        price: `7,000`
    },
    {
        image: `Images/Product/Product10.png`,
        image2: `../Images/Product/Product10.png`,
        name: `ASUS - RTX 3060 White`,
        price: `6,349`
    },
    {
        image: `Images/Product/Product11.png`,
        image2: `../Images/Product/Product11.png`,
        name: `Gigabyte - RTX 4090`,
        price: `35,350`
    },
    {
        image: `Images/Product/Product12.png`,
        image2: `../Images/Product/Product12.png`,
        name: `Gigabyte - RX 6600`,
        price: `3,500`
    },
    {
        image: `Images/Product/Product13.png`,
        image2: `../Images/Product/Product13.png`,
        name: `MSI - RX 6650 XT`,
        price: `6,400`
    },
    {
        image: `Images/Product/Product14.png`,
        image2: `../Images/Product/Product14.png`,
        name: `MSI - RX 7600`,
        price: `6,449`
    },
    {
        image: `Images/Product/Product15.png`,
        image2: `../Images/Product/Product15.png`,
        name: `Monitor - Gigabyte G24F 2`,
        price: `2,800`
    },
    {
        image: `Images/Product/Product16.png`,
        image2: `../Images/Product/Product16.png`,
        name: `Tarjeta Madre - Gigabyte A520M`,
        price: `1,149`
    },
    {
        image: `Images/Product/Product17.png`,
        image2: `../Images/Product/Product17.png`,
        name: `Procesador - Ryzen 5 5600G`,
        price: `1,939`
    },
    {
        image: `Images/Product/Product18.png`,
        image2: `../Images/Product/Product18.png`,
        name: `Fuente de Poder - XPG PYLON 80`,
        price: `949`
    },
    {
        image: `Images/Product/Product19.png`,
        image2: `../Images/Product/Product19.png`,
        name: `Kit RAM - XPG Spectrix`,
        price: `749`
    },
    {
        image: `Images/Product/Product20.png`,
        image2: `../Images/Product/Product20.png`,
        name: `SSD | Samsung 980 PRO`,
        price: `1,810`
    },
]
// OBTENEMOS EL CONTENEDOR DEL CARRITO DE COMPRAS VACIO
const cartEmptyContainer = document.querySelector(".Cart-Empty")
// OBTENEMOS LA ETIQUETA QUE CONTIENE LA CANTIDAD DE PRODUCTOS EN EL CARRITO
const cartEmptyTitle = document.querySelector(".Cart-Empty-Title")
// OBTENEMOS CONTENIDO DEL CARRITO VACIO
const cartEmptyContent = document.querySelectorAll(".Cart-Empty-Image, .Cart-Empty-Text, .Cart-Empty-Searching")
/* ---------------------------------------------------------------------------------------- */
// OBTENEMOS EL CONTENEDOR DEL CARRITO DE COMPRAS CON PRODUCTOS
const productsCartContent = document.querySelector(".Cart-Empty-Product")
// OBTENEMOS EL BOTON DE PAGAR CARRITO 
const cartPay = document.querySelector(".Cart-Empty-Pay")
// OBTENEMOS LA NOTIFICACION DE PRODUCTO AGREGADO
const notificationCart = document.querySelector(".Cart-Notification")
// OBENEMOS EL CONTENIDO DEL ICONO DEL CARRITO EN EL HEADER
const cartHeader = document.querySelectorAll(".Header-Option-Cart ion-icon, .Header-Option-Cart p")

/* CON ESTA FUNCION CHECAREMOS SI HAY  
PRODUCTOS EN EL CARRITO*/
function checkCartProducts(num){
    /* CREAMOS UNA ARRAY VACIO, EL CUAL ALMACENARA TODOS
    LOS PRODUCTOS DENTRO DEL CARRITO*/
    let arrCart = []
    // RECORREMOS LA MAXIMA CANTIDAD DE PRODUCTOS (NO ES DINAMICO SIN BACK)
    for(i = 1; i < 21; i++){
        /* SI SE ENCUENTA AL MENOS UN PRODUCTO DE LOS 20, LO 
        ALMACENAMOS EN EL ARRAY CREADO*/
        if(localStorage.getItem(`productCart${i}`)){
            arrCart.push(localStorage.getItem(`productCart${i}`))
        }
    }
    arrCart.length > 0 ? addCartProducts(arrCart, num) : emptyCart()
} 
/* CON ESTA FUNCION MOSTRAREMOS TODOS LOS 
PRODUCTOS EN EL CARRITO*/
function addCartProducts(cartProducts, num){
    // CAMBIAMOS EL ICONO DEL CARRITO 
    cartHeader[0].setAttribute("name", "cart")
    // ASIGNAMOS UN COLOR AL ICONO DEL CARRITO
    cartHeader[0].style.color = "#ff6961"
    // ASIGNAMOS UN COLOR AL TEXTO
    cartHeader[1].style.color = "#ff6961"
    // MOSTRAMOS EL BOTON DE PAGAR 
    cartPay.style.display = "block"
    // OCULTAMOS LOS ELEMENTOS DEL CARRITO VACIO
    cartEmptyContent.forEach(element => {
        element.style.display = "none"
    })
    // MOSTRAMOS EL CONTENIDO DEL CARRITO
    productsCartContent.style.visibility = "visible"
    // VACIAMOS EL CONTENIDO PARA QUE NO SE REPITAN
    productsCartContent.innerHTML = ""
    /* 2- SUMAMOS LA CANTIDAD DE PRODUCTOS EN EL CARRITO */
    let totalCartProducts = 0
    cartProducts.forEach(element => {
        totalCartProducts = totalCartProducts + Number(element[element.length-1])
    })
    /* 3.- COLOCAMOS LA CANTIDAD DE PRODUCTOS EN EL CARRITO */
    cartEmptyTitle.innerHTML = `Tu carrito de compras (${totalCartProducts})`
    /* 4.- AGREGAMOS LOS PRODUCTOS AL CARRITO */
    cartProducts.forEach(element => {
        /* 4.1 CREAMOS EL ID DEL PRODUCTO */
        let idProduct = String(element).split(',')
        /* 4.2 ASIGNAMOS EL ID DEL PRODUCTO */
        idProduct = Number(idProduct[0]-1);
        /* 4.3 CREAMOS EL SUBTOTAL */ 
        let subTotalCart = String(cartProductDetails[idProduct].price).replace(/,/g, "") * element[element.length-1]
        /* 4.4 CREAMOS UN ARRAY DEL SUBTOTAL PARA AGREGARLE LA , */
        let arrSubTotalCart = String(subTotalCart).split('')
        /* 4.5 AGREGAMOS LA , */
        if(arrSubTotalCart.length > 3){
            arrSubTotalCart.splice(arrSubTotalCart.length-3, 0, ",")
        }
        /* 4.6 UNIMOS EL ARRAY */
        let totalCart = arrSubTotalCart.join('')
        /* 4.7 AGREGAMOS LOS PRODUCTOS*/
        if(num === 1){
            productsCartContent.innerHTML += 
            `<div class="Cart-Empty-Product-Items">`+
                `<div class="Cart-Empty-Product-Image">`+
                    `<img src="${cartProductDetails[idProduct].image}" alt="${cartProductDetails[idProduct].name}">`+
                `</div>`+
                `<div class="Cart-Empty-Product-Name">`+
                    `<p class="Cart-Empty-Product-Name-Product">${cartProductDetails[idProduct].name}</p>`+
                    `<p class="Cart-Empty-Product-Price-Product">$${cartProductDetails[idProduct].price} x ${element[element.length-1]}</p>`+
                    `<p class="Cart-Empty-Product-Total-Product">Total: $${totalCart}</p>`+
                `</div>`+
                `<button onclick="deleteItem(${idProduct})" class="Cart-Empty-Delete-Item"><ion-icon name="trash-outline"></ion-icon></button>`+
            `</div>`
        }
        if(num === 2){
            productsCartContent.innerHTML += 
        `<div class="Cart-Empty-Product-Items">`+
            `<div class="Cart-Empty-Product-Image">`+
                `<img src="${cartProductDetails[idProduct].image2}" alt="${cartProductDetails[idProduct].name}">`+
            `</div>`+
            `<div class="Cart-Empty-Product-Name">`+
                `<p class="Cart-Empty-Product-Name-Product">${cartProductDetails[idProduct].name}</p>`+
                `<p class="Cart-Empty-Product-Price-Product">$${cartProductDetails[idProduct].price} x ${element[element.length-1]}</p>`+
                `<p class="Cart-Empty-Product-Total-Product">Total: $${totalCart}</p>`+
            `</div>`+
            `<button onclick="deleteItem(${idProduct})" class="Cart-Empty-Delete-Item"><ion-icon name="trash-outline"></ion-icon></button>`+
        `</div>`
        }
    })
}

/* CON ESTA FUNCION ELIMINAMOS EL ITEM CORRESPONDIENTE */
function deleteItem(idItem){
    // ELIMINAMOS EL ITEM SELECCIONADO
    localStorage.removeItem(`productCart${idItem+1}`)
    // RECARGAMOS EL CONTENIDO DEL CARRITO
    checkCartProducts()
}
/* CON ESTA FUNCION MOSTRAMOS EL CARRITO VACIO */
function emptyCart(){
    // REESTABLECEMOS EL ICONO DEL CARRITO 
    cartHeader[0].setAttribute("name", "cart-outline")
    // REESTABLECEMOS EL COLOR DEL ICONO DEL CARRITO
    cartHeader[0].style.color = "#2f3640"
    // REESTABLECEMOS EL COLOR DEL TEXTO DEL CARRITO
    cartHeader[1].style.color = "#2f3640"
    // OCULTAMOS EL BOTON DE PAGAR 
    cartPay.style.display = "none"
    // OCULTAMOS EL CONTENEDOR DEL CARRITO CON PRODUCTOS
    productsCartContent.style.visibility = "hidden"
    // ASIGNAMOS EL TEXTO DE 0 A LA CANTIDAD DE PRODUCTOS
    cartEmptyTitle.innerHTML = "Tu carrito de compras (0)"
    // MOSTRAMOS LOS ELEMENTOS DEL CARRITO VACIO
    cartEmptyContent.forEach(element => {
        element.style.display = "block"
    })
}
// CON ESTA FUNCION MOSTRAMOS LA NOTIFICACION
function showNotification(){
    // CAMBIAMOS EL ICONO DEL CARRITO 
    cartHeader[0].setAttribute("name", "cart")
    // ASIGNAMOS UN COLOR AL ICONO DEL CARRITO
    cartHeader[0].style.color = "#ff6961"
    // ASIGNAMOS UN COLOR AL TEXTO
    cartHeader[1].style.color = "#ff6961"
    notificationCart.classList.add("Active")
    setTimeout(() => {
        notificationCart.classList.remove("Active")
    }, 3000);
}