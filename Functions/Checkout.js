// OBTENEMOS TODOS LOS CAMPOS A VALIDAR
const inputsCheckout = document.querySelectorAll("#NombreCliente, #ApellidosCliente, #DireccionCliente, #CiudadCliente, #CPCliente, #NumeroCliente, #CorreoCliente, #CorreoTarjeta, #TitularTarjeta, #NumeroTarjeta, #ExpiracionTarjeta, #CVVTarjeta")
// OBTENEMOS EL BOTON DE PAGAR
const btnToPay = document.querySelector(".Button-ToPay")
// EXPRESION REGULAR PARA SOLO LETRAS
const regExpName = /^[a-zA-Z\s]+$/
// EXPRESION REGULAR PARA SOLO NUMEROS
const regExpNum = /^[0-9]+$/
// CREAMOS UNA EXPRESION REGULAR PARA VALIDAR UN CORREO
const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

/* AGREGAMOS LA FUNCION AL BOTON DE PAGAR 
QUE VALIDA LOS CAMPOS */
btnToPay.addEventListener("click", () => {
    inputsCheckout.forEach(Element => {
        // CHECAMOS QUE EL VALOR DEL CAMPO NO ESTE VACIO
        if(Element.value.length > 0){
            if(Element.id === "NombreCliente"){
                regExpName.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "ApellidosCliente"){
                regExpName.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "NumeroCliente"){
                regExpNum.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "CPCliente"){
                regExpNum.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "CorreoCliente"){
                regExpEmail.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "CorreoTarjeta"){
                regExpEmail.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "TitularTarjeta"){
                regExpName.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "NumeroTarjeta"){
                regExpNum.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "ExpiracionTarjeta"){
                regExpNum.test(Element.value) ? true : Element.classList.add("Error")
            }
            if(Element.id === "CVVTarjeta"){
                regExpNum.test(Element.value) ? true : Element.classList.add("Error")
            }
        }
        // EN CASO DE SER UN CAMPO VACIO, LE ASIGNAMOS UNA CLASE
        else{
            Element.classList.add("Error")
        }
    })
})

/* AGREGAMOS LA FUNCION A LOS CAMPOS
QUE ELIMINAN LAS CLASES DE ADVERTENCIAS */
inputsCheckout.forEach(Element => {
    Element.addEventListener("keyup", () => {
        Element.classList.remove("Error")
        Element.classList.remove("Caution")
    })
})
