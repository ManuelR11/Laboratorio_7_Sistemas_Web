"use strict";

var _Header = require("../Funcions/Header.js");
var _Link = require("../Funcions/Link.js");
var _Imagen = require("../Funcions/Imagen.js");
var _texto = require("../Funcions/texto.js");
require("../Pagina_4/DAY_NIGHT.scss");
var _Day_Night_portada = _interopRequireDefault(require("../Imagenes/Day_Night_portada.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
document.getElementById("header").appendChild((0, _Header.generateHeader)("DAY AND NIGHT"));
(0, _Imagen.agregarImagen)([_Day_Night_portada["default"]], "Tienda", "Imagen");
document.getElementById("text").appendChild((0, _texto.createParagraph)(" “Un día fuera de lo común”, ese fue el primer pensamiento que paso por mi cabeza al sonar la alarma a las 5 del mañana listo para iniciar una jornada más. Una rutina que se repetía ya por mas de tres semanas, el despertarme, alistarme, ir a estudiar y regresar a mi casa a seguir estudiando. Pero no se, puede ser que hoy sea un día diferente. Bueno, continuando con la rutian, salgo en camino hacia un día mas de universidad, pero sigue en mi cabeza un constante pensamiento de no seguir la rutina, de cambiar por un día, por un día hacer lo que yo quiera."));
document.getElementById("link_inicio").appendChild((0, _Link.agregarEnlace)("../Pagina_1/index.html", "Inicio"));