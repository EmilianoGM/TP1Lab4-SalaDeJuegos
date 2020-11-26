export class Tateti {
  tablero: string[] = ['-','-','-','-','-','-','-','-','-'];
  indicesGanadores = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  indicesLibres = [0,1,2,3,4,5,6,7,8];

  constructor() {
  }

  public resetear(){
    this.tablero = ['-','-','-','-','-','-','-','-','-'];
    this.indicesLibres = [0,1,2,3,4,5,6,7,8];
  }

  public chequearGanador(): number{
    let ganador = 0;
    for (let i = 0; i < this.indicesGanadores.length; i++) {
      let indicePrimero = (this.indicesGanadores[i])[0];
      let indiceSegundo = (this.indicesGanadores[i])[1];
      let indiceTercero = (this.indicesGanadores[i])[2];
      if(this.tablero[indicePrimero] == this.tablero[indiceSegundo] && this.tablero[indiceSegundo] == this.tablero[indiceTercero]){
        if(this.tablero[indicePrimero] == 'X'){
          ganador = 1;
          break;
        } else if(this.tablero[indicePrimero] == 'O'){
          ganador = 2;
        }
      }
    }
    return ganador;
  }

}
