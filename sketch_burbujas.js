let burbujas = [];


//corre solo una vez cuando inicia el programa
function setup() {
  console.log("setup - frameCount:" + frameCount);

  //createCanvas: ancho, alto en píxeles
  createCanvas(700, 700);
  let x1 = random(width);
  let y1 = random(height);
  let radio1 = random(20, 50);

  let b1 = new Burbuja(x1, y1, radio1);
  burbujas.push(b1);

}

function draw() {
  console.log("draw - frameCount%" + frameCount);
  background(125);
  burbujas.forEach(x => {
    x.mover();
    x.mostrar();
  });
}
/*for(let i=0; i < burbujas.length; i++){
  burbujas[i].mover();
  burbujas[i].mostrar();
}*/
function mousePressed() {
  console.log("(" + mouseX + "," + mouseY + ")");
  let x2 = random(width);
  let y2 = random(height);
  let radio2 = random(20, 50);

  let b2 = new Burbuja(x2, y2, radio2);
  burbujas.push(b2);
}

class Burbuja {
  constructor(x, y, radio) {
    this.x = x;
    this.y = y;
    this.radio = radio;
  }
  mover() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
    this.radio = this.radio + random(-5, 5);
  }
  mostrar() {
    stroke(0,0,0);
    strokeWeight(7);
    noFill();
    ellipse(this.x, this.y, this.radio * 2);
  }



}


