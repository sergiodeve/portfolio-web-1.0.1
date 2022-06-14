window.onload = function() { 
    animateprogress("#html5",91);
    animateprogress("#css",72);
    animateprogress("#javascript",86);
    animateprogress("#react",52);
    animateprogress("#git",79);
    
    
} 



/*
    El Javascript que anima las barras de progreso es bastante sencillo. Como se puede ver bajo estas lineas, con un RequestAnimationFrame y un par de querySelectors para controlar el DOM hay mas que suficiente.

    La función RequestAnimationFrame, que sustituye a la anticuada setInterval, hace que el bucle if, que incrementa tanto la barra de progreso como su porcentaje, lo haga de forma gradual a unos 60 frames por segundo, creando la animación. Para ello es necesario llamar a la función "animacion" con RequestAnimationFrame tanto desde fuera de la propia función, para iniciar el bucle, como desde dentro del mismo para que no pare de ejecutarlo hasta que la condición se cumpla y finalice la función.

    Para simplificar la tarea de modificar el DOM desde Javascript, he usado querySelector en vez de el clásico getElementByid, puesto que ofrece mas posibilidades con menos código, sin embargo hay que tener en cuenta que al ser un método  relativamente nuevo, es posible que los navegadores mas antiguos no sean capaces de interpretarlo. Para solucionar este problema,  habría que cambiar estas sentencias por getElementByid que, aunque con mas código, también es capaz de seleccionar los elementos de documento HTML necesarios para dar vida a las barras de progreso.
*/


function animateprogress (id, val){    
    
    var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la máxima compatibilidad con todos los navegadores */
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame ||
        function ( callback ){
            window.setTimeout(enroute, 1 / 60 * 1000);
        };
    };
    var fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro una instancia de getRequestAnimationFrame para llamar a la función animación */
    var i = 0;
    var animacion = function () {
             
    if (i<=val)
        {
            document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
            document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
            i++;
            fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
        }
    }
    fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
}
         
     
                                         
 
                 