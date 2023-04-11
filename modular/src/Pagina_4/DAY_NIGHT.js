import { generateHeader } from "../Funcions/Header.js";
import { agregarEnlace } from "../Funcions/Link.js";
import { agregarImagen } from "../Funcions/Imagen.js";
import { createParagraph } from "../Funcions/texto.js";
import '../Pagina_4/DAY_NIGHT.scss';
import imagen2 from '../Imagenes/Day_Night_portada.jpg';




document.getElementById("header").appendChild(generateHeader("DAY AND NIGHT"));
agregarImagen([imagen2], "Tienda", "Imagen"); 
document.getElementById("text").appendChild(createParagraph(" “Un día fuera de lo común”, ese fue el primer pensamiento que paso por mi cabeza al sonar la alarma a las 5 del mañana listo para iniciar una jornada más. Una rutina que se repetía ya por mas de tres semanas, el despertarme, alistarme, ir a estudiar y regresar a mi casa a seguir estudiando. Pero no se, puede ser que hoy sea un día diferente. Bueno, continuando con la rutian, salgo en camino hacia un día mas de universidad, pero sigue en mi cabeza un constante pensamiento de no seguir la rutina, de cambiar por un día, por un día hacer lo que yo quiera."));
document.getElementById("link_inicio").appendChild(agregarEnlace("../Pagina_1/index.html", "Inicio"));
