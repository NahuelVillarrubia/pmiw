class Data{ 
  constructor(){
this.disparaArriba= [];
this.disparaAbajo= [];
this.disparaDerecha= [];
this.disparaIzquierda= [];

this.frames = 2;


 for(let i=1; i<=this.frames; i++){ 
 this.disparaArriba.push(loadImage("data/DisparaArriba" + i + ".png"));
this.disparaAbajo.push(loadImage("data/DisparaAbajo" + i + ".png"));
this.disparaDerecha.push(loadImage("data/DisparaDerecha" + i + ".png"));
this.disparaIzquierda.push(loadImage("data/DisparaIzquierda" + i + ".png"));

}
this.fondo=loadImage("data/fondo.jpeg");
} 
}
