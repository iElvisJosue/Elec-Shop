// OBTENEMOS LA ETIQUETA QUE CONTIENE LA IMAGEN DEL PRODUCTO
const productImage = document.querySelector(".Product-Image")
// OBTENEMOS LA ETIQUETA QUE CONTIENE EL NOMBRE DE NUESTRO PRODUCTO
const productName = document.querySelector(".Product-Name")
// OBTENEMOS EL CONTENEDOR DE LA VALORACION
const productRate = document.querySelector(".Product-Description-Title-Important-Rate")
// OBTENEMOS LA ETIQUETA QUE CONTIENE EL PRECIO DEL PRODUCTO
const productPrice = document.querySelector(".Product-Price")
// OBTENEMOS LA ETIQUETA QUE CONTIENE EL TEXTO DE MSI
const productMSI = document.querySelector(".Product-MSI")
// OBTENEMOS LA ETIQUETA QUE CONTIENE LOS ITEMS RESTANTES
const productLeft = document.querySelector(".Product-ItemsLeft")
// OBTENEMOS LA LISTA DE DETALLES
const productDetails = document.querySelector(".Product-Details-Text")
// OBTENEMOS LA LISTA DE ESPECIFICACIONES
const productEspecifications = document.querySelector(".Product-Specifications-Text")

