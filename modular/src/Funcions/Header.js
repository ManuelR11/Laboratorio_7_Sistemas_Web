window.funcion_header = {
    generateHeader: function(title) {
        var header = document.createElement("header");
        var h1 = document.createElement("h1");
        var text = document.createTextNode(title);
        h1.appendChild(text);
        header.appendChild(h1);
        return header;
  }

}