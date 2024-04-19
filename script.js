import { Portugal, Tokio,Ecuador } from './ciudades.js';

// Elementos del DOM
let enlaces = document.querySelectorAll("a")
let title = document.getElementById("title")
let subtitle=document.getElementById("subtitle")
let paragraph=document.getElementById("paragraph")
let imagen=document.getElementById("imagen")

enlaces.forEach(function (enlace){
    enlace.addEventListener("click",function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove("selected")
        })
        this.classList.add("selected")
        let content = obtenerContenido(this.textContent);
        console.log(content.title)
        title.innerHTML=content.title
        console.log(title)
        subtitle.innerHTML=content.subtitle
        paragraph.innerHTML=content.paragraph
        imagen.src =content.image
    })
})

function obtenerContenido(enlace){
    let contenido={
        "Portugal":Portugal,
        "Tokio":Tokio,
        "Ecuador":Ecuador
    }
    return contenido[enlace];
}