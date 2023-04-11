export const agregarImagen = (src, alt, id) =>{
  var imagen = document.createElement("img");
  imagen.src = src; 
  imagen.alt = alt; 
  var contenedor = document.getElementById(id);
  contenedor.appendChild(imagen);

  return imagen;
}






