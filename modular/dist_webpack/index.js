(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=(e,t)=>{var n=document.createElement("a");return n.href=e,n.innerHTML=t,document.body.appendChild(n),n},n=e.p+"Imagenes/Tienda.jpg";var r,a,i,o,c;document.getElementById("header").appendChild(("Libros Nuevos",r=document.createElement("header"),a=document.createElement("h1"),i=document.createTextNode("Libros Nuevos"),a.appendChild(i),r.appendChild(a),r)),document.getElementById("link1").appendChild(t("libros-populares.html","Libros Populares")),document.getElementById("link2").appendChild(t("nuevos-lanzamientos.html","Nuevos lanzamientos")),o=[n],(c=document.createElement("img")).src=o,c.alt="Tienda",document.getElementById("Imagen").appendChild(c)})();