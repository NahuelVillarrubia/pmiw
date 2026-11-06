class juego{
  constructor(cantidadEnemigos){
    this.cantidadEnemigos = cantidadEnemigos;
  this.crearPersonaje();
  this.crearEscudo();
  this.crearEnemigos();
  this.crearFlechas();

  }
  
  dibujar(){
    this.personaje.dibujar();
    this.escudo.dibujar();
    
    
     for(let i=0; i < this.enemigos.length; i++){
     this.enemigos[i].dibujar();
  }
  }
  
  
  crearEnemigos(){
   this.enemigos=[];
   for(let i=0; i< this.cantidadEnemigos; i++) {
     this.enemigos[i] = new enemigo(i*8,100);
}
  }
  crearFlechas(){
    this.flechas= new Flecha ();
    
  }

  crearPersonaje(){
      this.personaje = new personaje();
  }
  
  crearEscudo(){
    this.escudo = new escudo();
  }
IniciarAtaque(){
  for (let i = 0; i < this.enemigos.length; i++) {
    this.enemigos[i].dispararFlecha(); 
  }
  
  }
}
