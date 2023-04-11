
/*
import { generateHeader } from "../Funcions/Header.js";
import { agregarEnlace } from "../Funcions/Link.js";
import { agregarImagen } from "../Funcions/Imagen.js";
import '../Pagina_1/Index.scss';
import imagen1 from '../Imagenes/Tienda.jpg';


document.getElementById("header").appendChild(generateHeader("Libros Nuevos"));
document.getElementById("link1").appendChild(agregarEnlace("../Pagina_2/libros-populares.html", "Libros Populares"));
document.getElementById("link2").appendChild(agregarEnlace("../Pagina_3/nuevos-lanzamientos.html", "Nuevos lanzamientos"));
agregarImagen([imagen1], "Tienda", "Imagen");




*/
import { generateHeader } from "../Funcions/Header.js";
import { agregarEnlace } from "../Funcions/Link.js";
import { agregarImagen } from "../Funcions/Imagen.js";
import '../Pagina_1/Index.scss';
import imagen1 from '../Imagenes/Tienda.jpg';

try {
  document.getElementById("header").appendChild(generateHeader("Libros Nuevos"));
  document.getElementById("link1").appendChild(agregarEnlace("../Pagina_2/libros-populares.html", "Libros Populares"));
  document.getElementById("link2").appendChild(agregarEnlace("../Pagina_3/nuevos-lanzamientos.html", "Nuevos lanzamientos"));
  agregarImagen([imagen1], "Tienda", "Imagen");
} catch (error) {
  console.error(error);
  throw new Error("Error in page loading");
}
