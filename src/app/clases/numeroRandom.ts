export class NumeroRandom {
  constructor() {
  }

  /**
   * Genera un numero random sin decimales entre dos valores.
   * @param min El minimo número inclusive
   * @param max El máximo número inclusive
   */
  public static generar(min: number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
