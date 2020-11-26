import { NumeroRandom } from '../numeroRandom';
export class Ahorcado{
  listaPalabras: string[];
  palabra: string;
  indice: number;

  constructor(){
    this.listaPalabras = ["prueba", "pared", "tijera"];
  }

  public getPalabra(): string{
    let indice = NumeroRandom.generar(1, this.listaPalabras.length);
    return this.listaPalabras[indice - 1];
  }

  public compararPalabras(palabraUno: string[], palabraDos: string[]): boolean{
    let indice = 0;
    let resultado: boolean = true;
    palabraUno.forEach((letra) => {
      if(letra != palabraDos[indice]){
        resultado = false;
      }
      indice++;
    });
    return resultado;
  }


}
