(()=>{"use strict";var e,t,n,a,l;document.getElementById("header").appendChild((t="Libros Populares",n=document.createElement("header"),a=document.createElement("h1"),l=document.createTextNode(t),a.appendChild(l),n.appendChild(a),n)),document.getElementById("libros").appendChild((e=>{for(var t=document.createElement("ul"),n=0;n<e.length;n++){var a=document.createElement("li"),l=document.createElement("span");if(e[n].textoB){var i=document.createElement("b");i.innerText=e[n].textoB,l.appendChild(i)}if(e[n].textoI){var d=document.createElement("i");d.innerText=e[n].textoI,l.appendChild(d)}if(a.appendChild(l),e[n].link){var r=document.createElement("a"),o=document.createElement("br");l.appendChild(o),r.setAttribute("href",e[n].link),r.innerText=e[n].linkText||e[n].link,a.appendChild(r)}e[n].class&&a.setAttribute("class",e[n].class),t.appendChild(a),o=document.createElement("br"),t.appendChild(o);var m=document.createElement("br");t.appendChild(m)}return document.body.appendChild(t),t})([{textoB:"Don Quijote de la Mancha",textoI:"Autor: Miguel de Cervantes",link:"libros-populares.html",linkText:"Ver mas"},{textoB:"Moby-Dick",textoI:" Autor: Herman Melville",link:"libros-populares.html",linkText:"Ver mas"},{textoB:"The Maze Runner",textoI:"Autor: James Dashner",link:"libros-populares.html",linkText:"Ver mas"}])),document.getElementById("link_inicio").appendChild(("index.html","Inicio",(e=document.createElement("a")).href="index.html",e.innerHTML="Inicio",document.body.appendChild(e),e))})();