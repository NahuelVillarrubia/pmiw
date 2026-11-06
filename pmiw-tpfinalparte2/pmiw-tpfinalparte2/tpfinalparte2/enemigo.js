class enemigo{
  
  constructor(posX,posY){
    
  this.posX= posX;
  this.posY= posY;
  this.micolor= color((random)(255),(random)(255),(random)(255));
  this.posiciones=["ARRIBA", "ABAJO", "IZQUIERDA", "DERECHA"];
   
   this.lado="-";
  this.flecha = new Flecha(this.posX, this.posY);
  this.daño= 1;
   this.aparecen();
   
}
  dibujar(){
 
    this.flecha.dibujar();
    fill(this.micolor);
    rect(this.posX, this.posY,50, 50);
 

   
  }
  
  aparecen(){
    
   this.lado= random(this.posiciones);
   
 
    if ( this.lado === "ARRIBA") {
      this.posX = 400;
      this.posY = 0;
  this.flecha.direccion = "ABAJO";
    } else if ( this.lado=== "ABAJO") {
      this.posX = 400;
      this.posY = 400;
      this.flecha.direccion = "ARRIBA"; 
    } else if ( this.lado  === "IZQUIERDA") {
      this.posX = 0;
      this.posY = 200;
            this.flecha.direccion = "DERECHA";
    } else if ( this.lado === "DERECHA") {
      this.posX =800;
      this.posY = 200;
       this.flecha.direccion = "IZQUIERDA"; 
    }
       this.flecha.posX = this.posX;
    this.flecha.posY = this.posY;
  }
  flecha(){
  this.flecha.dibujar();
  
  }
  dispararFlecha(){
    
    this.flecha.dispara();
  }
  
  dañar(){
  }
  
  matar(){
  }
}
