"use strict";

var _Header = require("../Funcions/Header.js");
var _Link = require("../Funcions/Link.js");
var _List_books = require("../Funcions/List_books.js");
require("../Pagina_2/libros-populares.scss");
var items = [{
  textoB: "Don Quijote de la Mancha",
  textoI: "Autor: Miguel de Cervantes",
  link: "../Pagina_2/libros-populares.html",
  linkText: "Ver mas"
}, {
  textoB: "Moby-Dick",
  textoI: " Autor: Herman Melville",
  link: "../Pagina_2/libros-populares.html",
  linkText: "Ver mas"
}, {
  textoB: "The Maze Runner",
  textoI: "Autor: James Dashner",
  link: "../Pagina_2/libros-populares.html",
  linkText: "Ver mas"
}];
document.getElementById("header").appendChild((0, _Header.generateHeader)("Libros Populares"));
document.getElementById("libros").appendChild((0, _List_books.NewListbooks)(items));
document.getElementById("link_inicio").appendChild((0, _Link.agregarEnlace)("../Pagina_1/index.html", "Inicio"));