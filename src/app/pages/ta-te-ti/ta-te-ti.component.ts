import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tateti } from 'src/app/clases/logica/tateti';
import { NumeroRandom } from 'src/app/clases/numeroRandom';
import { IPuntuacion } from 'src/app/clases/puntuacion';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';

@Component({
  selector: 'app-ta-te-ti',
  templateUrl: './ta-te-ti.component.html',
  styleUrls: ['./ta-te-ti.component.scss']
})
export class TaTeTiComponent implements OnInit {
  juego: Tateti;
  l1 = [];
  l2 = [];
  juegoTerminado: boolean;
  mensaje: string;
  respuesta: string;
  puntuacion: IPuntuacion;

  constructor(
    private router: Router,
    private cloudStorageService: CloudStorageService
  ) {
    this.juego = new Tateti();
    this.cloudStorageService.getPuntuacion(6).then((data) => {
      this.puntuacion = data;
    });
    this.l1 = this.juego.tablero;
    this.l2 = this.juego.indicesLibres;
    this.juegoTerminado = false;
    this.mensaje = "Juega una partida contra la máquina";
    this.respuesta = "Haz click en un casillero, tus fichas son las X, la máquina es la O";
  }

  ngOnInit(): void {
  }

  public jugar(indice){
    let ganador = 0;
    if(this.l1[indice] == '-' && !this.juegoTerminado){
      this.l1[indice] = 'X';
      let index = this.l2.indexOf(indice);
      this.l2.splice(index, 1);
      ganador = this.juego.chequearGanador();
      if(ganador == 1){
        this.respuesta ="¡Ganaste la partida!";
        this.juegoTerminado = true;
        this.puntuacion.ganadas++;
        this.puntuacion.cantidad++;
        this.cloudStorageService.setPuntuacion(6, this.puntuacion);
      } else if(ganador == 2){
        this.respuesta ="¡Perdiste la partida!";
        this.juegoTerminado = true;
        this.puntuacion.perdidas++;
        this.puntuacion.cantidad++;
        this.cloudStorageService.setPuntuacion(6, this.puntuacion);
      } else{
        if(this.l2.length == 0){
          this.respuesta = 'La partida terminó en empate.';
          this.juegoTerminado = true;
          this.puntuacion.empates++;
          this.puntuacion.cantidad++;
          this.cloudStorageService.setPuntuacion(6, this.puntuacion);
        }
      }
      if(!this.juegoTerminado){
        let indiceDos = NumeroRandom.generar(1, this.l2.length);
        indiceDos--;
        this.l1[this.l2[indiceDos]] = 'O';
        this.l2.splice(indiceDos, 1);
        ganador = this.juego.chequearGanador();
        if(ganador == 1){
          this.respuesta ="¡Ganaste la partida!";
          this.juegoTerminado = true;
        } else if(ganador == 2){
          this.respuesta ="¡Perdiste la partida!";
          this.juegoTerminado = true;
        }  else{
          if(this.l2.length == 0){
            this.respuesta = 'La partida terminó en empate.';
            this.juegoTerminado = true;
          }
        }
      }
    }
  }

  public jugarDeNuevo(){
    this.respuesta = "Haz click en un casillero, tus fichas son las X, la máquina es la O";
    this.juegoTerminado = false;
    this.juego.resetear();
    this.l1 = this.juego.tablero;
    this.l2 = this.juego.indicesLibres;
  }
}
