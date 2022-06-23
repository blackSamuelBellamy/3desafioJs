
const ele = document.getElementById("ele1"); //requerimiento 3.1

function pintar(color){ //  3.2 funcion con parametro de color
   if(color == 'yellow'){
    ele.style.backgroundImage = 'url(https://cdn.wallpapersafari.com/62/65/bYsAFl.jpg)';
   }
}
ele.addEventListener("click", function() {
    pintar('yellow'); // se llama la función una vez se gatilla el click;
}); 

     




