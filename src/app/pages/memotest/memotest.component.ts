import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPuntuacion } from 'src/app/clases/puntuacion';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';
import { Memotest } from '../../clases/logica/memotest';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.scss']
})
export class MemotestComponent implements OnInit {
  mensaje: string;
  intentos: number;
  juego: Memotest;
  tarjetas: boolean[];
  respuesta: string;
  puntuacion: IPuntuacion
  constructor(
    private router: Router,
    private cloudStorageService: CloudStorageService,
  ) {
    this.mensaje = "Tratá de recordar donde se encuentran los animales para formar pares."
    this.respuesta = "Para jugar haz click en un par de tarjetas";
    this.juego = new Memotest(3);
    this.tarjetas = this.juego.opciones;
    this.intentos = 2;
    this.cloudStorageService.getPuntuacion(4).then((data) => {
      this.puntuacion = data;
    });
  }

  ngOnInit(): void {
  }

  public descubrirTarjeta(indice: number){
    if(this.intentos > 0){
      let partida = this.juego.jugar(indice);
      if(partida == 1){
        this.respuesta = '¡Bien!, encontraste un par correcto';
      } else if(partida == 2){
        this.respuesta = "FELICITACIONES, ganaste la partida";
        this.intentos = 0;
        this.puntuacion.ganadas++;
        this.puntuacion.cantidad++;
        this.cloudStorageService.setPuntuacion(4, this.puntuacion);
      } else if(partida == 0){
        this.respuesta = 'Ups, ese par no es igual, el animal no está en ese lugar.';
        this.intentos--;
        if(this.intentos == 0){
          this.respuesta = "GAME OVER, se terminaron los intentos";
          this.puntuacion.perdidas++;
          this.puntuacion.cantidad++;
          this.cloudStorageService.setPuntuacion(4, this.puntuacion);
        }
      }
    }
  }

  public jugarDeNuevo(){
    this.intentos = 2;
    this.juego.resetear();
    this.tarjetas = this.juego.opciones;
    this.respuesta = "Para jugar haz click en un par de tarjetas";
  }
}
