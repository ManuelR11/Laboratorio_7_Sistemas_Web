window.funcion_links = {
    agregarEnlace: function(url, texto) {
        var enlace = document.createElement("a"); 
        enlace.href = url; 
        enlace.innerHTML = texto; 
        document.body.appendChild(enlace); 

        return enlace;
      }

}










