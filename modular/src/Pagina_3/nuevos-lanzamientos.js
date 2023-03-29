import { generateHeader } from "../Funcions/Header.js";
import { agregarEnlace } from "../Funcions/Link.js";
import { NewListbooks } from "../Funcions/List_books.js";
import '../Pagina_3/nuevos-lanzamientos.scss'


var items = [
    { textoB: "DAY AND NIGHT", textoI: "Autor: Manuel Rodas", link:"../Pagina_4/DAY_NIGHT.html", linkText:"Ver mas" },
    { textoB: "Donde Todo Brilla", textoI: "Autor: Alice Kellen", link:"", linkText:"Ver mas"  },
    { textoB: "Hijos de la Fabula", textoI: "Autor: Fernando Aramburu", link:"", linkText:"Ver mas"  }
];
  
document.getElementById("header").appendChild(generateHeader("Nuevos lanzamientos"));
document.getElementById("libros").appendChild(NewListbooks(items));
document.getElementById("link_inicio").appendChild(agregarEnlace("../Pagina_1/index.html", "Inicio"));
