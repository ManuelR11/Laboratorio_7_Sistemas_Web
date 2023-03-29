const Header = window.funcion_header.generateHeader("Libros Populares");
var items = [
    { textoB: "Don Quijote de la Mancha", textoI: "Autor: Miguel de Cervantes", link:"../Pagina_2/libros-populares.html", linkText:"Ver mas" },
    { textoB: "Moby-Dick", textoI: " Autor: Herman Melville", link:"../Pagina_2/libros-populares.html", linkText:"Ver mas"  },
    { textoB: "The Maze Runner", textoI: "Autor: James Dashner", link:"../Pagina_2/libros-populares.html", linkText:"Ver mas"  }
];
  
const libros =  window.funcion_List_books.NewListbooks(items);
const link_inicio = window.funcion_links.agregarEnlace("../Pagina_1/index.html", "Inicio");

var link = document.createElement("link");
link.href = "libros-populares.css";
link.rel="stylesheet";



document.head.appendChild(link);
document.getElementById("header").appendChild(Header);
document.getElementById("libros").appendChild(libros);
document.getElementById("link_inicio").appendChild(link_inicio);
