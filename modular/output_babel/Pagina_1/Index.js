"use strict";

var _Header = require("../Funcions/Header.js");
var _Link = require("../Funcions/Link.js");
var _Imagen = require("../Funcions/Imagen.js");
require("../Pagina_1/Index.scss");
var _Tienda = _interopRequireDefault(require("../Imagenes/Tienda.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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

try {
  document.getElementById("header").appendChild((0, _Header.generateHeader)("Libros Nuevos"));
  document.getElementById("link1").appendChild((0, _Link.agregarEnlace)("../Pagina_2/libros-populares.html", "Libros Populares"));
  document.getElementById("link2").appendChild((0, _Link.agregarEnlace)("../Pagina_3/nuevos-lanzamientos.html", "Nuevos lanzamientos"));
  (0, _Imagen.agregarImagen)([_Tienda["default"]], "Tienda", "Imagen");
} catch (error) {
  console.error(error);
  throw new Error("Error in page loading");
}