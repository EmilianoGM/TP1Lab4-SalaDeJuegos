import { NumeroRandom } from '../numeroRandom';

export class PiedraPapelTijera {
  eleccionMaquina: string;
  constructor() {
    this.eleccionMaquina = "";
  }

  /**
   * Genera una opción aleatoriamente
   * @returns Piedra, papel, tijera o error
   */
  public generarOpcion(): string {
    let opcion: Number = NumeroRandom.generar(1,3);
    let retorno: string;
    switch(opcion){
      case 1:
        retorno = "piedra"
        break;
      case 2:
        retorno = "papel"
        break;
      case 3:
        retorno = "tijera"
        break;
      default:
        retorno = "error"
    }

    return retorno;
  }

  /**
   * Valida que la opción introducida entre en los parámetros válidos del juego
   * @param opcion La opción a comparar
   * @returns true si es válida, false si no lo es
   */
  public validarOpcion(opcion: string){
    if(opcion == "piedra" || opcion == "papel" || opcion == "tijera"){
      return true;
    }
    else{
      return false;
    }
  }

  /**
   * Realiza la comparacion entre dos jugadores
   * @param jugadorUno Opción elegida por el primer jugador
   * @param jugadorDos Opción elegida por el segundo jugador
   * @returns Devuelve -1 en caso de error, 0 en caso de empate, 1 si gana el jugadorUno y 2 si gana el jugadorDos
   */
  public jugar(jugadorUno: string, jugadorDos: string) {
    let numeroRetorno: Number;
    if(this.validarOpcion(jugadorUno) && this.validarOpcion(jugadorDos)){
      if(jugadorUno === jugadorDos){
        numeroRetorno = 0;
      }
      else {
        switch(jugadorUno){
          case "piedra":
            if(jugadorDos == "tijera"){
              numeroRetorno = 1
            } else {
              numeroRetorno = 2;
            }
            break;
          case "tijera":
            if(jugadorDos == "papel"){
              numeroRetorno = 1;
            } else {
              numeroRetorno = 2;
            }
            break;
          case "papel":
            if(jugadorDos == "piedra"){
              numeroRetorno = 1;
            } else {
              numeroRetorno = 2;
            }
            break;
        }
      }
    } else {
      numeroRetorno = -1;
    }
    return numeroRetorno;
  }

  /**
   * Realiza la comparacion entre un jugador y una opción generada aleatoriamente
   * @param jugadorUno Opción elegida por el primer jugador
   * @returns Devuelve -1 en caso de error, 0 en caso de empate, 1 si gana el jugadorUno y 2 si gana la máquina
   */
  public jugarContraMaquina(jugadorUno: string){
    this.eleccionMaquina =  this.generarOpcion();
    return this.jugar(jugadorUno, this.eleccionMaquina);
  }

}
