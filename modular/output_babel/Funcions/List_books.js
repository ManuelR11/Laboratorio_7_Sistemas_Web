"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewListbooks = void 0;
require("core-js/modules/es.string.link.js");
var NewListbooks = function NewListbooks(items) {
  var ul = document.createElement("ul");
  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    if (items[i].textoB) {
      var b = document.createElement("b");
      b.innerText = items[i].textoB;
      span.appendChild(b);
    }
    if (items[i].textoI) {
      var iTag = document.createElement("i");
      iTag.innerText = items[i].textoI;
      span.appendChild(iTag);
    }
    li.appendChild(span);
    if (items[i].link) {
      var a = document.createElement("a");
      var br = document.createElement("br");
      span.appendChild(br);
      a.setAttribute("href", items[i].link);
      a.innerText = items[i].linkText || items[i].link;
      li.appendChild(a);
    }
    if (items[i]["class"]) {
      li.setAttribute("class", items[i]["class"]);
    }
    ul.appendChild(li);

    // Agregar una línea vacía después de cada elemento de la lista
    var br = document.createElement("br");
    ul.appendChild(br);
    var br1 = document.createElement("br");
    ul.appendChild(br1);
  }
  document.body.appendChild(ul);
  return ul;
};
exports.NewListbooks = NewListbooks;