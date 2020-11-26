import { NumeroRandom } from '../numeroRandom';

export class AdivinarNumero {
  private numeroAdivinar;

  constructor() {
    this.setNumeroAdivinar();
  }

  public adivinarNumero(numeroElegido: number){
    let numeroRetorno;
    if(numeroElegido == this.numeroAdivinar){
      numeroRetorno = 1;
    } else if(numeroElegido > this.numeroAdivinar){
      numeroRetorno = 0;
    } else {
      numeroRetorno = 2;
    }
    return numeroRetorno;
  }

  public setNumeroAdivinar(){
    this.numeroAdivinar = NumeroRandom.generar(1,100);  //this.generarNumeroRandom(1,100);
  }

  public getNumeroAdivinar(): number{
    return this.numeroAdivinar;
  }
}
