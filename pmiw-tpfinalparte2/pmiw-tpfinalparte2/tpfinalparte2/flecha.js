class Flecha{
 constructor(posX,posY){
   this.posX=posX;
   this.posY=posY;
   this.velocidad=5;
   this.direccion="-";
   this.disparada=false;
   
}

dibujar(){

  if(this.disparada){
    fill(255,0,0); 
 this.mover();
}
}

dispara(){
  this.disparada= true;
}
  moverIzquierda() {
    this.posX = this.posX - this.velocidad;
    rect(this.posX, this.posY, 15, 5);
  }

  moverDerecha() {
    this.posX = this.posX + this.velocidad;
    rect(this.posX, this.posY, 15, 5);
  }
  moverAbajo() {
     rect(this.posX, this.posY, 5, 15)
    this.posY = this.posY + this.velocidad; 
  }

  moverArriba() {
     rect(this.posX, this.posY, 5, 15)
    this.posY = this.posY - this.velocidad; 
  }

mover() {
  if (this.direccion === "ARRIBA") {
      this.moverArriba();
     } else if (this.direccion === "ABAJO") {
      this.moverAbajo();
    } else if (this.direccion === "DERECHA") {
      this.moverDerecha();    
    } else if (this.direccion === "IZQUIERDA") {
      this.moverIzquierda();  
    }
  }
}
