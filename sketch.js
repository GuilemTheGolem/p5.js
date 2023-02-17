let x, y;


//corre solo una vez cuando inicia el programa
function setup() {
  console.log("setup - frameCount:" + frameCount);

  //createCanvas: ancho, alto en píxeles
  createCanvas(400, 400);
  
  x=200;
  y=200;

}

//corre continuamente después de la función setup
function draw(){
  
console.log("draw - frameCount%" + frameCount);
console.log("keyCode" + keyCode);
clear();
background(125);
ellipse(x,y,50,50);


switch (keyCode) {

  case 38:

  text("Arriba", 40, 40, 200, 200);
  y = y -1;
  x = x -1;
  break;

  case 40:
    textSize(60);
    text("Abajo",40,40,200,200);
    y = y +1;
x = x +1
break;

default:
    break;

  
}

}