window.funcion_imagen = {
    agregarImagen: function(src, alt, id) {
        var imagen = document.createElement("img");
        imagen.src = src; 
        imagen.alt = alt; 
        var contenedor = document.getElementById(id);
        contenedor.appendChild(imagen);

        return imagen;
      }

}





