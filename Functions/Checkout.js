// OBTENEMOS TODOS LOS CAMPOS A VALIDAR
const inputsCheckout = document.querySelectorAll("#NombreCliente, #ApellidosCliente, #DireccionCliente, #CiudadCliente, #CPCliente, #NumeroCliente, #CorreoCliente, #CorreoTarjeta, #TitularTarjeta, #NumeroTarjeta, #ExpiracionTarjeta, #CVVTarjeta")
// OBTENEMOS EL BOTON DE PAGAR
const btnToPay = document.querySelector(".Button-ToPay")
// OBTENEMOS LA NOTIFICACION PARA LOS INPUTS
const productNotification = document.querySelector(".Product-Notification")
// EXPRESION REGULAR PARA SOLO LETRAS
const regExpName = /^[a-zA-Z\s]+$/
// EXPRESION REGULAR PARA SOLO NUMEROS
const regExpNum = /^[0-9]+$/
// CREAMOS UNA EXPRESION REGULAR PARA VALIDAR UN CORREO
const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

/* AGREGAMOS LA FUNCION AL BOTON DE PAGAR 
QUE VALIDA LOS CAMPOS */
btnToPay.addEventListener("click", () => {
    // VARIABLE PARA CONTAR INPUTS VALIDADOS
    let i = 0;
    inputsCheckout.forEach(Element => {
        Element.value.length > 0 && Element.className === "Success" ? i++ : false 
    })
    console.log(i);
    if(i === 12){
        productNotification.innerHTML = `¡Compra exitosa! <ion-icon name="checkmark-circle-outline"></ion-icon>`
        productNotification.classList.add("Success")
        setTimeout(() => {
            productNotification.classList.remove("Success")
            window.location.href = "../Pages/Categories.html"
        }, 3000);
    }else{
        productNotification.innerHTML = `¡Todos los campos son requeridos! <ion-icon name="warning-outline"></ion-icon>`
        productNotification.classList.add("Error")
        setTimeout(() => {
            productNotification.classList.remove("Error")
        }, 3000);
    }
})

/* AGREGAMOS LA FUNCION A LOS CAMPOS
QUE ELIMINAN LAS CLASES DE ADVERTENCIAS */
inputsCheckout.forEach(Element => {
    Element.addEventListener("keyup", () => {
        // VALIDAMOS TODOS LOS CAMPOS
        Element.id === "NombreCliente" && Element.value.length > 0 ? checkInput(0, 1) : false
        Element.id === "ApellidosCliente" && Element.value.length > 0 ? checkInput(1, 1) : false
        if(Element.id === "DireccionCliente" && Element.value.length > 0){
            checkInput(2, 4)
        }else if(Element.id === "DireccionCliente" && !Element.value.length > 0){
            Element.classList.remove("Success")
            Element.classList.add("Error")
        }
        if(Element.id === "CiudadCliente" && Element.value.length > 0){
            checkInput(3, 4)
        }else if(Element.id === "CiudadCliente" && !Element.value.length > 0){
            Element.classList.remove("Success")
            Element.classList.add("Error")
        }
        Element.id === "CPCliente" && Element.value.length > 0 ? checkInput(4, 2) : false
        Element.id === "NumeroCliente" && Element.value.length > 0 ? checkInput(5, 2) : false
        Element.id === "CorreoCliente" && Element.value.length > 0 ? checkInput(6, 3) : false
        Element.id === "CorreoTarjeta" && Element.value.length > 0 ? checkInput(7, 3) : false
        Element.id === "TitularTarjeta" && Element.value.length > 0 ? checkInput(8, 1) : false
        Element.id === "NumeroTarjeta" && Element.value.length > 0 ? checkInput(9, 2) : false
        Element.id === "ExpiracionTarjeta" && Element.value.length > 0 ? checkInput(10, 2) : false
        Element.id === "CVVTarjeta" && Element.value.length > 0 ? checkInput(11, 2) : false
    })
})
// CON ESTA FUNCION SE VALIDAN LOS CAMPO
function checkInput(index, value){
    if(value === 1){
        if(regExpName.test(inputsCheckout[index].value)){
            inputsCheckout[index].classList.remove("Error")
            inputsCheckout[index].classList.add("Success")
        }else{
            inputsCheckout[index].classList.remove("Success")
            inputsCheckout[index].classList.add("Error")
        }
    }
    if(value === 2){
        if(regExpNum.test(inputsCheckout[index].value)){
            inputsCheckout[index].classList.remove("Error")
            inputsCheckout[index].classList.add("Success")
        }else{
            inputsCheckout[index].classList.remove("Success")
            inputsCheckout[index].classList.add("Error")
        }
    }
    if(value === 3){
        if(regExpEmail.test(inputsCheckout[index].value)){
            inputsCheckout[index].classList.remove("Error")
            inputsCheckout[index].classList.add("Success")
        }else{
            inputsCheckout[index].classList.remove("Success")
            inputsCheckout[index].classList.add("Error")
        }
    }
    if(value === 4){
        inputsCheckout[index].classList.remove("Error")
        inputsCheckout[index].classList.add("Success")
    }
}


