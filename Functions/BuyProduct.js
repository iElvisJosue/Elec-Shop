// OBTENEMOS LA IMAGEN DEL PRODUCTO
const previewImage = document.querySelector(".Checkout-Forms-Preview-Product-Details-Image img")
// OBTENEMOS EL CONTENEDOR DEL TITULO DEL PRODUCTO
const previewTitle = document.querySelector(".Checkout-Forms-Preview-Product-Details-Text-NameAndPrice")
// OBTENEMOS EL CONTENEDOR DE LA CANTIDAD DE PRODUCTOS
const previewAmount = document.querySelector(".Checkout-Forms-Preview-Product-Details-Text-Quantity")
// OBTENEMOS EL SUBTOTAL A PAGAR
const previewSubTotal = document.querySelector(".SubTotal")
// OBTENEMOS EL TOTAL A PAGAR
const previewTotal = document.querySelector(".Total")
// OBTENEMOS EL BOTON DE PAGAR
const previewBtnPay = document.querySelector(".Button-ToPay")

const previewProduct = [
    {
        image: `../Images/Product/Product1.png`,
        alt: `Monitor Curvo - G34WQC-A`,
        title: `<b>Monitor Curvo - G34WQC-A</b> $7,300 MXN`,
        price: `7300`
    },
    {
        image: `../Images/Product/Product2.png`,
        alt: `Sapphire Pulse - RX 6600`,
        title: `<b>apphire Pulse - RX 6600</b> $3,450 MXN`,
        price: `3450`
    },
    {
        image: `../Images/Product/Product3.png`,
        alt: `Game Factor - Enfriamiento Liquido`,
        title: `<b>Game Factor - Enfriamiento Liquido</b> $789 MXN`,
        price: `789`
    },
    {
        image: `../Images/Product/Product4.png`,
        alt: `DDI - Seagate Barracuda 3.5`,
        title: `<b>DDI - Seagate Barracuda 3.5</b> $789 MXN`,
        price: `789`
    },
    {
        image: `../Images/Product/Product5.png`,
        alt: `Gabinete - Aerocool HIVE-G-BK-V1`,
        title: `<b>Gabinete - Aerocool HIVE-G-BK-V1</b> $909 MXN`,
        price: `909`
    },
    {
        image: `../Images/Product/Product6.png`,
        alt: `Silla Gamer - ROG Destrier Ergo`,
        title: `<b>Silla Gamer - ROG Destrier Ergo</b> $8,669 MXN`,
        price: `8669`
    },
    {
        image: `../Images/Product/Product7.png`,
        alt: `MSI - GeForce 210`,
        title: `<b>MSI - GeForce 210</b> $800 MXN`,
        price: `800`
    },
    {
        image: `../Images/Product/Product8.png`,
        alt: `Gigabyte - GTX 1660`,
        title: `<b>Gigabyte - GTX 1660</b> $5,000 MXN`,
        price: `5000`
    },
    {
        image: `../Images/Product/Product9.png`,
        alt: `Gigabyte - RTX 3060`,
        title: `<b>Gigabyte - RTX 3060</b> $7,000 MXN`,
        price: `7000`
    },
    {
        image: `../Images/Product/Product10.png`,
        alt: `ASUS - RTX 3060 White`,
        title: `<b>ASUS - RTX 3060 White</b> $6,349 MXN`,
        price: `6349`
    },
    {
        image: `../Images/Product/Product11.png`,
        alt: `Gigabyte - RTX 4090`,
        title: `<b>Gigabyte - RTX 4090</b> $35,350 MXN`,
        price: `35350`
    },
    {
        image: `../Images/Product/Product12.png`,
        alt: `Gigabyte - RX 6600`,
        title: `<b>Gigabyte - RX 6600</b> $3,500 MXN`,
        price: `3500`
    },
    {
        image: `../Images/Product/Product13.png`,
        alt: `MSI - RX 6650 XT`,
        title: `<b>MSI - RX 6650 XT</b> $6,400 MXN`,
        price: `6400`
    },
    {
        image: `../Images/Product/Product14.png`,
        alt: `MSI - RX 7600`,
        title: `<b>MSI - RX 7600</b> $6,449 MXN`,
        price: `6449`
    },
    {
        image: `../Images/Product/Product15.png`,
        alt: `Monitor - Gigabyte G24F 2`,
        title: `<b>Monitor - Gigabyte G24F 2</b> $2,800 MXN`,
        price: `2800`
    },
    {
        image: `../Images/Product/Product16.png`,
        alt: `Tarjeta Madre - Gigabyte A520M`,
        title: `<b>Tarjeta Madre - Gigabyte A520M</b> $1,149 MXN`,
        price: `1149`
    },
    {
        image: `../Images/Product/Product17.png`,
        alt: `Procesador - Ryzen 5 5600G`,
        title: `<b>Procesador - Ryzen 5 5600G</b> $1,939 MXN`,
        price: `1939`
    },
    {
        image: `../Images/Product/Product18.png`,
        alt: `Fuente de Poder - XPG PYLON 80`,
        title: `<b>Fuente de Poder - XPG PYLON 80</b> $949 MXN`,
        price: `949`
    },
    {
        image: `../Images/Product/Product19.png`,
        alt: `Kit RAM - XPG Spectrix`,
        title: `<b>Kit RAM - XPG Spectrix</b> $749 MXN`,
        price: `749`
    },
    {
        image: `../Images/Product/Product20.png`,
        alt: `SSD | Samsung 980 PRO`,
        title: `<b>SSD - Samsung 980 PRO</b> $1,810 MXN`,
        price: `1810`
    },
]

