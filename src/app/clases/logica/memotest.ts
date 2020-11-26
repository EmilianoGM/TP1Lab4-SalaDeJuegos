import { registerLocaleData } from '@angular/common';
import { ParseError } from '@angular/compiler';

export class Memotest {
  parUno: boolean;
  parDos: boolean;
  parTres: boolean;
  opcionAnterior: number;
  opciones: boolean[];
  cantidadPares: number;

  constructor(cantidadDePares: number) {
    this.opciones = [];
    this.cantidadPares = cantidadDePares;
    this.opcionAnterior = -1;
    for (let index = 0; index < (cantidadDePares * 2); index++) {
      this.opciones.push(false);
    }
  }

  public jugar(indice: number): number{
    let numeroRetorno:number = -1;
    if(this.validarOpcion(indice)){
      this.opciones[indice] = true;
      if(this.comprobarJuegoTerminado()){
        numeroRetorno = 2;
      } else{
        //comprueba si ya fue seleccionada una opcion
        if(this.opcionAnterior != -1){
          //comprueba si es 0 o par, y lo evalua con el siguiente
          if(indice == 0 || ((indice % 2) == 0)){
            if(this.opciones[indice + 1] == true){
              numeroRetorno = 1;
            } else {
              this.opciones[indice] = false;
              this.opciones[this.opcionAnterior] = false;
              numeroRetorno = 0;
            }
          } else { //si es impar, lo evalua con el anterior
            if(this.opciones[indice - 1] == true){
              numeroRetorno = 1;
            } else {
              this.opciones[indice] = false;
              this.opciones[this.opcionAnterior] = false;
              numeroRetorno = 0;
            }
          }
          this.opcionAnterior = -1;
        } else {
          this.opcionAnterior = indice;
          numeroRetorno = 3;
        }
      }
    } else {
      numeroRetorno = -1;
    }
    return numeroRetorno;
  }
  /*
  public jugar(numeroDePar:Number, opcionUno: string, opcionDos: string){
    let numeroRetorno:number = -1;
    if(this.validarOpcion(opcionUno) && this.validarOpcion(opcionDos) && this.validarNumeroDePar(numeroDePar)){
      if(opcionUno == opcionDos){
        switch(numeroDePar){
          case 1:
            this.parUno = true;
            break;
          case 2:
            this.parDos = true;
          case 3:
            this.parTres = true;
        }
        if(this.parUno && this.parDos && this.parTres){
          numeroRetorno = 1;
        } else{
          numeroRetorno = 2;
        }
      } else {
        numeroRetorno = 0;
      }
    } else {
      numeroRetorno = -1;
    }

    return numeroRetorno;
  }*/

  /**
   * Vuelve a asignar los pares como false
   */
  public resetear(){
    this.opciones = [];
    for (let index = 0; index < (this.cantidadPares * 2); index++) {
      this.opciones.push(false);
    }
    this.opcionAnterior = -1;
  }

  /**
   * Valida que la opción introducida entre en los parámetros válidos del juego
   * @param indice La opción a comparar
   * @returns true si es válida, false si no lo es
   */
  public validarOpcion(indice: number){
    if(indice >= 0){
      return true;
    }
    else{
      return false;
    }
  }

  /**
   * Valida que la opción introducida entre en los parámetros válidos del juego
   * @param indice La opción a comparar
   * @returns true si es válida, false si no lo es
   */
  public validarNumeroDePar(numeroDePar: Number){
    if( numeroDePar === 1 || numeroDePar === 2 || numeroDePar === 3){
      return true;
    }
    else{
      return false;
    }
  }

  public comprobarJuegoTerminado(): boolean{
    let terminar: boolean = false;
    let largoLista: number = this.opciones.length
    for (let index = 0; index < largoLista; index++) {
      if(!this.opciones[index]){
        break;
      }
      if(index == (largoLista - 1)){
        terminar = this.opciones[index];
      }
    }
    return terminar;
  }

}
