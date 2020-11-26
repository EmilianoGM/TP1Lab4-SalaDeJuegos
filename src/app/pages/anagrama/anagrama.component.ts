import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPuntuacion } from 'src/app/clases/puntuacion';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';
import { Anagrama } from '../../clases/logica/anagrama';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.scss']
})
export class AnagramaComponent implements OnInit {
  formAnagrama: FormGroup;
  juego: Anagrama;
  palabraAdivinar: string;
  intentos: number;
  mensaje: string;
  respuesta: string;
  puntuacion: IPuntuacion;

  constructor(
    private router: Router,
    private cloudStorageService: CloudStorageService,
    private formBuilder: FormBuilder,
  ) {
    this.formAnagrama = this.formBuilder.group({
      palabra: [
        '',
        [Validators.required,
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z ]*')]
      ]
    });

    this.juego = new Anagrama();
    this.palabraAdivinar = this.juego.getSeleccionMezclada();
    this.intentos = 3;
    this.mensaje = "Tratá de adivinar la palabra desordenada";
    this.respuesta = "Para empezar introduce una palabra";
    this.cloudStorageService.getPuntuacion(3).then((data) => {
      this.puntuacion = data;
    });
  }

  ngOnInit(): void {
  }

  public jugar(palabra: string) {
    if(this.intentos > 1){
      if(this.juego.jugar(palabra)){
        this.respuesta = "GANADOR, adivinaste la palabra";
        this.puntuacion.ganadas++;
        this.puntuacion.cantidad++;
        this.cloudStorageService.setPuntuacion(3, this.puntuacion);
        this.formAnagrama.reset();
        this.intentos = 0;
      } else {
        this.intentos--;
        this.respuesta = "Esa no es la palabra, probá de nuevo";
      }
    } else {
      this.intentos--;
      this.respuesta = "GAME OVER, perdiste";
      this.puntuacion.perdidas++;
      this.puntuacion.cantidad++;
        this.cloudStorageService.setPuntuacion(3, this.puntuacion);
    }
    this.formAnagrama.reset();
  }

  public jugarDeNuevo(){
    this.formAnagrama.reset();
    this.palabraAdivinar = this.juego.getSeleccionMezclada();
    this.intentos = 3;
    this.respuesta = "Para empezar introduce una palabra";
  }
}
