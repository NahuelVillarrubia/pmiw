
let tiempoInicio=0;

let volarframes=4;
let quietoframes=3;
let fontstextos=6;
let lentoframes=4;

let volar=[]
let lento=[]
let quieto=[]
let bluquetexto=["Segoe UI", "Segoe MDL2 Assets","Tahoma","Monogolian Baiti","Ink Free","Gabriola","CourierNewPS BoldMT"];

let fondo;

let posXfondo=0;
let posXvolar=0;
let posXplantas=0;

let posXvolarD=300;
let posYvolarD=200;

let posYvolar=0;
let estadoMariposa="VOLAR";
let velocidad=10; 

function preload(){ 
 cargaimagenes();
} 

function setup() { 
 createCanvas(800,600); 
 noSmooth();

} 

function draw() {
  background(255);
  tiempoInicio++;
  
 animacionFondo(90,600);

if (tiempoInicio > 677){
  estadoMariposa == "QUIETO";
  accionQuieto();
    titulorandom();
    
  }else if (tiempoInicio > 600 && tiempoInicio <677) {
  estadoMariposa = "VOLARDIAGONAL";
  accionVolarDiagonal();
  titulorandom();

}else if (estadoMariposa == "VOLAR"){
   accionVolar();

} else if (estadoMariposa == "LENTO") {
  accionLento();
}

animacionPlantas(2);

print(frameCount);
}

function botonReinicio(){
  if (mouseX >= 410 && mouseX <= 650 && mouseY>=280 && mouseY<=360){
    return true; 
}else{
return false;}
} 

function mouseClicked(){ 
  if (botonReinicio()===true){
    
 tiempoInicio=0;
 posXfondo=0;
 posXvolar=0;
 posXplantas=0;
 posYvolar=0;
 estadoMariposa="VOLAR";
 velocidad=10;
} 
}
