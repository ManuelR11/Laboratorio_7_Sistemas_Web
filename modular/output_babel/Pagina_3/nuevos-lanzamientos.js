"use strict";

var _Header = require("../Funcions/Header.js");
var _Link = require("../Funcions/Link.js");
var _List_books = require("../Funcions/List_books.js");
require("../Pagina_3/nuevos-lanzamientos.scss");
var items = [{
  textoB: "DAY AND NIGHT",
  textoI: "Autor: Manuel Rodas",
  link: "../Pagina_4/DAY_NIGHT.html",
  linkText: "Ver mas"
}, {
  textoB: "Donde Todo Brilla",
  textoI: "Autor: Alice Kellen",
  link: "",
  linkText: "Ver mas"
}, {
  textoB: "Hijos de la Fabula",
  textoI: "Autor: Fernando Aramburu",
  link: "",
  linkText: "Ver mas"
}];
document.getElementById("header").appendChild((0, _Header.generateHeader)("Nuevos lanzamientos"));
document.getElementById("libros").appendChild((0, _List_books.NewListbooks)(items));
document.getElementById("link_inicio").appendChild((0, _Link.agregarEnlace)("../Pagina_1/index.html", "Inicio"));