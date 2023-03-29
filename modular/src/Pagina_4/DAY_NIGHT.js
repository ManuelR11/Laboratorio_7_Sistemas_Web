const Header = window.funcion_header.generateHeader("Nuevos lanzamientos");
const Imagen = window.funcion_imagen.agregarImagen("../Imagenes/Day_Night_portada.jpg", "Tienda", "Imagen");
const text = window.funcion_Text.createParagraph(" “Un día fuera de lo común”, ese fue el primer pensamiento que paso por mi cabeza al sonar la alarma a las 5 del mañana listo para iniciar una jornada más. Una rutina que se repetía ya por mas de tres semanas, el despertarme, alistarme, ir a estudiar y regresar a mi casa a seguir estudiando. Pero no se, puede ser que hoy sea un día diferente. Bueno, continuando con la rutian, salgo en camino hacia un día mas de universidad, pero sigue en mi cabeza un constante pensamiento de no seguir la rutina, de cambiar por un día, por un día hacer lo que yo quiera.");
const link_inicio = window.funcion_links.agregarEnlace("../Pagina_1/index.html", "Inicio");

var link = document.createElement("link");
link.href = "DAY_NIGHT.css";
link.rel="stylesheet";


document.head.appendChild(link);
document.getElementById("header").appendChild(Header);
document.getElementById("Imagen").appendChild(Imagen); 
document.getElementById("text").appendChild(text);
document.getElementById("link_inicio").appendChild(link_inicio);
