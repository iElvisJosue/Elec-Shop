// OBTENEMOS EL BOTON DE LOS FILTROS POR TARJETA GRAFICA
const categoriesBtnFilterGPU = document.querySelector(".Filter-GPU")
// OBTENEMOS EL BOTON DE LOS FILTROS POR MONITORES
const categoriesBtnFilterMonitor = document.querySelector(".Filter-Monitor")
// OBTENEMOS EL BOTON DE LOS FILTROS POR PROCESADORES
const categoriesBtnFilterCPU = document.querySelector(".Filter-CPU")
// OBTENEMOS EL BOTON DE LOS FILTROS POR MEMORIA RAM
const categoriesBtnFilterRam = document.querySelector(".Filter-Ram")
// OBTENEMOS EL BOTON DE LOS FILTROS POR ALMACENAMIENTO
const categoriesBtnFilterStorage = document.querySelector(".Filter-Storage")
// OBTENEMOS EL BOTON DE LOS FILTROS POR GABINETE
const categoriesBtnFilterTower = document.querySelector(".Filter-Tower")
// OBTENEMOS EL BOTON DE LOS FILTROS POR PLACA/TARJETA MADRE
const categoriesBtnFilterMotherboard = document.querySelector(".Filter-Motherboard")
// OBTENEMOS EL BOTON DE LOS FILTROS POR FUENTES DE PODER
const categoriesBtnFilterPSU = document.querySelector(".Filter-PSU")
// OBTENEMOS EL BOTON DE LOS FILTROS POR SILLAS GAMER
const categoriesBtnFilterChair = document.querySelector(".Filter-Chair")
// OBTENEMOS EL BOTON DE LOS FILTROS POR ENFRIAMIENTO
const categoriesBtnFilterCooler = document.querySelector(".Filter-Cooler")

// OBTENEMOS EL TITULO DE LAS CATEGORIAS
const categoriesTitle = document.querySelector(".Categories-List-Title")
// OBTENEMOS EL CONTENEDOR QUE MOSTRARA LOS PRODUCTOS 
const categoriesProducts = document.querySelector(".Categories-Products")

