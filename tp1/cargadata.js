function cargaimagenes(){ 
 for(let i=0; i<=volarframes; i++){ 
let imagen = loadImage("data/marifly" + i + ".png");
volar.push(imagen); 
} 
for(let i=0; i<=lentoframes; i++){ 
let imagen = loadImage("data/marifly" + i + ".png");
lento.push(imagen); 
}
for(let i=0; i<=quietoframes; i++){ 
let imagen = loadImage("data/marilento" + i + ".png");
quieto.push(imagen); 
}
fondo=loadImage("data/fondo.png");
lianas=loadImage("data/lianas.png");
} 
