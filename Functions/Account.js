// OBTENEMOS NUESTROS BOTONES
const Buttons = document.querySelectorAll(".Sign-In, .Sign-Up, .Form-Account-Continue")
/* OBTENEMOS EL SPAN QUE SERA ANIMADO, EL CUAL SE ENCUENTRA DESTRAS
LOS BOTONES DE INICIAR SESION Y REGISTRARSE*/
const Span = document.querySelector(".Form-Account-Selection span")
// OBTENEMOS LOS CONTENEDORES DE LOS INPUTS A VALIDAR
const Containers = document.querySelectorAll(".Form-Account-Access-Email, .Form-Account-Access-Password")
// OBTENEMOS LOS INPUTS A VALIDAR
const Inputs = document.querySelectorAll("#email, #password")
// OBTENEMOS EL ICONO DE VALIDACION CORRECTA
const Validacion = document.querySelectorAll(".Email-Correct, .Password-Correct")
// CREAMOS UNA EXPRESION REGULAR PARA VALIDAR UN CORREO
const regEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

/* DAMOS ANIMACION AL BOTON DE INICIAR SESION Y CREAR CUENTA 
Y TAMBIEN CAMBIAMOS EL TIPO DE LETRA DE LOS BOTONES*/
Buttons[0].addEventListener("click", () => {
    // CAMBIAMOS EL TITULO DE LA PAGINA
    document.title = "Elec-Shop - Iniciar Sesión"
    Buttons[0].classList.remove("Active")
    Buttons[1].classList.remove("Active")
    Span.classList.remove("Active")
    // REINICIAMOS VALORES DE LOS INPUT
    ResetInputs()
})
Buttons[1].addEventListener("click", () => {
    // CAMBIAMOS EL TITULO DE LA PAGINA
    document.title = "Elec-Shop - Crear Cuenta"
    Buttons[0].classList.add("Active")
    Buttons[1].classList.add("Active")
    Span.classList.add("Active")
    // REINICIAMOS VALORES DE LOS INPUT
    ResetInputs()
})
// VALIDAMOS EL CORREO
Inputs[0].addEventListener("keydown", (e) => {
    // CANCELAMOS EL USO DE LA TECLA TAB
    if(e.keyCode === 9){
        e.preventDefault()
    }else{
        Containers[0].classList.remove("Empty")
        regEx.test(Inputs[0].value) ?  Validacion[0].classList.add("Check") : Validacion[0].classList.remove("Check")
    }
})
// VALIDAMOS LA CONTRASEÑA
Inputs[1].addEventListener("keydown", (e) => {
    // CANCELAMOS EL USO DE LA TECLA TAB
    if(e.keyCode === 9){
        e.preventDefault()
    }else{
        Containers[1].classList.remove("Empty")
        Inputs[1].value.length > 5 ? Validacion[1].classList.add("Check") : Validacion[1].classList.remove("Check")
    }
})
/* VALIDAMOS QUE LOS CAMPOS NO ESTEN VACIOS EN El INPUT
EMAIL EN CASO DE ESTAR VACIOS, AGREGAMOS UNA ANIMACION*/
Buttons[2].addEventListener("click", () => {
    if(Inputs[0].value.length > 0 && regEx.test(Inputs[0].value)){
        Containers[0].classList.add("Active")
        Containers[1].classList.add("Active")
    }else{
        Containers[0].classList.add("Empty")
    }
})
/* VALIDAMOS QUE LOS CAMPOS NO ESTEN VACIOS EN EL INPUT
PASSWORD EN CASO DE ESTAR VACIOS, AGREGAMOS UNA ANIMACION*/
Buttons[2].addEventListener("click", () => {
    Inputs[0].value.length > 0 && Inputs[1].value.length > 5 ? location.href ="../index.html" : Containers[1].classList.add("Empty")
})

function ResetInputs(){
    Inputs[0].value = ""
    Inputs[1].value = ""
    Containers[0].classList.remove("Active")
    Containers[1].classList.remove("Active")
    Validacion[0].classList.remove("Check")
    Validacion[1].classList.remove("Check")
}

