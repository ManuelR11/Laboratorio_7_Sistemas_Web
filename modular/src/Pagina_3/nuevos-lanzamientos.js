const Header = window.funcion_header.generateHeader("Nuevos lanzamientos");
var items = [
    { textoB: "DAY AND NIGHT", textoI: "Autor: Manuel Rodas", link:"../Pagina_4/DAY_NIGHT.html", linkText:"Ver mas" },
    { textoB: "Donde Todo Brilla", textoI: "Autor: Alice Kellen", link:"../Pagina_2/nuevos-lanzamientos.html", linkText:"Ver mas"  },
    { textoB: "Hijos de la Fabula", textoI: "Autor: Fernando Aramburu", link:"../Pagina_2/nuevos-lanzamientos.html", linkText:"Ver mas"  }
];
  
const libros =  window.funcion_List_books.NewListbooks(items);
const link_inicio = window.funcion_links.agregarEnlace("../Pagina_1/index.html", "Inicio");

var link = document.createElement("link");
link.href = "nuevos-lanzamientos.css";
link.rel="stylesheet";

document.head.appendChild(link);
document.getElementById("header").appendChild(Header);
document.getElementById("libros").appendChild(libros);
document.getElementById("link_inicio").appendChild(link_inicio);
