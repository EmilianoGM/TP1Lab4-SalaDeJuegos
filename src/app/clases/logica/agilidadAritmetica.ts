import { NumeroRandom } from '../numeroRandom';

export interface Calculo {
  cuenta: string
  resultado: string
}


export class AgilidadAritmética {
  listaCalculos: Calculo[];

  constructor() {
    this.listaCalculos = [
      {
        cuenta: "10 + 7(3+5)",
        resultado: "66"
      },
      {
        cuenta: "45 - (24/3)",
        resultado: "37"
      },
      {
        cuenta: "(5x6) / 3",
        resultado: "10"
      },
      {
        cuenta: "(5x6) / 3",
        resultado: "10"
      },
      {
        cuenta: "5 - 3x2 + 4 - 4/2",
        resultado: "1"
      }
    ]
  }

  /**
   * Devuelve un objeto tipo Calculo al azar de la lista de calculos
   */
  public jugar(){
    let indice = NumeroRandom.generar(1, this.listaCalculos.length);
    let cuenta: Calculo = this.listaCalculos[indice - 1];
    return cuenta;
  }


}
