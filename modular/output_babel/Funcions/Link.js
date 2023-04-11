"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agregarEnlace = void 0;
var agregarEnlace = function agregarEnlace(url, texto) {
  var enlace = document.createElement("a");
  enlace.href = url;
  enlace.innerHTML = texto;
  document.body.appendChild(enlace);
  return enlace;
};
exports.agregarEnlace = agregarEnlace;