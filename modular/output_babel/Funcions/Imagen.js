"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agregarImagen = void 0;
var agregarImagen = function agregarImagen(src, alt, id) {
  var imagen = document.createElement("img");
  imagen.src = src;
  imagen.alt = alt;
  var contenedor = document.getElementById(id);
  contenedor.appendChild(imagen);
  return imagen;
};
exports.agregarImagen = agregarImagen;