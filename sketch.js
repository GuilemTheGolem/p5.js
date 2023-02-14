var texto;
//corre solo una vez cuando inicia el programa
function setup() {
    console.log("setup - frameCount:" + frameCount);

    //createCanvas: ancho, alto en píxeles
    createCanvas(400, 400);


    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);
    texto = "Hola mundo";
}

//corre continuamente después de la función setup
function draw() {
    console.log("draw - frameCount:" + frameCount);
   
    background(125);
     /**
    ellipse(frameCount%400,100,40,40);
    fill(100,125,255);
    rect(300,300, 150,50);
    fill(255,0,0);
    */

    textSize(60);

    text(texto, 30, 30, 130, 130);


}
function cambiaTexto() {
   
    texto = document.getElementById("texto").value;
   

}