/* CREAMOS UN ARREGLO DE OBJETOS QUE CONTIENE TODOS LOS PRODUCTOS */
const products = [
    {
        image: `../Images/Product/Product1.png`,
        alt: `Monitor Curvo - G34WQC-A`,
        name: `Monitor Curvo - G34WQC-A`,
        rate: `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star-outline"></ion-icon>` +
            ` (13) `,
        price: `$7,300 MXN`,
        msi: `O hasta en 6 x $1,216 MXN (Meses sin intereses)`,
        piece: `10 piezas`,
        details: `<li>El Monitor Gamer Curvo Gigabyte G34WQC-A cuenta con una pantalla de 34 pulgadas y resolución Ultra-Wide Quad HD, lo que permite disfrutar de imágenes nítidas y detalladas. Su diseño curvo ofrece un ángulo de visión amplio e inmersivo, mientras que su rating de curvatura de 1500R proporciona una experiencia visual más envolvente.</li>` +
        `<li>Este monitor tiene dos puertos HDMI y dos DisplayPorts para conectar múltiples dispositivos a la vez. Además, es compatible con tecnología AMD FreeSync para evitar el desgarro en la imagen durante los juegos intensos.</li>` +
        `<li>La inclinación ajustable del monitor varía entre -5° y 20°, permitiendo encontrar el ángulo perfecto según las necesidades del usuario. También se puede ajustar la altura hasta en 10 cm gracias al soporte desmontable incorporado.</li>` +
        `<li>Con una frecuencia máxima de actualización de 144 Hz y tiempo de respuesta ultra rápido (1 ms), este monitor garantiza una experiencia fluida sin interrupciones ni retrasos molestos. La tecnología Flicker-Free reduce la fatiga ocular causada por parpadeos constantes en la pantalla.</li>` +
        `<li>Además, este dispositivo viene equipado con altavoces integrados (2 W) para mejorar aún más la calidad sonora durante los juegos o películas. El consumo energético estimado es moderado (80 W) pero eficiente gracias a su cobertura sRGB típica del 120%.</li>` +
        `<li>En cuanto a sus dimensiones físicas: mide aproximadamente unos 808 mm x 488 mm x11mm sin base; mientras que si se le agrega esta última medida unos ~234mm adicionales alcanzando así unas medidas totales cercanas a los ~808x488x234mm. El peso total del paquete es de 12,1 kg y su embalaje se presenta en una caja estándar.</li>` +
        `<li>En resumen, el Monitor Gamer Curvo Gigabyte G34WQC-A ofrece un rendimiento excepcional para los jugadores más exigentes que buscan calidad visual e inmersión sin sacrificar la comodidad ni la eficiencia energética.</li>`,
        especifications: `<li><p>Colores de pantalla</p><p>16.7M</p></li>` +
        `<li><p>Tipo de pantalla</p><p>VA</p></li>` +
        `<li><p>Máxima velocidad de actualización</p><p>144Hz</p></li>` +
        `<li><p>Resolución de la pantalla</p><p>3440 x 1440 Pixeles</p></li>` +
        `<li><p>Versión HDMI</p><p>2.0</p></li>` +
        `<li><p>Número de puertos HDMI</p><p>2</p></li>` +
        `<li><p>Versión de DisplayPort</p><p>1.4</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p><p>2</p></li>`
    },
    {
        image: `../Images/Product/Product2.png`,
        alt: `Sapphire Pulse - RX 6600`,
        name: `Sapphire Pulse - RX 6600`,
        rate: `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            ` (203) `,
        price: `$3,450 MXN`,
        msi: `O hasta en 6 x $575 MXN (Meses sin intereses)`,
        piece: `6 piezas`,
        details: `<li>La tarjeta de video Sapphire Pulse AMD Radeon RX 6600, modelo 11310-01-20G, es compatible con sistemas operativos Linux y Windows. Cuenta con una velocidad de transferencia de datos de hasta 14 Gbit/s y una altura de 40 mm. El tipo de memoria del adaptador gráfico es GDDR6 y dispone de un total de 28 ray accelerators.</li>` +
        `<li>El producto no cuenta con sintonizador integrado para TV pero tiene un ancho de datos que alcanza los 128 bits. La memoria discreta del adaptador gráfico asciende a los 8 GB en color negro mate.</li>` +
        `<li>En cuanto a conectividad, la tarjeta posee un puerto HDMI y tres DisplayPorts para conectar múltiples pantallas simultáneamente. Además, su tecnología Dual-X permite mantener el equipo refrigerado durante largas sesiones sin sobrecalentamiento gracias al enfriamiento activo.</li>` +
        `<li>Esta tarjeta admite resoluciones máximas ultra HD (7680 x4320 píxeles) lo cual garantiza imágenes nítidas y detalladas en todo momento. Su familia procesadores gráficos son AMD mientras que su consumo energético se sitúa en torno a los140 W.</li>` +
        `<li>Por otro lado, esta versión incluye soporte para realidad virtual (RV), así como Infinity cache:32 MB; aunque no está diseñada para proceso paralelo ni CUDA por lo que puede presentar limitaciones si se requiere trabajar bajo estas condiciones específicas.</li>` +
        `<li>Su tamaño compacto le permite ser instalada fácilmente ya que ocupa dos ranuras únicamente siendo sus dimensiones exactas:120mm x193mm . Para alimentación eléctrica necesita conexión suplementaria mediante cable PCI Express4.0de1x8-pinesy suministro mínimo recomendado al sistema debe ser de 500 W.</li>` +
        `<li>En resumen, la tarjeta Sapphire Pulse AMD Radeon RX 6600 es una opción ideal para aquellos usuarios que buscan un rendimiento gráfico óptimo en sus equipos. Con su capacidad de procesamiento y memoria dedicada, esta tarjeta ofrece imágenes detalladas y fluidas incluso en las aplicaciones más exigentes.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>53.8 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>303 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>127.3 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.1</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express 4.0</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.4</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>3</p></li>`,
    },
    {
        image: `../Images/Product/Product3.png`,
        alt: `Game Factor - Enfriamiento Liquido`,
        name: `Game Factor - Enfriamiento Liquido`,
        rate: `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star-half-outline"></ion-icon>` +
            ` (4) `,
        price: `$789 MXN`,
        msi: `O hasta en 6 x $131 MXN (Meses sin intereses)`,
        piece: `2 piezas`,
        details: `<li>El enfriador líquido Game Factor LQG501 es un dispositivo interno diseñado para reducir la temperatura de los procesadores en ordenadores. Con una dimensión de 120 mm de profundidad y 157 mm de ancho, este sistema cuenta con un diámetro del ventilador de 12 cm que permite alcanzar un máximo flujo de aire de hasta 70 cfm.</li>` +
        `<li>Este modelo está equipado con iluminación LED en color azul, verde y rojo, lo que le proporciona atractivo visual al equipo donde se instale. Además, su nivel sonoro no supera los 21 dB cuando funciona a alta velocidad.</li>` +
        `<li>El Game Factor LQG501 soporta varios sockets o zócalos para procesadores como el LGA1150 (Zócalo H3), LGA1151 (Zócalo H4), LGA1155 (Socket H2), entre otros. Asimismo, tiene una vida útil media estimada en unas 30000 horas antes presentar fallos técnicos.</li>` +
        `<li>En cuanto a sus características físicas, este enfriador líquido posee una altura total aproximada de unos 27 mm y puede ser instalado adecuadamente sobre el procesador del ordenador. El producto viene acabado en negro mate y ofrece una velocidad máxima rotacional del ventilador cercana a las1500 RPMs.</li>` +
        `<li>Con todo esto dicho podemos afirmar que el Game Factor LQG501 es una opción viable si buscas mejorar la refrigeración interna tu PC sin sacrificar estética ni rendimiento técnico.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>27 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>120 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>157 mm</p></li>` +
        `<li><p>Iluminación LED</p>`/*--*/+`<p>Sí</p></li>` +
        `<li><p>Iluminación de color</p>`/*--*/+`<p>Azul, Verde, Rojo</p></li>` +
        `<li><p>Velocidad de rotación (máx.)</p>`/*--*/+`<p>1500 RPM</p></li>` +
        `<li><p>Nivel de ruido (alta velocidad)</p>`/*--*/+`<p>21 dB</p></li>` +
        `<li><p>Máximo flujo de aire</p>`/*--*/+`<p>70 cfm2</p></li>`,
    },
    {
        image: `../Images/Product/Product4.png`,
        alt: `DDI - Seagate Barracuda 3.5`,
        name: `DDI - Seagate Barracuda 3.5`,
        rate: `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            `<ion-icon name="star"></ion-icon>` +
            ` (13) `,
        price: `$789 MXN`,
        msi: `O hasta en 6 x $131 MXN (Meses sin intereses)`,
        piece: `4 piezas`,
        details: `<li>El Disco Duro Interno Seagate Barracuda 3.5'' 2TB ST2000DM008 es una unidad de disco duro diseñada para su uso en PC. Con un promedio de latencia de 6 ms y una velocidad de rotación del disco duro de 7200 RPM, este dispositivo ofrece una rápida transferencia de datos a través de la interfaz Serial ATA III con una velocidad máxima teórica de hasta 6 Gbit/s.</li>` +
        `<li>Con un tamaño físico estándar para unidades internas (tamaño: 3.5''), el Seagate Barracuda tiene capacidad suficiente para almacenar grandes cantidades de información gracias a sus impresionantes dos terabytes (2000 GB) disponibles. Además, cuenta con un buffer interno generoso que alcanza los 256 MB.</li>` +
        `<li>La unidad ha sido construida pensando en la durabilidad y resistencia al desgaste diario, soportando golpes fuera del funcionamiento hasta los 350G y vibraciones operativas menores a los .25G; mientras que durante el funcionamiento puede soportar impactos menores pero más frecuentes llegando hasta los80G.</li>` +
        `<li>Para asegurar su correcta funcionalidad se recomienda utilizarlo dentro del intervalo óptimo definido por las temperaturas entre cero grados Celsius como mínimo y sesenta grados Celsius como máximo tanto en ambiente operativo como no operativo; además debe ser protegido contra humedad relativa mayor al noventa porciento cuando esté siendo utilizado o menor al cinco porciento si se encuentra guardado sin usar.</li>` +
        `<li>En cuanto a dimensiones físicas, mide aproximadamente unos101.6 mm x20.2 mm x147mmy pesa cerca415 g lo cual le permite adaptarse fácilmente a cualquier espacio disponible dentro del equipo.</li>` +
        `<li>En resumen, el Disco Duro Interno Seagate Barracuda 3.5'' 2TB ST2000DM008 es una unidad de disco duro confiable y resistente que ofrece un alto rendimiento en la transferencia de datos con capacidad suficiente para almacenar grandes cantidades de información sin comprometer su durabilidad o estabilidad operativa a largo plazo.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>20.2 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>147 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>101.6 mm</p></li>` +
        `<li><p>Peso</p>`/*--*/+`<p>415 g</p></li>` +
        `<li><p>Capacidad</p>`/*--*/+`<p>2000 GB</p></li>` +
        `<li><p>Velocidad de rotación</p>`/*--*/+`<p>7200 RPM</p></li>` +
        `<li><p>Interfaz</p>`/*--*/+`<p>Serial ATA III</p></li>` +
        `<li><p>Velocidad de transferencia</p>`/*--*/+`<p>6 Gbit/s</p></li>` +
        `<li><p>Tamaño de búfer</p>`/*--*/+`<p>256 MB</p></li>`,
    },
    {
        image: `../Images/Product/Product5.png`,
        alt: `Gabinete - Aerocool HIVE-G-BK-V1`,
        name: `Gabinete - Aerocool HIVE-G-BK-V1`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            ` (45) `,
        price: `$909 MXN`,
        msi: `O hasta en 6 x $151 MXN (Meses sin intereses)`,
        piece: `3 piezas`,
        details: `<li>El gabinete Aerocool con ventana es una torre de tamaño medio compatible con placas base ATX, Micro ATX y Mini-ITX. Tiene un grosor de material de 0.5 mm y está fabricado en acrilonitrilo butadieno estireno (ABS) y SPCC.</li>` +
        `<li>Cuenta con dos ventiladores frontales instalados de 160 mm cada uno, pero puede soportar hasta tres ventiladores frontales en total. También tiene la capacidad para instalar dos ventiladores inferiores secundarios de 120 mm cada uno y dos ventiladores superiores adicionales también de 120 mm.</li>` +
        `<li>La torre dispone además del espacio suficiente para alojar radiadores compatibles con tamaños de ventilador frontal que van desde los 120 a los 360mm así como un radiador trasero compatible únicamente con el diámetro más pequeño: el modelo correspondiente al diámetro estándarizado por la industria informática denominado "12 cm".</li>` +
        `<li>En cuanto a su conectividad externa, cuenta con un puerto USB tipo A USB3.1 Gen1 adicional respecto al modelo anteriormente lanzado bajo esta marca comercial; asimismo posee otro puerto USB2.0/3.1 junto a entrada/salida audio/micrófono.</li>` +
        `<li>Tiene una ventana lateral transparente que permite ver el interior del equipo sin necesidad abrirlo mientras se encuentra encendido o apagado gracias a sus indicadores LED integrados tanto en botones como puertos periféricos.</li>` +
        `<li>Además incluye filtro anti-polvo para mantener limpio su interior evitando acumulación excesiva polvo u otros residuos potencialmente dañinos para componentes internos tales como tarjetas gráficas o discos duros mecánicos tradicionales.</li>` +
        `<li>El gabinete Aerocool con ventana tiene una altura de 457 mm, un ancho de 206 mm y una profundidad de 380 mm. Pesa aproximadamente unos cinco kilogramos y cuenta con capacidad para alojar hasta siete ranuras de expansión así como dos bahías para discos duros o unidades SSD en formato estándarizado por la industria informática: el modelo correspondiente a los tamaños "2.5" y "3.5"". La fuente de alimentación se ubica en la parte inferior del equipo mientras que su factor compatible es ATX.</li>` +
        `<li>En resumen, este gabinete ofrece múltiples opciones tanto para ventiladores como radiadores lo cual permite al usuario personalizar su sistema según sus necesidades específicas; además incluye filtro anti-polvo integrado junto a indicadores LED visibles desde fuera del equipo gracias a su panel lateral transparente.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>457 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>380 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>206 mm</p></li>` +
        `<li><p>Peso</p>`/*--*/+`<p>5 kg</p></li>` +
        `<li><p>Factor de forma</p>`/*--*/+`<p>Midi-Tower</p></li>` +
        `<li><p>Cristal Templado</p>`/*--*/+`<p>Sí</p></li>` +
        `<li><p>Tarjetas madre soportadas</p>`/*--*/+`<p>ATX, Micro ATX, Mini-ITX</p></li>` +
        `<li><p>Ventiladores frontales instalados</p>`/*--*/+`<p>2x 160 mm</p></li>` +
        `<li><p>Ventiladores traseros instalados</p>`/*--*/+`<p>1x 120 mm</p></li>`
    },
    {
        image: `../Images/Product/Product6.png`,
        alt: `Silla Gamer - ROG Destrier Ergo`,
        name: `Silla Gamer - ROG Destrier Ergo`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-half-outline'></ion-icon>` +
            ` (53) `,
        price: `$8,669 MXN`,
        msi: `O hasta en 6 x $1,444 MXN (Meses sin intereses)`,
        piece: `8 piezas`,
        details: `<li>La silla gamer ASUS ROG Destrier Ergo, modelo 90GC0120-MSG010, cuenta con ajuste de inclinación en un rango de ángulo que va desde los 90 hasta los 135 grados. Su cilindro de gas pertenece a la clase 4 y su diseño ergonómico ofrece una plancha cómoda para el usuario. Además, esta silla dispone de reposabrazos y ruedas giratorias.</li>` +
        `<li>En cuanto a sus dimensiones, la altura mínima es de 134 cm y el respaldo tiene un color gris. La altura se puede ajustar hasta en 10 cm y la profundidad del asiento es de 50 cm. El marco está fabricado en aluminio y el ancho del asiento alcanza los 57 cm.</li>` +
        `<li>El peso total de esta silla es de aproximadamente 24.6 kg, mientras que el paquete completo pesa alrededor de 30.9 kg. El tipo de asiento utilizado es malla transpirable para mayor comodidad durante largas sesiones gaming o trabajo prolongado frente al ordenador.</li>` +
        `<li>Además, este producto incluye una almohada lumbar para brindar apoyo adicional a la espalda baja del usuario. Tiene capacidad máxima para soportar un peso corporal máximo recomendado por el fabricante: hasta 150 kg</li>` +
        `<li>Esta silla cuenta con cinco ruedas que permiten moverse fácilmente sobre diferentes superficies sin dañar ni rayar el piso. También posee respaldo ajustable e incorpora un reposacabezas acolchado para mayor confort durante las horas dedicadas a jugar o trabajar sentado.</li>` +
        `<li>Los reposabrazos son ajustables en tres dimensiones (3D), lo cual permite adaptarse a las necesidades y preferencias individuales del usuario. El diámetro de las ruedas es de 7.5 cm y la base tiene un color negro.</li>` +
        `<li>El tipo de reposabrazos utilizado en esta silla gamer ASUS ROG Destrier Ergo es duro, lo que proporciona mayor estabilidad al apoyar los brazos sobre ellos durante largas sesiones frente al ordenador. Tanto el asiento como el respaldo tienen un color negro uniforme.</li>` +
        `<li>En resumen, la silla gamer ASUS ROG Destrier Ergo ofrece una experiencia cómoda para aquellos usuarios que pasan muchas horas sentados frente al ordenador jugando o trabajando. Su diseño ergonómico, ajustes personalizables y materiales duraderos hacen de esta silla una opción ideal para quienes buscan comodidad y soporte adecuado mientras disfrutan de sus actividades favoritas en línea.</li>`,
        especifications: `<li><p>Anchura del asiento</p>`/*--*/+`<p>57 mm</p></li>` +
        `<li><p>Altura (min.)</p>`/*--*/+`<p>134 cm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>840 mm</p></li>` +
        `<li><p>Peso</p>`/*--*/+`<p>24.6 kg</p></li>` +
        `<li><p>Profundidad del asiento</p>`/*--*/+`<p>50 cm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>720 mm</p></li>` +
        `<li><p>Almohada lumbar</p>`/*--*/+`<p>Sí</p></li>` +
        `<li><p>Máximo peso (capacidad)</p>`/*--*/+`<p>150 kg</p></li>` +
        `<li><p>Número de ruedas</p>`/*--*/+`<p>5</p></li>`,
    },
    {
        image: `../Images/Product/Product7.png`,
        alt: `MSI - GeForce 210`,
        name: `MSI - GeForce 210`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-outline'></ion-icon>` +
            `<ion-icon name='star-outline'></ion-icon>` +
            ` (12) `,
        price: `$800 MXN`,
        msi: `O hasta en 6 x $133 MXN (Meses sin intereses)`,
        piece: `1 piezas`,
        details: `<li>La tarjeta de video MSI GeForce 210, modelo N210-MD1G/D3, es un adaptador gráfico con una capacidad máxima de resolución de hasta 2560 x 1600 pixeles. Esta tarjeta cuenta con una versión OpenGL de 3.1 y dispone de un puerto DVI-D y otro VGA (D-Sub). El tipo de enfriamiento que utiliza es activo.</li>` +
        `<li>El procesador gráfico que integra esta tarjeta es NVIDIA® GeForce® 210 y su profundidad alcanza los 8,4 cm. No posee puertos DVI-I pero sí RAMDAC a una velocidad de 400 MHz. Su altura se sitúa en torno a los 1,8 cm mientras que su ancho mide aproximadamente unos14,5 cm.</li>` +
        `<li>En cuanto a la memoria del adaptador gráfico, este dispositivo tiene una velocidad del reloj estimada en unos1000 MHz y emplea GDDR3 como tipo de memoria. La frecuencia del procesador ronda los589 MHz mientras que el tipo interfaz utilizado por esta tarjeta es PCI Express2.0.</li>` +
        `<li>Esta GPU también incluye CUDA para acelerar las aplicaciones multimedia más exigentes así como HDMI e HDCP para garantizar la protección contra copias no autorizadas durante la transmisión digital entre dispositivos compatibles mediante cable HDMI vía conexión única integrada al equipo informático o portátil donde esté instalado.</li>` +
        `<li>Además, cuenta con un ancho datos limitado a64 bity cumple con la normativa VersiónHDMI:1.3a.No obstante,no está diseñada para ser compatiblecon equipos Mac.Lafamilia depocesadoresdegráficosque incorporaesNVIDIA,ydisponeunpuertoHDMIadicionalsituadoenlaparte posterior de la tarjeta. La versión DirectX que soporta es 10.1, lo cual permite una experiencia visual más fluida y realista en videojuegos y aplicaciones multimedia avanzadas.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>180 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>840 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>1450 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>1.13a</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express 2.0</p></li>`,
    },
    {
        image: `../Images/Product/Product8.png`,
        alt: `Gigabyte - GTX 1660`,
        name: `Gigabyte - GTX 1660`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-half-outline'></ion-icon>` +
            `<ion-icon name='star-outline'></ion-icon>` +
            ` (81) `,
        price: `$5,000 MXN`,
        msi: `O hasta en 6 x $833 MXN (Meses sin intereses)`,
        piece: `34 piezas`,
        details: `<li>Olvídate de sacrificar la calidad y velocidad durante un livestreaming. Obtén increíble rendimiento y calidad de imagen cuando realizas transmisiones en Twitch y Youtube.​</li>` +
        `<li>Complementa tu experiencia de juego con GeForce Experience™, ya que podrás realizar y compartir videos, capturas de pantalla y transmisiones en vivo con tus amigos, sin olvidar que podrás optimizar la configuración de tus juegos por medio de los drivers GeForce.</li>` +
        `<li>Este potente modo fotográfico te permite capturar fotografías de los juegos a nivel profesional. Captura y comparte tus experiencias de juego por medio de fotografías de 360 grados, HDR y en estéreo.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>40 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>224 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>121 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.0b</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express x16 3.0</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.4</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p>`/*--*/+`<p>3</p></li>`,
    },
    {
        image: `../Images/Product/Product9.png`,
        alt: `Gigabyte - RTX 3060`,
        name: `Gigabyte - RTX 3060`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-half-outline'></ion-icon>` +
            ` (57) `,
        price: `$7,000 MXN`,
        msi: `O hasta en 6 x $1,166 MXN (Meses sin intereses)`,
        piece: `14 piezas`,
        details: `<li>La tarjeta de video Gigabyte NVIDIA GeForce RTX 3060 GV-N3060GAMINGOC-12 2.0 cuenta con un sistema de enfriamiento activo y está disponible en color negro y acero inoxidable. Dispone de dos DisplayPorts, viene acompañada por un manual de usuario e incluye una fuente mínima recomendada para el sistema de 550 W. No dispone del FireStream.</li>` +
        `<li>El tipo de memoria que utiliza esta tarjeta gráfica es GDDR6, mientras que la capacidad discreta del adaptador gráfico es de 12 GB. La tecnología CUDA también se encuentra presente en este modelo, lo cual permite realizar cálculos complejos a través del procesamiento paralelo.</li>` +
        `<li>En cuanto al embalaje, la tarjeta viene presentada en una caja y su diámetro ventilador mide unos 8 cm aproximadamente. Además, requiere un conector suplementario para energía (1x8 pines) y no tiene Dual Link DVI.</li>` +
        `<li>Este dispositivo incorpora tres ventiladores Windforce3X diseñados especialmente para mantener baja la temperatura durante largas sesiones gaming o tareas intensivas como edición multimedia o renderizado profesional.</li>` +
        `<li>La velocidad máxima alcanzable por su reloj interno es de hasta los 1837 MHz gracias a sus núcleos CUDA integrados; además soporta resoluciones máximas ultra HD hasta los impresionantes valores:7680 x4320 pixeles distribuidos entre cuatro pantallas simultaneamente.</li>` +
        `<li>Entre las características adicionales encontramos compatibilidad con NVIDIA G-SYNC así como iluminación LED multicolor personalizable mediante software RGB Fusion2. También ofrece conectividad HDMI versión 2.1 junto a dos puertos HDMI disponibles para conectar monitores externos u otros dispositivos.</li>` +
        `<li>La tarjeta de video Gigabyte NVIDIA GeForce RTX 3060 GV-N3060GAMINGOC-12 2.0 tiene una profundidad de 282 mm, un ancho de banda máximo para la memoria del adaptador gráfico de hasta los 360 GB/s y no cuenta con sintonizador integrado para TV. Su altura es de tan solo 41mm lo que permite su instalación en cajas compactas o mini torres.</li>` +
        `<li>El tipo de interfaz utilizado por esta tarjeta gráfica es PCI Express x16 versión 4.0; además soporta DirectX versión Ultimate así como OpenGL versión 4.6 y DisplayPort versión1.4a . El factor forma Full Height/Full Length (FH/FL) junto a iluminación LED multicolor personalizable mediante software RGB Fusion2 hacen que sea una opción ideal tanto para gamers exigentes como profesionales creativos que buscan rendimiento sin compromisos ni limitaciones técnicas en sus proyectos más ambiciosos..</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>41 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>282 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>117 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.1</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>2</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express x16 4.0</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.4a</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p>`/*--*/+`<p>2</p></li>`,
    },
    {
        image: `../Images/Product/Product10.png`,
        alt: `ASUS - RTX 3060 White`,
        name: `ASUS - RTX 3060 White`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-outline'></ion-icon>` +
            ` (57) `,
        price: `$6,349 MXN`,
        msi: `O hasta en 6 x $1,058 MXN (Meses sin intereses)`,
        piece: `2 piezas`,
        details: `<li>La tarjeta gráfica ASUS NVIDIA Dual GeForce RTX 3060 White OC es un dispositivo de alta calidad que ofrece una gran cantidad de características y especificaciones técnicas. Con una altura de 38 mm y un peso del paquete de 898 g, esta tarjeta gráfica cuenta con la familia de procesadores de gráficos NVIDIA.</li>` +
        `<li>Además, el aumento en la velocidad del reloj del procesador alcanza los 1837 MHz gracias a su tecnología CUDA. La memoria discreta del adaptador es de 8 GB GDDR6, lo que permite al usuario disfrutar sin problemas juegos exigentes o aplicaciones intensivas.</li>` +
        `<li>El color negro elegante se combina perfectamente con cualquier configuración estética mientras que el tipo de embalaje viene en caja para mayor protección durante el transporte. El sistema cooling technology ASUS Axial-tech mantiene las temperaturas bajo control incluso cuando se utiliza por largos períodos.</li>` +
        `<li>Con tres puertos DisplayPort y uno HDMI versión 2.1, este modelo admite hasta cuatro pantallas simultáneamente con resolución máxima ultra HD (7680 x4320 pixeles). Además, tiene soporte HDCP versión:2.3 y OpenGL versión:4.6</li>` +
        `<li>En cuanto a sus dimensiones físicas, posee dos ranuras PCIe ocupando solo unos pocos centímetros más allá del tamaño estándar ATX; siendo su profundidad total sólo ligeramente superior a los modelos anteriores llegando a medir tan solo123mmx200mmx38mm.</li>` +
        `<li>Este producto requiere un suministro mínimo recomendado para sistemas alimentados por fuentes no menores a650 W debido al consumo energético necesario para mantener todas estas funciones activas.</li>` +
        `<li>Por último cabe destacar que incluye conectores suplementarios como son 1x8-pines para asegurar un suministro de energía estable y confiable. En resumen, la tarjeta gráfica ASUS NVIDIA Dual GeForce RTX 3060 White OC es una excelente opción para aquellos usuarios que buscan rendimiento y calidad en su equipo informático.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>38 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>123 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>200 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.1</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express 4.0</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.4a</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p>`/*--*/+`<p>3</p></li>`,
    },
    {
        image: `../Images/Product/Product11.png`,
        alt: `Gigabyte - RTX 4090`,
        name: `Gigabyte - RTX 4090`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            ` (1) `,
        price: `$35,350 MXN`,
        msi: `O hasta en 6 x $5,981 MXN (Meses sin intereses)`,
        piece: `5 piezas`,
        details: `<li>La tarjeta de video Gigabyte NVIDIA GeForce RTX 4090 GV-N4090GAMING OC-24 es una opción potente para aquellos que buscan un rendimiento excepcional en sus juegos y aplicaciones. Esta tarjeta no es compatible con el proceso paralelo, pero cuenta con una interfaz PCI Express 4.0 y soporta la versión DirectX 12.0.</li>` +
        `<li>Con una máxima resolución de hasta 7680 x 4320 píxeles, esta tarjeta ofrece imágenes nítidas y detalladas en cualquier pantalla compatible. Además, su profundidad de 340 mm permite acomodarla fácilmente dentro del gabinete.</li>` +
        `<li>Esta tarjeta también cuenta con iluminación LED personalizable para agregar un toque extra al diseño general del equipo. La versión OpenGL disponible es la 4.6 y viene empaquetada en caja junto con todos los accesorios necesarios.</li>` +
        `<li>El HDCP está presente en esta tarjeta lo que garantiza la protección contra copias no autorizadas durante la transmisión de contenido multimedia digital desde dispositivos como reproductores Blu-ray o consolas de juego.</li>` +
        `<li>La velocidad del reloj de memoria alcanza los impresionantes 2100 MHz mientras que hay tres puertos DisplayPort disponibles (versión1.4) así como un puerto HDMI (versión2.1). Con sus núcleos CUDA integrados, se pueden realizar tareas complejas más rápidamente gracias a su capacidad para procesar múltiples hilos simultáneamente.</li>` +
        `<li>El enfriamiento activo asegura que esta GPU funcione sin problemas incluso bajo cargas pesadas mientras mantiene las temperaturas adecuadas mediante el uso eficiente de ventiladores dobles ubicados estratégicamente sobre ella.</li>` +
        `<li>En cuanto al color, este modelo viene en una combinación de negro y gris que se adapta a cualquier estilo de construcción. Con un ancho de 150,2 mm y una altura de 75,2 mm, esta tarjeta es compatible con el factor Full-Height/Full-Length (FH/FL) para adaptarse a diferentes gabinetes.</li>` +
        `<li>La memoria del adaptador gráfico es GDDR6X y cuenta con una capacidad impresionante de 24 GB mientras que la cantidad máxima de pantallas por tarjeta es cuatro. No hay sintonizador integrado ni Dual Link DVI disponible pero su conectividad HDMI permite conectar dispositivos adicionales como televisores o monitores externos.</li>` +
        `<li>Finalmente, esta tarjeta requiere un solo conector suplementario tipo 16-pin para funcionar correctamente lo cual hace más fácil su instalación sin requerir demasiados cables adicionales. En resumen, la Gigabyte NVIDIA GeForce RTX 4090 GV-N4090GAMING OC-24 ofrece rendimiento excepcional junto con características avanzadas para los usuarios más exigentes.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>75.2 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>340 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>150.2 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.1</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express 4.0</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.4</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p>`/*--*/+`<p>3</p></li>`,
    },
    {
        image: `../Images/Product/Product12.png`,
        alt: `Gigabyte - RX 6600`,
        name: `Gigabyte - RX 6600`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            ` (124) `,
        price: `$3,500 MXN`,
        msi: `O hasta en 6 x $583 MXN (Meses sin intereses)`,
        piece: `10 piezas`,
        details: `<li>La tarjeta de video Gigabyte AMD Radeon RX 6600 Eagle 8G, GV-R66EAGLE-8GD es un componente informático que se presenta en una caja y cuenta con dos puertos HDMI. Su bracket height es Full-Height (FH) y su ancho de banda de memoria máximo alcanza los 224 GB/s. La tecnología utilizada para el enfriamiento del dispositivo es GIGABYTE WINDFORCE 3X.</li>` +
        `<li>Esta tarjeta admite la versión DisplayPort:1.4a y utiliza memoria gráfica tipo GDDR6. En cuanto a sus dimensiones, tiene una profundidad de 282 mm y un color negro como acabado estético. El manual del usuario viene incluido en el paquete.</li>` +
        `<li>El número total de tuberías disponibles son tres, lo cual permite conectar hasta cuatro pantallas por cada tarjeta de video gracias a su capacidad discreta adaptador gráfico con una memoria RAM dedicada de ocho gigabytes (GB). La altura máxima permitida para esta pieza es de solo 41mm.</li>` +
        `<li>En términos técnicos, la versión DirectX soportada por este modelo llega hasta la última actualización disponible:12 Ultimate; no obstante, Dual Link DVI no está presente entre las opciones ofrecidas al comprador final.</li>` +
        `<li>Los ventiladores integrados tienen un diámetro aproximado de ocho centímetros cada uno y constan en total tres unidades dentro del sistema completo. No hay sintonizador TV incorporado pero sí ofrece soporte para proceso paralelo aunque limitadamente debido a ciertas restricciones propias del hardware utilizado.</li>` +
        `<li>Para alimentar correctamente esta unidad se requiere un suministro mínimo energía al sistema equivalente a quinientos vatios (500W), mientras que los conectores suplementarios necesarios son únicamente uno de ocho pines.</li>` +
        `<li>El ancho total del dispositivo es de 113 mm y su versión OpenGL alcanza la última actualización disponible:4.6. La resolución máxima que puede soportar esta tarjeta gráfica llega hasta los 7680 x 4320 pixeles, lo cual garantiza una calidad visual excepcional en cualquier tipo de contenido multimedia.</li>` +
        `<li>La familia de procesadores utilizada por este modelo corresponde a AMD y el tipo enfriamiento utilizado para mantener las temperaturas adecuadas durante su uso es activo. El número total de DisplayPorts disponibles son dos mientras que la interfaz se presenta como PCI Express x8 4.0.</li>` +
        `<li>Finalmente, cabe destacar que no cuenta con tecnología CUDA pero sí ofrece un aumento significativo velocidad reloj del procesador (2491 MHz) gracias al sistema integrado en el hardware denominado AMD FreeSync.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>41 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>282 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>113 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.1</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>2</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express x8 4.0</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.4a</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p>`/*--*/+`<p>2</p></li>`,
    },
    {
        image: `../Images/Product/Product13.png`,
        alt: `MSI - RX 6650 XT`,
        name: `MSI - RX 6650 XT`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-half-outline'></ion-icon>` +
            ` (32) `,
        price: `$6,400 MXN`,
        msi: `O hasta en 6 x $1,066 MXN (Meses sin intereses)`,
        piece: `28 piezas`,
        details: `<li>La tarjeta de video MSI AMD Radeon RX 6650 XT Mech OC 8GB es una opción ideal para aquellos que buscan un rendimiento óptimo en sus juegos y aplicaciones. Esta tarjeta está lista para realidad virtual (RV), lo que significa que puede manejar fácilmente los requisitos gráficos exigentes de la RV.</li>` +
        `<li>El tipo de embalaje utilizado para esta tarjeta es una caja, lo que garantiza su seguridad durante el transporte. Además, cuenta con una memoria del adaptador discreto de 8 GB y utiliza enfriamiento activo para mantener las temperaturas bajo control.</li>` +
        `<li>En cuanto a su consumo energético, esta tarjeta requiere hasta 175 W. Puede soportar hasta cuatro pantallas al mismo tiempo gracias a su interfaz PCI Express 4.0 y tiene una velocidad máxima de reloj de memoria de 1750 MHz.</li>` +
        `<li>Esta tarjeta pertenece a la familia de procesadores gráficos AMD y ofrece soporte HDCP. También viene equipada con tres puertos DisplayPort y un puerto HDMI versión 2.1.</li>` +
        `<li>Además, cuenta con dos ventiladores MSI TORX Fan 3.0 para mejorar aún más el enfriamiento del sistema mientras se mantiene silencioso en funcionamiento normal.</li>` +
        `<li>Con respecto a la resolución máxima admitida por esta tarjeta, alcanza los impresionantes 7680 x4320 píxeles; también admite FreeSync™de AMD®para reducir el desgarro o tearing visual cuando juegas tus títulos favoritos.</li>` +
        `<li>Es importante destacar que este producto no es compatible con proceso paralelo ni CUDA pero sí incluye un suministro mínimo recomendado al sistema:500Watts . El color predominante en diseño es negro aunque presenta detalles plateados sutiles e incorpora un conector de energía suplementario 8-pines.</li>` +
        `<li>En resumen, la tarjeta de video MSI AMD Radeon RX 6650 XT Mech OC 8GB es una excelente opción para aquellos que buscan rendimiento y calidad en sus juegos y aplicaciones gráficas más exigentes. Con su potente procesador gráfico, memoria discreta de adaptador GDDR6 y enfriamiento activo eficiente, esta tarjeta puede manejar fácilmente las demandas del mundo virtual moderno sin comprometer el desempeño o la estabilidad del sistema.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>38 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>182 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>129 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.1</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express 4.0</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.4a</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p>`/*--*/+`<p>3</p></li>`,
    },
    {
        image: `../Images/Product/Product14.png`,
        alt: `MSI - RX 7600`,
        name: `MSI - RX 7600`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-outline'></ion-icon>` +
            `<ion-icon name='star-outline'></ion-icon>` +
            ` (5) `,
        price: `$6,449 MXN`,
        msi: `O hasta en 6 x $1,074 MXN (Meses sin intereses)`,
        piece: `42 piezas`,
        details: `<li>El MSI AMD Radeon RX 7600 MECH 2X CLASSIC 8G OC es un adaptador gráfico con memoria GDDR6 y tecnología de enfriamiento MSI TORX Fan 3.0. En modo de juego, la velocidad del procesador puede aumentar hasta los 2280 MHz y cuenta con una altura de tan solo 47 mm.</li>` +
        `<li>Este dispositivo tiene un puerto HDMI y tres DisplayPorts, así como un conector suplementario de energía de ocho pines. Se requiere un suministro mínimo de energía al sistema de al menos 550 W para su correcto funcionamiento.</li>` +
        `<li>Con núcleos CUDA integrados en el procesador gráfico, este adaptador también admite HDCP y ofrece una resolución máxima impresionante de hasta 7680 x 4320 pixeles en cuatro pantallas simultáneas por tarjeta.</li>` +
        `<li>La familia del procesador gráfico es AMD, mientras que la velocidad del reloj se sitúa en torno a los18000 MHz. Además, incluye características adicionales como FreeSync para mejorar aún más la calidad visual durante el uso intensivo.</li>` +
        `<li>En cuanto a las dimensiones físicas, esta tarjeta mide aproximadamente125mm x666mmx235g (profundidad x ancho x peso). La versión OpenGL disponible es4.6y DirectX12.0para garantizar compatibilidad total entre sistemas operativos diferentes.</li>` +
        `<li>En definitiva, el MSI AMD Radeon RX7600MECH2XCLASSIC8GOC representa una excelente opción para aquellos usuarios que buscan rendimiento óptimo combinado con alta eficiencia térmica gracias a sus dos ventiladores activos incorporados sin comprometer demasiado espacio dentro del equipo informático donde se instale.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>46 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>125 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>666 mm</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.1</p></li>` +
        `<li><p>Puertos HDMI</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>Tipo de interfaz</p>`/*--*/+`<p>PCI Express 4.0</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.4</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p>`/*--*/+`<p>3</p></li>`,
    },
    {
        image: `../Images/Product/Product15.png`,
        alt: `Monitor - Gigabyte G24F 2`,
        name: `Monitor - Gigabyte G24F 2`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            ` (13) `,
        price: `$2,800 MXN <strike>3,300</strike>`,
        msi: `O hasta en 6 x $466 MXN (Meses sin intereses)`,
        piece: `12 piezas`,
        details: `<li>El monitor Gamer Gigabyte G24F 2 LED de 23.8 pulgadas cuenta con una gama de colores del 95% y un tamaño de pixel de 0.2745 x 0.2745 mm, lo que permite una excelente calidad visual en Full HD. Con un ancho total (con soporte) de 541 mm, este dispositivo incluye salidas para auriculares y tecnología Flicker free para reducir la fatiga ocular.</li>` +
        `<li>La diagonal de pantalla es de 60.5 cm y se incluye una guía rápida para su configuración inicial. La versión del conector USB es la última disponible: USB tipo C Gen1 (3.1 Gen1), contando además con dos puertos downstream USB tipo C disponibles.</li>` +
        `<li>Con un ancho sin base de solo 54,1 cm, el ajuste en altura está presente permitiendo adaptarse a las necesidades individuales del usuario mientras disfruta al máximo los contenidos HDR gracias a su compatibilidad nativa.</li>` +
        `<li>Con un ancho sin base de solo 54,1 cm, el ajuste en altura está presente permitiendo adaptarse a las necesidades individuales del usuario mientras disfruta al máximo los contenidos HDR gracias a su compatibilidad nativa.</li>` +
        `<li>Cuenta también con dos entradas HDMI y uno DisplayPort v1.2 así como DDC/CI integrado entre otras características técnicas relevantes tales como tiempo respuesta ultra rápido e incluso modo juego especializado según cada título específico o género jugable.</li>` +
        `<li>Su peso sin base es ligero alcanzando tan sólo los tres kilogramos pero si se desea utilizarlo sobre superficies elevadas existe la opción VESA compatible mediante montaje adicional externo opcional.</li>` +
        `<li>En cuanto a consumo energético promedio ronda los valores habituales dentro del mercado gamer actual situándose en 17.5 W, mientras que su consumo energético inactivo es de solo 0.5W y apagado se reduce a tan sólo 0.3W.</li>` +
        `<li>El color del producto es negro con detalles rojos destacando la marca Gigabyte sobre el soporte incluido; siendo compatible con NVIDIA G-SYNC o AMD FreeSync según las necesidades individuales de cada usuario gamer.</li>` +
        `<li>La resolución nativa alcanza los 1920 x1080 pixeles lo cual permite una visualización detallada sin perder calidad ni definición alguna incluso al acercarse mucho a la pantalla.</li>` +
        `<li>En definitiva, este monitor Gamer Gigabyte G24F2 LED ofrece un rendimiento excepcional para aquellos usuarios gamers más exigentes gracias a sus características técnicas avanzadas y diseño moderno e innovado</li>`,
        especifications: `<li><p>Colores de la pantalla</p>`/*--*/+`<p>16.7M</p></li>` +
        `<li><p>Tipo de pantalla</p>`/*--*/+`<p>IPS</p></li>` +
        `<li><p>Máxima velocidad de actualización</p>`/*--*/+`<p>165Hz</p></li>` +
        `<li><p>Resolución de la pantalla</p>`/*--*/+`<p>1920 x 1080 Pixeles</p></li>` +
        `<li><p>Versión HDMI</p>`/*--*/+`<p>2.0</p></li>` +
        `<li><p>Número de puertos HDMI</p>`/*--*/+`<p>2</p></li>` +
        `<li><p>Versión de DisplayPort</p>`/*--*/+`<p>1.2</p></li>` +
        `<li><p>Cantidad de DisplayPorts</p>`/*--*/+`<p>1</p></li>`,
    },
    {
        image: `../Images/Product/Product16.png`,
        alt: `Tarjeta Madre - Gigabyte A520M`,
        name: `Tarjeta Madre - Gigabyte A520M`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-half-outline'></ion-icon>` +
            ` (1) `,
        price: `$1,149 MXN <strike>1,359</strike>`,
        msi: `O hasta en 6 x $191  MXN (Meses sin intereses)`,
        piece: `5 piezas`,
        details: `<li>La tarjeta madre Gigabyte Micro ATX A520M DS3H (REV. 1.0) es un componente para PC que cuenta con una versión de BIOS del sistema de gestión SMBIOS 2.7 y controladores incluidos. Esta tarjeta madre está diseñada para procesadores AMD y tiene un tamaño de memoria BIOS de 128 MB/s, así como una versión ACPI 5.0.</li>` +
        `<li>Entre sus características se encuentra el conector de ventilador CPU, la cantidad de puertos USB 3.0 (3.1 Gen 1), el número de puertos HDMI y los canales de memoria dual-channel, entre otros aspectos técnicos importantes.</li>` +
        `<li>Además, esta tarjeta madre dispone de un conector M.2 (M), conectores SATA III y PCI Express x16 Gen (3.x) ranuras; soporta tipos DDR4-SDRAM compatibles en DIMM slots e incorpora Ethernet LAN RJ-45 puerto único.</li>` +
        `<li>También ofrece salidas para auriculares, audio digital óptico salida única y soporte gráfico discreto junto a HDCP integrado; admite hasta cinco discos duros diferentes al mismo tiempo gracias a su capacidad RAID nivel cero/uno/diez.</li>` +
        `<li>En cuanto a las dimensiones físicas, la profundidad mide unos 244 mm mientras que el ancho alcanza también esa misma medida exactamente; además posee cuatro ranuras RAM disponibles sin buffer ni ECC pero sí compatible con versiones UEFI AMI BIOS actualizables mediante DMI interfaz administrativa escritorio vía software especializado o firmware propio según sea necesario por parte del usuario final.</li>` +
        `<li>Esta placa base no viene equipada con Wi-Fi pero sí permite conectar dispositivos externos mediante varios puertos tipo A USB 3.0 (Gen1). También cuenta con botón Clear CMOS y jumper para limpieza de la memoria RAM, así como un conector eléctrico ATX (24 pines) y otro EATX.</li>` +
        `<li>En resumen, la tarjeta madre Gigabyte Micro ATX A520M DS3H es una opción adecuada para aquellos usuarios que buscan una placa base compatible con procesadores AMD Ryzen 3/5/7/9 Threadripper Pro de tercera generación. Ofrece múltiples características técnicas importantes a tener en cuenta al momento de adquirirla.</li>`,
        especifications: `<li><p>Profundidad</p>`/*--*/+`<p>244 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>244 mm</p></li>` +
        `<li><p>Número de puertos HDMI</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>PCI Express x16 Gen (3.x) ranuras</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>Ranuras x16 PCI Express</p>`/*--*/+`<p>1</p></li>` +
        `<li><p>PCI Express x1 (Gen 3.x) ranuras</p>`/*--*/+`<p>2</p></li>` +
        `<li><p>Factor de forma</p>`/*--*/+`<p>Micro ATX</p></li>` +
        `<li><p>Cantidad total de conectores SATA</p>`/*--*/+`<p>4</p></li>` +
        `<li><p>Número de ranuras de memoria</p>`/*--*/+`<p>4</p></li>` +
        `<li><p>Tipos de memoria compatibles</p>`/*--*/+`<p>DDR4-SDRAM</p></li>` +
        `<li><p>Sockets de procesador soportados</p>`/*--*/+`<p>Socket AM4</p></li>` +
        `<li><p>Interfaces de disco de almacenamiento soportados</p>`/*--*/+`<p>M.2,PCI Express 3.0,SATA</p></li>`,
    },
    {
        image: `../Images/Product/Product17.png`,
        alt: `Procesador - Ryzen 5 5600G`,
        name: `Procesador - Ryzen 5 5600G`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-half-outline'></ion-icon>` +
            ` (19) `,
        price: `$1,939 MXN <strike>2,214</strike>`,
        msi: `O hasta en 6 x $323  MXN (Meses sin intereses)`,
        piece: `26 piezas`,
        details: `<li>El procesador AMD Ryzen 5 5600G con Gráficos Radeon 7 es un componente de escritorio fabricado por AMD. Este procesador cuenta con una litografía de 7 nm y tiene seis núcleos, lo que permite ejecutar múltiples tareas simultáneamente. Además, el número de filamentos del procesador es de doce.</li>` +
        `<li>La velocidad del reloj de memoria que admite este procesador es de hasta 3200 MHz y la frecuencia base del mismo alcanza los 3,9 GHz. El tipo de memoria DDR4-SDRAM está soportado por esta unidad central.</li>` +
        `<li>En cuanto a su adaptabilidad en placas madre, el modelo presenta entradas PCI Express versión 3.0 y canales Dual-channel para la memoria RAM.</li>` +
        `<li>Este procesador incluye gráficos integrados en placa (AMD Radeon Graphics) con una frecuencia base operativa a bordo de hasta1900 MHz. La potencia térmica designada (TDP) se encuentra en los valores habituales para componentes similares:65 W configurable hacia abajo o TDP-down configurable:45W; mientras que también puede ser configurado al alza como TDP-up configurable:65W</li>` +
        `<li>Por otro lado, el caché L3 presente en este modelo asciende a16 MB,y su socket AM4 le permite conectarse fácilmente a cualquier placa compatible sin necesidad adicionalde hardware especializado.El paquete incluye ademásun cooler adecuado para mantener temperaturas óptimas durante su uso prolongado.</li>` +
        `<li>En resumen,el Procesador AMD Ryzen 5 5600G ofrece gran capacidad multitarea graciasa susnúcleos e hilos adicionalesy brindauna solución todo-en-unocon gráficas integradaspara aquellos usuariosque buscan un rendimiento sólido y confiable en su equipo de escritorio.</li>`,
        especifications: `<li><p>Familia de procesador</p>`/*--*/+`<p>AMD Ryzen 5</p></li>` +
        `<li><p>Modelo del procesador</p>`/*--*/+`<p>5600G</p></li>` +
        `<li><p>Frecuencia del procesador</p>`/*--*/+`<p>3.9 GHz</p></li>` +
        `<li><p>Socket de procesador</p>`/*--*/+`<p>Socket AM4</p></li>` +
        `<li><p>Número de núcleos</p>`/*--*/+`<p>6</p></li>`,
    },
    {
        image: `../Images/Product/Product18.png`,
        alt: `Fuente de Poder - XPG PYLON 80`,
        name: `Fuente de Poder - XPG PYLON 80`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star-outline'></ion-icon>` +
            ` (23) `,
        price: `$949 MXN <strike>1,179</strike>`,
        msi: `O hasta en 6 x $158 MXN (Meses sin intereses)`,
        piece: `58 piezas`,
        details: `<li>La Fuente de Poder XPG Pylon 80 PLUS Bronze es un componente diseñado para suministrar energía eléctrica a los equipos informáticos. Con una potencia nominal de 650 W, esta fuente cuenta con funciones de protección contra sobrecorriente, sobretensión, sobrevoltaje, sobrecalentamiento y cortocircuito que garantizan la seguridad del equipo conectado.</li>` +
        `<li>El conector ATX (24 pines) y el EPS power connector (4+4 pin) permiten conectar la fuente a la tarjeta madre del PC. Además, dispone de cinco conectores SATA para alimentar discos duros u otros dispositivos periféricos.</li>` +
        `<li>Con un tamaño compacto y color negro discreto, esta fuente se adapta fácilmente al diseño estético del equipo. Su ubicación superior permite una mejor ventilación gracias al diámetro de su ventilador interno de 12 cm.</li>` +
        `<li>Esta fuente cumple con las certificaciones CB(62368+60950), TUV, cTUVus, CE, FCC , BSMI , CCC , RCM , EAC RoHS y NOM; así como también posee la Certificación 80 PLUS Bronze que asegura una eficiencia energética mínima del 82% en cargas típicas.</li>` +
        `<li>En resumen: La Fuente de Poder XPG Pylon 80 PLUS Bronze es un dispositivo confiable y seguro que proporciona suficiente potencia para satisfacer las necesidades básicas en cualquier computadora personal o profesional.</li>`,
        especifications: `<li><p>Potencia nominal</p>`/*--*/+`<p>650 W</p></li>` +
        `<li><p>Certificación</p>`/*--*/+`<p>80 PLUS BRONZE</p></li>` +
        `<li><p>Diámetro de ventilador</p>`/*--*/+`<p>120 mm</p></li>` +
        `<li><p>Factor de forma</p>`/*--*/+`<p>ATX</p></li>` +
        `<li><p>Pines</p>`/*--*/+`<p>24-pin ATX</p></li>` +
        `<li><p>Número de conectores SATA</p>`/*--*/+`<p>7</p></li>`,
    },
    {
        image: `../Images/Product/Product19.png`,
        alt: `Kit RAM - XPG Spectrix`,
        name: `Kit RAM - XPG Spectrix`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            ` (123) `,
        price: `$749 MXN <strike>849</strike>`,
        msi: `O hasta en 6 x $124 MXN (Meses sin intereses)`,
        piece: `20 piezas`,
        details: `<li>Los circuitos integrados de los kits de memoria SPECTRIX D50 han sido cuidadosamente seleccionados y probados para garantizar una compatibilidad total con las placas base ASRock, ASUS, Gigabyte y MSI 4 DIMM. Realiza el overclocking con facilidad para lograr un mayor rendimiento y disfruta de deslumbrantes efectos de iluminación a través de 4 difusores LED.</li>` +
        `<li>El módulo D50 presenta un exterior limpio y elegante con líneas geométricas simples y un panel RGB triangular que combina perfectamente con el diseño general de los módulos.</li>` +
        `<li>El D50 tiene un disipador térmico de metal de 1,95 mm de espesor construido sólidamente que no solo ofrece una excelente durabilidad, sino que también proyecta un aire de resistencia y alto rendimiento.</li>` +
        `<li>Con la aplicación XPG RGB Sync o un software RGB de una de las principales marcas de placas base, cambie entre tres modos RGB: Estático, Respiración y Cometa. Además de los tres modos, también puede establecerlo en el modo Música para que se sincronice con sus atascos favoritos.</li>` +
        `<li>Intel® Extreme Memory Profile (XMP) 2.0 hace que el aumento de la velocidad del reloj resulte sencillo y mejora la estabilidad del sistema. En lugar de ajustar parámetros individuales en el BIOS, puede hacerlo perfectamente a través del sistema operativo de su PC.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>8 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>133.3 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>40 mm</p></li>` +
        `<li><p>Tipo de memoria interna</p>`/*--*/+`<p>DDR4</p></li>` +
        `<li><p>Memoria interna</p>`/*--*/+`<p>8 GB</p></li>` +
        `<li><p>Diseño de memoria</p>`/*--*/+`<p>2 x 8 GB</p></li>` +
        `<li><p>Velocidad de memoria del reloj</p>`/*--*/+`<p>3200 MHz</p></li>` +
        `<li><p>Latencia CAS</p>`/*--*/+`<p>16</p></li>` +
        `<li><p>Intel Extreme Memory Profile (XMP)</p>`/*--*/+`<p>Sí</p></li>`,
    },
    {
        image: `../Images/Product/Product20.png`,
        alt: `SSD | Samsung 980 PRO`,
        name: `SSD | Samsung 980 PRO`,
        rate: `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            `<ion-icon name='star'></ion-icon>` +
            ` (8) `,
        price: `$1,810 MXN <strike>1,990</strike>`,
        msi: `O hasta en 6 x $301 MXN (Meses sin intereses)`,
        piece: `7 piezas`,
        details: `<li>El SSD Samsung 980 PRO NVMe es un dispositivo de almacenamiento interno para PC con una capacidad de 500 GB. Este modelo cuenta con soporte TRIM y S.M.A.R.T., lo que permite optimizar el rendimiento del disco duro y monitorear su estado en tiempo real.</li>` +
        `<li>La versión NVM Express (NVMe) 1.3c garantiza una alta velocidad de transferencia de datos, mientras que la tecnología V-NAND MLC proporciona mayor durabilidad y fiabilidad al dispositivo. Además, este SSD está equipado con encriptación por hardware AES-256-bit para proteger los datos confidenciales contra posibles amenazas externas.</li>` +
        `<li>Con una lectura aleatoria (4KB) de hasta 800000 IOPS y escritura aleatoria (4KB) de hasta 1000000 IOPS, el Samsung 980 PRO NVMe ofrece un alto nivel de desempeño incluso bajo cargas intensivas. La velocidad máxima teórica alcanzada por este modelo es impresionante: puede escribir a velocidades sostenidas superiores a los 5GB/s gracias a su interfaz PCI Express Gen4 x4.</li>` +
        `<li>Este producto tiene un peso ligero de solo nueve gramos y cumple con las especificaciones del factor forma M.2 tipo2280, lo que significa que se adapta perfectamente a cualquier placa madre compatible sin ocupar espacio adicional dentro del gabinete.</li>` +
        `<li>En cuanto al consumo energético promedio, el Samsung 980 PRO NVMe consume aproximadamente unos6 W durante operaciones normales; esto hace posible ahorrar energía eléctrica sin comprometer la calidad o eficiencia del sistema informático donde esté instalado.</li>` +
        `<li>Por último cabe destacar sus dimensiones compactas: ancho80 mmxprofundidad2.38 mmxaltura22.1 mm, lo que permite una fácil instalación en cualquier equipo de escritorio o portátil compatible con el factor forma M.2 2280.</li>` +
        `<li>En resumen, el SSD Samsung 980 PRO NVMe es un dispositivo de almacenamiento interno altamente eficiente y confiable para PC que ofrece velocidades extremadamente rápidas de lectura y escritura aleatoria gracias a su interfaz PCI Express Gen4 x4; además cuenta con características avanzadas como la encriptación por hardware AES-256-bit y soporte TRIM/S.M.A.R.T., entre otras funciones útiles para mejorar la experiencia del usuario al trabajar con grandes cantidades de datos.</li>`,
        especifications: `<li><p>Altura</p>`/*--*/+`<p>22.1 mm</p></li>` +
        `<li><p>Profundidad</p>`/*--*/+`<p>2.38 mm</p></li>` +
        `<li><p>Ancho</p>`/*--*/+`<p>80.2 mm</p></li>` +
        `<li><p>Peso</p>`/*--*/+`<p>9 g</p></li>` +
        `<li><p>Capacidad</p>`/*--*/+`<p>500 GB</p></li>` +
        `<li><p>Interface</p>`/*--*/+`<p>M.2, PCI Express 4.0</p></li>` +
        `<li><p>Velocidad de lectura</p>`/*--*/+`<p>6900 MB/s</p></li>` +
        `<li><p>Velocidad de escritura</p>`/*--*/+`<p>5000 MB/s</p></li>`,
    },
]

function getProduct(){
    // CONVERTIMOS NUESTRO ID EN UN NUMERO
    let idProduct = Number(localStorage.getItem('idProduct'))
    if(idProduct > 0){
        // ASIGNAMOS LA IMAGEN
        productImage.src = products[idProduct-1].image
        // ASIGNAMOS EL ALT
        productImage.alt = products[idProduct-1].alt
        // ASIGNAMOS EL NOMBRE DEL PRODUCTO
        productName.innerHTML = products[idProduct-1].name
        // ASIGNAMOS LA VALORACION
        productRate.innerHTML = products[idProduct-1].rate
        // ASIGNAMOS EL PRECIO
        productPrice.innerHTML = products[idProduct-1].price
        // ASIGNAMOS EL TEXTO MSI
        productMSI.innerHTML = products[idProduct-1].msi
        // ASIGNAMOS LA CANTIDAD RESTANTE DE PRODUCTOS
        productLeft.innerHTML = products[idProduct-1].piece
        // ASIGNAMOS LOS DETALLES DEL PRODUCTO
        productDetails.innerHTML = products[idProduct-1].details
        // ASIGNAMOS LAS ESPECIFICACIONES DEL PRODUCTO
        productEspecifications.innerHTML = products[idProduct-1].especifications
        // VALIDAMOS QUE EL PRODUCTO ESTE O NO EN DESCUENTO 
        dealProduct(idProduct)
    }else{
        window.location.href = "../index.html"
    }
}
function dealProduct(idProduct){
    // CONDICION PARA MOSTRARLOS EL DESCUENTO
    if(idProduct >= 15 && idProduct <= 20){
        // OBTENEMOS EL PRECIO SIN DESCUENTO
        const productPriceDeal = document.querySelector(".Product-Price strike")
        // COLOCAMOS EL PRECIO EN ROJO
        productPrice.style.color =`#ff6961`
        // COLOCAMOS EL PRECIO EN NEGRO
        productPriceDeal.style.color =`#2f3640`

    }else{
        productPrice.style.color ="#2f3640"
    }
}