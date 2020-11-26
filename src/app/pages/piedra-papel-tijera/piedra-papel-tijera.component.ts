import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPuntuacion } from '../../clases/puntuacion';
import { CloudStorageService } from '../../services/cloud-storage.service';
import { PiedraPapelTijera } from '../../clases/logica/piedraPapelTijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.scss']
})
export class PiedraPapelTijeraComponent implements OnInit {

  juego: PiedraPapelTijera;
  mensaje: string;
  respuesta: string;
  eleccionMaquina: string;
  puntuacion: IPuntuacion;
  puntuacionActual: IPuntuacion;
  intentos: number;

  constructor(
    private router: Router,
    private cloudStorageService: CloudStorageService,
  ) {
    this.juego = new PiedraPapelTijera();
    this.intentos = 3;
    this.puntuacionActual = {
      empates: 0,
      ganadas: 0,
      perdidas: 0,
    }
    this.mensaje = "Juega contra la máquina al mejor de tres rondas";
    this.respuesta = "Elije tu opcion";
    this.eleccionMaquina = this.juego.eleccionMaquina;
    this.cloudStorageService.getPuntuacion(5).then((data) => {
      this.puntuacion = data;
    });
  }

  ngOnInit(): void {
  }

  public jugar(opcion: string){
    let resultado = this.juego.jugarContraMaquina(opcion);
    this.eleccionMaquina = this.juego.eleccionMaquina;
    if(this.intentos > 0){
      if(resultado == 0){
        this.respuesta = "¡Esta ronda fue un empate!";
        this.puntuacionActual.empates++;
      } else if( resultado == 1){
        this.respuesta = "¡Felicitaciones, ganaste la ronda!";
        this.puntuacionActual.ganadas = this.puntuacionActual.ganadas + 1;
      } else if( resultado == 2){
        this.respuesta = "¡Uh!, perdiste esta ronda.";
        this.puntuacionActual.perdidas = this.puntuacionActual.perdidas + 1;
      }
      this.respuesta += " | La máquina eligió: " + this.eleccionMaquina + ".";
      this.intentos--;
      if(this.intentos == 0){
        if(this.puntuacionActual.ganadas == 3 || this.puntuacionActual.ganadas == 2){
          this.respuesta = "GANASTE LA PARTIDA";
          this.puntuacion.ganadas++;
        } else if(this.puntuacionActual.perdidas == 3 || this.puntuacionActual.perdidas == 2){
          this.respuesta = "PERDISTE LA PARTIDA";
          this.puntuacion.perdidas++;
        } else {
          this.respuesta = "EMPATASTE LA PARTIDA";
          this.puntuacion.empates++;
        }
        this.puntuacion.cantidad++;
        this.cloudStorageService.setPuntuacion(5, this.puntuacion);
      }
    }
  }

  public jugarDeNuevo(){
    this.respuesta = "Elije tu opcion";
    this.intentos = 3;
    this.puntuacionActual = {
      empates: 0,
      ganadas: 0,
      perdidas: 0,
    }
  }
}