/* CON ESTA FUNCION MOSTRAREMOS TODOS LOS DETALLES 
DEL PRODUCTO A COMPRAR*/
function SeePreviewProduct(){
    // OBTENEMOS EL ID DEL PRODUCTO Y LO CONVERTIRMOS A NUMERO
    let previewIdProduct = Number(localStorage.getItem('idProduct'))
    if(previewIdProduct > 0){
        // ASIGNAMOS LA IMAGEN DEL PRODUCTO
        previewImage.src = previewProduct[previewIdProduct-1].image
        // ASIGNAMOS EL NOMBRE Y PRECIO DEL PRODUCTO
        previewTitle.innerHTML = previewProduct[previewIdProduct-1].title
        // OBTENEMOS LA CANTIDAD DE PRODUCTOS
        let previewAmountProducts = Number(localStorage.getItem('amountProducts'))
        // ASIGNAMOS LA CANTIDAD DE PRODUCTOS
        previewAmount.innerHTML = `Cantidad: ${previewAmountProducts}`
        // OBTENEMOS EL TOTAL
        const Total = checkTotal(previewIdProduct, previewAmountProducts)
        // ASIGNAMOS EL SUBTOTAL A PAGAR
        previewSubTotal.innerHTML = `$${Total}`
        // ASIGNAMOS EL TOTAL A PAGAR
        previewTotal.innerHTML = `$${Total}`
        // ASIGNAMOS EL TOTAL A PAGAR AL BOTON
        previewBtnPay.innerHTML = `Pagar $${Total}`
    }else{
        window.location.href = "../index.html"
    }
}
function checkTotal(id, aproduct){
    // VERIFICAMOS EL SUBTOTAL 
    subTotal = Number(previewProduct[id-1].price) * aproduct
    // CONDICION PARA AGREGAR O NO LA ,
    if(subTotal > 999){
        /* CONVERTIMOS NUESTRO SUBTOTAL EN STRING
        PARA QUE PODAMOS AGREGARLE UNA SEPARACION*/
        let subTotalArray = subTotal.toString().split('')
        // AGREGAMOS LA , DESPUES DE 3 NUMEROS
        subTotalArray.splice(-3, 0, ',')
        // UNIMOS EL ARRAY Y LO CONVERTIMOS EN STRING
        subTotal = String(subTotalArray.join(''))
    }
    // RETORNAMOS EL SUBTOTAL
    return subTotal
}