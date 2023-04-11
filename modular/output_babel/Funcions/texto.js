"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createParagraph = void 0;
var createParagraph = function createParagraph(text) {
  // Crear el elemento p
  var p = document.createElement("p");

  // Agregar el texto al elemento p
  p.innerText = text;

  // Devolver el elemento p
  return p;
};
exports.createParagraph = createParagraph;