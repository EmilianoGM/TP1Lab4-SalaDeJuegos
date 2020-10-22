import { Component, OnInit } from '@angular/core';
import { AdivinarNumero } from '../../logica/adivinarNumero';

@Component({
  selector: 'app-adivinar-numero',
  templateUrl: './adivinar-numero.component.html',
  styleUrls: ['./adivinar-numero.component.scss']
})
export class AdivinarNumeroComponent implements OnInit {
  juego: AdivinarNumero;
  numeroAdivinar: number;
  numeroIngresado: number;
  intentos: number;
  inputTexto: string;
  mensaje: string;
  respuesta: string;

  constructor(){
    this.mensaje = "Introducí un numero del 1 al 100";
    this.juego = new AdivinarNumero();
    this.numeroAdivinar = this.juego.getNumeroAdivinar();
    this.intentos = 10;
  }

  ngOnInit(): void {
  }

  public hacerIntento(numeroString: string){
    if(this.intentos > 1){
      this.numeroIngresado = +numeroString;
      let prueba = this.juego.adivinarNumero(this.numeroIngresado);
      console.log(prueba);
      switch(prueba){
        case 0:
          this.mensaje = "Te pasaste, probá de nuevo";
          this.intentos = this.intentos - 1;
          break;
        case 1:
          this.mensaje = "GANADOR, adivinaste el número";
          this.respuesta = "El número era " + this.numeroAdivinar;
          this.intentos = 0;
          break;
        case 2:
          this.mensaje = "Es muy chico, probá de nuevo";
          this.intentos = this.intentos - 1;
          break;
        default:
          this.mensaje = "error"
      }
    } else {
      this.intentos = 0;
      this.mensaje = "GAME OVER, no hay más intentos";
      this.respuesta = "El número era " + this.numeroAdivinar;
    }
  }

  public jugarDeNuevo(){
    this.mensaje = "Introducí un numero del 1 al 100";
    this.intentos = 5;
    this.juego.setNumeroAdivinar();
    this.numeroAdivinar = this.juego.getNumeroAdivinar();
    this.respuesta = "";
  }
}