/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE TARJETAS GRAFICAS (GPU) */
categoriesBtnFilterGPU.addEventListener("click", () => {
    // MOSTRAMOS LAS GRAFICAS
    addGraphic()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE MONITORES */
categoriesBtnFilterMonitor.addEventListener("click", () => {
    // MOSTRAMOS LOS MONITORES
    addMonitor()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE PROCESADORES (CPU)*/
categoriesBtnFilterCPU.addEventListener("click", () => {
    // MOSTRAMOS LOS PROCESADORES
    addCPU()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE MEMORIAS RAM */
categoriesBtnFilterRam.addEventListener("click", () => {
    // MOSTRAMOS LAS MEMORIAS RAM
    addRAM()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE ALMACENAMIENTO (HDD/SSD/M2/NVME) */
categoriesBtnFilterStorage.addEventListener("click", () => {
    // MOSTRAMOS EL ALMACENAMIENTO
    addStorage()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE GABINETES */
categoriesBtnFilterTower.addEventListener("click", () => {
    // MOSTRAMOS LOS GABINETES
    addTower()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE PLACAS/TARJETAS MADRE */
categoriesBtnFilterMotherboard.addEventListener("click", () => {
    // MOSTRAMOS LAS TARJETAS MADRE
    addMotherboard()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE FUENTES DE PODER */
categoriesBtnFilterPSU.addEventListener("click", () => {
    // MOSTRAMOS LAS FUENTES DE PODER
    addPSU()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE SILLAS GAMER */
categoriesBtnFilterChair.addEventListener("click", () => {
    // MOSTRAMOS LAS SILLAS GAMER
    addChair()
})
/* ESTA FUNCION MUESTRA LOS PRODUCTOS EN LA CATEGORIA
DE ENFRIAMIENTO LIQUIDO */
categoriesBtnFilterCooler.addEventListener("click", () => {
    // MOSTRAMOS LOS ENFRIAMIENTOS
    addCooler()
})

/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA TARJETAS GRAFICAS */
function addGraphic(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Tarjetas Gráficas | 9 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    /* CREAMOS UN ARRAY DE OBJETOS CON LOS 
    DETALLES DE CADA  TARJETA GRAFICA */
    const graphicsDetails = [
        {
        image: "../Images/Categories/Products/Grafica1.png",
        page: "Product7.html",
        alt: "Grafica 1",
        name: "MSI - GeForce 210",
        price: "$800 MXN",
        description: "Resolución de hasta 2560 x 1600 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star-outline"></ion-icon>' +
            '<ion-icon name="star-outline"></ion-icon>' +
            ' (12) ',
        btnpage: "Product7.html"
        },
        {
        image: "../Images/Categories/Products/Grafica2.png",
        page: "Product8.html",
        alt: "Grafica 2",
        name: "Gigabyte - GTX 1660",
        price: "$5,000 MXN",
        description: "Resolución de hasta 7680 x 4320 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star-half-outline"></ion-icon>' +
            '<ion-icon name="star-outline"></ion-icon>' +
            ' (81) ',
        btnpage: "Product8.html"
        },
        {
        image: "../Images/Categories/Products/Grafica3.png",
        page: "Product9.html",
        alt: "Grafica 3",
        name: "Gigabyte - RTX 3060",
        price: "$7,000 MXN",
        description: "Resolución de hasta 7680 x 4320 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star-half-outline"></ion-icon>' +
            ' (57) ',
        btnpage: "Product9.html",
        },
        {
        image: "../Images/Categories/Products/Grafica4.png",
        page: "Product10.html",
        alt: "Grafica 4",
        name: "ASUS - RTX 3060 White",
        price: "$6,349 MXN",
        description: "Resolución de hasta 7680 x 4320 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star-outline"></ion-icon>' +
            ' (57) ',
        btnpage: "Product10.html",
        },
        {
        image: "../Images/Categories/Products/Grafica5.png",
        page: "Product11.html",
        alt: "Grafica 5",
        name: "Gigabyte - RTX 4090",
        price: "$35,350 MXN",
        description: "Resolución de hasta 7680 x 4320 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            ' (1) ',
        btnpage: "Product11.html",
        },
        {
        image: "../Images/Categories/Products/Grafica6.png",
        page: "Product12.html",
        alt: "Grafica 6",
        name: "Gigabyte - RX 6600",
        price: "$3,500 MXN",
        description: "Resolución de hasta 7680 x 4320 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            ' (124) ',
        btnpage: "Product12.html",
        },
        {
        image: "../Images/Categories/Products/Grafica7.png",
        page: "Product13.html",
        alt: "Grafica 7",
        name: "MSI - RX 6650 XT",
        price: "$6,400 MXN",
        description: "Resolución de hasta 7680 x 4320 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star-half-outline"></ion-icon>' +
            ' (32) ',
        btnpage: "Product13.html",
        },
        {
        image: "../Images/Categories/Products/Grafica8.png",
        page: "Product14.html",
        alt: "Grafica 8",
        name: "MSI - RX 7600",
        price: "$6,449 MXN",
        description: "Resolución de hasta 7680 x 4320 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star-outline"></ion-icon>' +
            '<ion-icon name="star-outline"></ion-icon>' +
            '<ion-icon name="star-outline"></ion-icon>' +
            ' (5) ',
        btnpage: "Product14.html", 
        },
        {
        image: "../Images/Categories/Products/Grafica9.png",
        page: "Product2.html",
        alt: "Grafica 9",
        name: "Sapphire Pulse - RX 6600",
        price: "$3,450 MXN",
        description: "Resolución de hasta 7680 x 4320 pixeles.",
        rate: '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            '<ion-icon name="star"></ion-icon>' +
            ' (203) ',
        btnpage: "Product2.html",
        }
    ]
    // RECORREMOS EL ARRAY DE OBJETOS
    graphicsDetails.forEach(Element => {
        // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
        const graphics = 
            `<div class="Categories-Products-Item">` +
                `<a class="Categories-Products-Item-Image" href="../Pages/Products/${Element.page}">` +
                    `<img src="${Element.image}" alt="${Element.alt}">`+
                `</a>` +
                `<div class="Categories-Products-Item-Name-And-Price">` +
                    `<p>${Element.name}</p>` +
                    `<p>${Element.price}</p>` +
                `</div>` +
                `<div class="Categories-Products-Item-Description">
                    ${Element.description}
                </div>` +
                `<div class="Categories-Products-Item-Rate">
                    ${Element.rate}
                </div>` +
                `<div class="Categories-Products-Item-Button">` +
                    `<button onclick="window.location.href='../Pages/Products/${Element.btnpage}'">Comprar</button>` +
                `</div>` +
                `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
            `</div>`
        // AGREGAMOS EL NUEVO CONTENIDO
        categoriesProducts.innerHTML += graphics
    })
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA MONITORES */
function addMonitor(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Monitores | 2 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    /* CREAMOS UN ARRAY DE OBJETOS CON LOS 
    DETALLES DE CADA  MONITOR */
    const monitorDetails = [
        {
            image: "../Images/Categories/Products/Monitor1.png",
            page: "Product1.html",
            alt: "Monitor 1",
            name: "Monitor Curvo - G34WQC-A",
            price: "$7,300 MXN",
            description: "Resolución: 3440 x 1440 pixeles | 144Hz",
            rate: '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star-half-outline"></ion-icon>' +
                ' (13) ',
            btnpage: "Product1.html"
        },
        {
            image: "../Images/Categories/Products/Monitor2.png",
            page: "Product15.html",
            alt: "Monitor 2",
            name: "Monitor - Gigabyte G24F 2",
            price: "$2,800 MXN",
            description: "Resolución: 1920 x 1080 Pixeles | 165Hz",
            rate: '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                ' (13) ',
            btnpage: "Product15.html"
        }
    ]
    // RECORREMOS EL ARRAY DE OBJETOS
    monitorDetails.forEach(Element => {
        // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
        const monitor = 
            `<div class="Categories-Products-Item">` +
                `<a class="Categories-Products-Item-Image" href="../Pages/Products/${Element.page}">` +
                    `<img src="${Element.image}" alt="${Element.alt}">`+
                `</a>` +
                `<div class="Categories-Products-Item-Name-And-Price">` +
                    `<p>${Element.name}</p>` +
                    `<p>${Element.price}</p>` +
                `</div>` +
                `<div class="Categories-Products-Item-Description">
                    ${Element.description}
                </div>` +
                `<div class="Categories-Products-Item-Rate">
                    ${Element.rate}
                </div>` +
                `<div class="Categories-Products-Item-Button">` +
                    `<button onclick="window.location.href='../Pages/Products/${Element.btnpage}'">Comprar</button>` +
                `</div>` +
                `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
            `</div>`
        // AGREGAMOS EL NUEVO CONTENIDO
        categoriesProducts.innerHTML += monitor
    })
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA PROCESADORES */
function addCPU(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Procesadores | 1 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
    const cpu = 
    `<div class="Categories-Products-Item">` +
        `<a class="Categories-Products-Item-Image" href="../Pages/Products/Product17.html">` +
            `<img src="../Images/Categories/Products/Procesador.png" alt="Procesador">`+
        `</a>` +
        `<div class="Categories-Products-Item-Name-And-Price">` +
            `<p>` +
                'Procesador - Ryzen 5 5600G' +
            `</p>` +
            `<p>` +
                `$1,939 MXN` +
            `</p>` +
        `</div>` +
        `<div class="Categories-Products-Item-Description">` +
            `AMD | Gráficos Radeon 7 | S-AM4, 3.90GHz, Six-Core`+
        `</div>` +
        `<div class="Categories-Products-Item-Rate">` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star-half-outline"></ion-icon>` +
            ` (19) `+
        `</div>` +
        `<div class="Categories-Products-Item-Button">` +
            `<button onclick="window.location.href='../Pages/Products/Product17.html'">Comprar</button>` +
        `</div>` +
        `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
    `</div>`
    // AGREGAMOS EL NUEVO CONTENIDO
    categoriesProducts.innerHTML += cpu
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA MEMORIA RAM */
function addRAM(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Memorias RAM | 1 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
    const ram = 
    `<div class="Categories-Products-Item">` +
        `<a class="Categories-Products-Item-Image" href="../Pages/Products/Product19.html">` +
            `<img src="../Images/Categories/Products/RAM.png" alt="RAM">`+
        `</a>` +
        `<div class="Categories-Products-Item-Name-And-Price">` +
            `<p>` +
                `Kit RAM - XPG Spectrix` +
            `</p>` +
            `<p>` +
                `$749 MXN` +
            `</p>` +
        `</div>` +
        `<div class="Categories-Products-Item-Description">` +
            `D50 RGB DDR4, 3200MHz, 16GB (2 x 8GB)` +
        `</div>` +
        `<div class="Categories-Products-Item-Rate">` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            ` (123) `+
        `</div>` +
        `<div class="Categories-Products-Item-Button">` +
            `<button onclick="window.location.href='../Pages/Products/Product19.html'">Comprar</button>` +
        `</div>` +
        `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
    `</div>`
    // AGREGAMOS EL NUEVO CONTENIDO
    categoriesProducts.innerHTML += ram
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA ALMACENAMIENTO */
function addStorage(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Almacenamiento | 2 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    const storageDetails = [
        {
            image: "../Images/Categories/Products/Almacenamiento1.png",
            page: "Product4.html",
            alt: "Almacenamiento 1",
            name: "DDI - Seagate Barracuda 3.5",
            price: "$789 MXN",
            description: "2TB | SATA III | 6 Gbit/s | 7200RPM",
            rate: '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                ' (13) ',
            btnpage: "Product4.html"
        },
        {
            image: "../Images/Categories/Products/Almacenamiento2.png",
            page: "Product20.html",
            alt: "Almacenamiento 2",
            name: "SSD | Samsung 980 PRO",
            price: "$1,810 MXN",
            description: "NVMe | 500GB | PCI Express 4.0 | M.2",
            rate: '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                '<ion-icon name="star"></ion-icon>' +
                ' (8) ',
            btnpage: "Product20.html"
        }
    ]
    // RECORREMOS EL ARRAY DE OBJETOS
    storageDetails.forEach(Element => {
        // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
        const storage = 
        `<div class="Categories-Products-Item">` +
            `<a class="Categories-Products-Item-Image" href="../Pages/Products/${Element.page}">` +
                `<img src="${Element.image}" alt="${Element.alt}">`+
            `</a>` +
            `<div class="Categories-Products-Item-Name-And-Price">` +
                `<p>${Element.name}</p>` +
                `<p>${Element.price}</p>` +
            `</div>` +
            `<div class="Categories-Products-Item-Description">
                ${Element.description}
            </div>` +
            `<div class="Categories-Products-Item-Rate">
                ${Element.rate}
            </div>` +
            `<div class="Categories-Products-Item-Button">` +
                `<button onclick="window.location.href='../Pages/Products/${Element.btnpage}'">Comprar</button>` +
            `</div>` +
            `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
        `</div>`
        // AGREGAMOS EL NUEVO CONTENIDO
        categoriesProducts.innerHTML += storage
    })
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA GABINETES */
function addTower(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Gabinetes | 1 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
    const tower = 
    `<div class="Categories-Products-Item">` +
        `<a class="Categories-Products-Item-Image" href="../Pages/Products/Product5.html">` +
            `<img src="../Images/Categories/Products/Gabinete.png" alt="Gabinete">`+
        `</a>` +
        `<div class="Categories-Products-Item-Name-And-Price">` +
            `<p>` +
                `Gabinete - Aerocool HIVE-G-BK-V1` +
            `</p>` +
            `<p>` +
                `$909 MXN` +
            `</p>` +
        `</div>` +
        `<div class="Categories-Products-Item-Description">` +
            `Con ventana | Midi-Tower | ATX/micro | ATX/Mini-ITX` +
        `</div>` +
        `<div class="Categories-Products-Item-Rate">` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            ` (45) `+
        `</div>` +
        `<div class="Categories-Products-Item-Button">` +
            `<button onclick="window.location.href='../Pages/Products/Product5.html'">Comprar</button>` +
        `</div>` +
        `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
    `</div>`
    // AGREGAMOS EL NUEVO CONTENIDO
    categoriesProducts.innerHTML += tower
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA PLACA MADRES */
function addMotherboard(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Tarjetas Madre | 1 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
    const motherboard = 
    `<div class="Categories-Products-Item">` +
        `<a class="Categories-Products-Item-Image" href="../Pages/Products/Product16.html">` +
            `<img src="../Images/Categories/Products/Placa.png" alt="Tarjeta Madre">`+
        `</a>` +
        `<div class="Categories-Products-Item-Name-And-Price">` +
            `<p>` +
                `Tarjeta M. - Gigabyte A520M` +
            `</p>` +
            `<p>` +
                `$1,149 MXN` +
            `</p>` +
        `</div>` +
        `<div class="Categories-Products-Item-Description">` +
            `Con ventana | Midi-Tower | ATX/micro | ATX/Mini-ITX` +
        `</div>` +
        `<div class="Categories-Products-Item-Rate">` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star-half-outline"></ion-icon>` +
            ` (1) `+
        `</div>` +
        `<div class="Categories-Products-Item-Button">` +
            `<button onclick="window.location.href='../Pages/Products/Product16.html'">Comprar</button>` +
        `</div>` +
        `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
    `</div>`
    // AGREGAMOS EL NUEVO CONTENIDO
    categoriesProducts.innerHTML += motherboard
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA FUENTES DE PODER */
function addPSU(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Fuentes de Poder | 1 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
    const psu = 
    `<div class="Categories-Products-Item">` +
        `<a class="Categories-Products-Item-Image" href="../Pages/Products/Product18.html">` +
            `<img src="../Images/Categories/Products/PSU.png" alt="Fuente de Poder">`+
        `</a>` +
        `<div class="Categories-Products-Item-Name-And-Price">` +
            `<p>` +
                `Fuente - XPG PYLON 80` +
            `</p>` +
            `<p>` +
                `$949 MXN` +
            `</p>` +
        `</div>` +
        `<div class="Categories-Products-Item-Description">` +
            `Potencia nominal: 650 W | 80 PLUS Bronce` +
        `</div>` +
        `<div class="Categories-Products-Item-Rate">` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star-outline"></ion-icon>` +
            ` (23) `+
        `</div>` +
        `<div class="Categories-Products-Item-Button">` +
            `<button onclick="window.location.href='../Pages/Products/Product18.html'">Comprar</button>` +
        `</div>` +
        `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
    `</div>`
    // AGREGAMOS EL NUEVO CONTENIDO
    categoriesProducts.innerHTML += psu
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA SILLAS GAMER */
function addChair(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Sillas Gamer | 1 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
    const chair = 
    `<div class="Categories-Products-Item">` +
        `<a class="Categories-Products-Item-Image" href="../Pages/Products/Product6.html">` +
            `<img src="../Images/Categories/Products/Silla.png" alt="Silla Gamer">`+
        `</a>` +
        `<div class="Categories-Products-Item-Name-And-Price">` +
            `<p>` +
                `Silla Gamer - ROG Destrier Ergo` +
            `</p>` +
            `<p>` +
                `$8,669 MXN` +
            `</p>` +
        `</div>` +
        `<div class="Categories-Products-Item-Description">` +
            `Marca ASUS | Hasta 150Kg` +
        `</div>` +
        `<div class="Categories-Products-Item-Rate">` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star-half-outline"></ion-icon>` +
            ` (53) `+
        `</div>` +
        `<div class="Categories-Products-Item-Button">` +
            `<button onclick="window.location.href='../Pages/Products/Product6.html'">Comprar</button>` +
        `</div>` +
        `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
    `</div>`
    // AGREGAMOS EL NUEVO CONTENIDO
    categoriesProducts.innerHTML += chair
}
/* ESTA FUNCCION MUESTRA TODOS LOS PRODUCTOS DE 
LA CATEGORIA ENFRIAMIENTO LIQUIDO */
function addCooler(){
    // CAMBIAMOS EL TITULO DE LAS CATEGORIAS
    categoriesTitle.innerHTML = "Enfriamientos | 1 Productos"
    // VACIAMOS EL CONTENIDO DE PRODUCTOS TOTALES
    categoriesProducts.innerHTML = ""
    // CREAMOS EL NUEVO COTENIDO Y LO ALMACENAMOS
    const cooler = 
    `<div class="Categories-Products-Item">` +
        `<a class="Categories-Products-Item-Image" href="../Pages/Products/Product3.html">` +
            `<img src="../Images/Categories/Products/Cooler.png" alt="Enfriamiento Liquido">`+
        `</a>` +
        `<div class="Categories-Products-Item-Name-And-Price">` +
            `<p>` +
                `Game Factor - Enfriamiento Liquido` +
            `</p>` +
            `<p>` +
                `$789 MXN` +
            `</p>` +
        `</div>` +
        `<div class="Categories-Products-Item-Description">` +
            `Modelo LQG501 | 1x 120mm` +
        `</div>` +
        `<div class="Categories-Products-Item-Rate">` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star-half-outline"></ion-icon>` +
            ` (4) `+
        `</div>` +
        `<div class="Categories-Products-Item-Button">` +
            `<button onclick="window.location.href='../Pages/Products/Product3.html'">Comprar</button>` +
        `</div>` +
        `<button class="Categories-Products-Item-Favorite"><ion-icon name="heart-outline"></ion-icon></button>` +
    `</div>`
    // AGREGAMOS EL NUEVO CONTENIDO
    categoriesProducts.innerHTML += cooler
}