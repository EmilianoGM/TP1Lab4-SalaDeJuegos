import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anagrama } from '../../logica/anagrama';


@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.scss']
})
export class AnagramaComponent implements OnInit {
  juego: Anagrama;
  palabraAdivinar: string;
  intentos: number;
  inputTexto: string;
  mensaje: string;

  constructor(private router: Router) {
    this.juego = new Anagrama();
    this.palabraAdivinar = this.juego.getSeleccionMezclada();
    this.intentos = 3;
    this.mensaje = "Tratá de adivinar";
  }

  ngOnInit(): void {
  }

  public hacerIntento(palabra: string) {
    if(this.intentos > 1){
      if(this.juego.jugar(palabra)){
        this.mensaje = "GANADOR, adivinaste la palabra";
        this.intentos = 0;
      } else {
        this.intentos = this.intentos - 1;
        this.mensaje = "Esa no es la palabra, probá de nuevo";
      }
    } else {
      this.intentos = this.intentos - 1;
      this.mensaje = "Game over, perdiste";
    }
  }

  public jugarDeNuevo(){
    this.palabraAdivinar = this.juego.getSeleccionMezclada();
    this.intentos = 3;
    this.mensaje = "Tratá de adivinar";
  }
}
