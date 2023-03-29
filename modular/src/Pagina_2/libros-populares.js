import { generateHeader } from "../Funcions/Header.js";
import { agregarEnlace } from "../Funcions/Link.js";
import { NewListbooks } from "../Funcions/List_books.js";
import '../Pagina_2/libros-populares.scss';

var items = [
    { textoB: "Don Quijote de la Mancha", textoI: "Autor: Miguel de Cervantes", link:"../Pagina_2/libros-populares.html", linkText:"Ver mas" },
    { textoB: "Moby-Dick", textoI: " Autor: Herman Melville", link:"../Pagina_2/libros-populares.html", linkText:"Ver mas"  },
    { textoB: "The Maze Runner", textoI: "Autor: James Dashner", link:"../Pagina_2/libros-populares.html", linkText:"Ver mas"  }
];
  


document.getElementById("header").appendChild(generateHeader("Libros Populares"));
document.getElementById("libros").appendChild(NewListbooks(items));
document.getElementById("link_inicio").appendChild(agregarEnlace("../Pagina_1/index.html", "Inicio"));
