function accionVolar(){
let frame= floor( frameCount/ velocidad) % volarframes; 
image (volar[frame], posXvolar,200); 
posXvolar++; 

  if (posXvolar==300 ) {
    estadoMariposa = "LENTO";
  }else if (posXvolarD ==677){
   estadoMariposa= "QUIETO"
}
}

function accionVolarDiagonal(){ 
let frame= floor( frameCount/ velocidad) % volarframes; 
image(volar[frame],posXvolarD,posYvolarD);
posXvolarD+=2;
posYvolarD++;
}

function accionLento(){
  let frame =floor(frameCount/ velocidad)% lentoframes; 
image(lento[frame],300,200);
}

function accionQuieto(){
  let frame=floor(frameCount/velocidad%4)% quietoframes;
  image (quieto[frame],455,270);
}

function animacionFondo(LimiteIzquierda,LimiteDerecha){ 
image (fondo,posXfondo,0,2000,600);
if (frameCount>LimiteIzquierda && frameCount<LimiteDerecha){ 
posXfondo--;

}
}

function animacionPlantas( velocidadplantas){ 
image (lianas,posXplantas,0,2000,600);
if (posXplantas>-1200){
posXplantas-=velocidadplantas;
}
}

function titulorandom(){
  for(let i=0; i<=fontstextos; i++){ 
let fuentes= floor (frameCount/ velocidad)%fontstextos; 
textFont(bluquetexto[fuentes]); 
text("Into Yourself",430,330);
fill(255);
textSize(40); 
}
}
