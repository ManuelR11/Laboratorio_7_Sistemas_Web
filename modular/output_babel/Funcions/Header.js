"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateHeader = void 0;
/*
export const generateHeader = (title) => {
    var header = document.createElement("header");
    var h1 = document.createElement("h1");
    var text = document.createTextNode(title);
    h1.appendChild(text);
    header.appendChild(h1);
    return header;
}
*/

var generateHeader = function generateHeader(title) {
  var header = document.createElement("header");
  var h1 = document.createElement("h1");
  var text = document.createTextNode(title);
  h1.appendChild(text);
  header.appendChild(h1);
  if (!title) {
    throw new Error("Title cannot be empty!");
  }
  return header;
};
exports.generateHeader = generateHeader;