// link de video acá :P

let objJuego;

function setup() {
createCanvas(800, 400);
objJuego = new juego(2);

}


function draw() {
background(200);
objJuego.dibujar();
}
 
function keyPressed(){
  if (key ===' '){
    print("barra");
objJuego.IniciarAtaque();
}
}
