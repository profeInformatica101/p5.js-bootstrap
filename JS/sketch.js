let red = 0;
let green = 0;
let blue = 0;


//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup - frameCount:"+frameCount);
    
    //createCanvas: ancho, alto en píxeles
    var canvas = createCanvas(800,300);
    canvas.parent('sketch');
   

}

//corre continuamente después de la función setup
function draw(){
    console.log("draw - frameCount:"+frameCount);
      //instrucciones a ejecutar en bucle

   //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);
    background(red, green,blue);
}

function cambiarColor(objeto){
    console.log("onchange: "+ objeto.id);

        if(objeto.id == "red"){
            red = objeto.value;
        }else if(objeto.id == "blue"){
            blue = objeto.value;
        }else if(objeto.id == "green"){
            green = objeto.value;
        }
}