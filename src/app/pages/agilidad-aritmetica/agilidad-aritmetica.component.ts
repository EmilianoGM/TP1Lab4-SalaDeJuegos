import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgilidadAritmética, Calculo} from 'src/app/clases/logica/agilidadAritmetica';
import { IPuntuacion } from 'src/app/clases/puntuacion';
import { CloudStorageService } from 'src/app/services/cloud-storage.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.scss']
})
export class AgilidadAritmeticaComponent implements OnInit {
  formAgilidad: FormGroup;
  juego: AgilidadAritmética;
  intentos: number;
  puntuacion: IPuntuacion;
  calculo: Calculo;
  mensajeCalculo: string;
  mensaje: string;
  respuesta: string;

  constructor(
    private router: Router,
    private cloudStorageService: CloudStorageService,
    private formBuilder: FormBuilder,
    ) {
      this.formAgilidad = this.formBuilder.group({
        resultado: [
          '',
          [Validators.required,
          Validators.maxLength(5),
          ]
        ]
      });
      this.mensaje = "Acertá el resultado del cálculo en 3 intentos o menos"
      this.respuesta = "Para comenzar introduce un número";
      this.cloudStorageService.getPuntuacion(2).then((data) => {
        this.puntuacion = data;
      });
      this.intentos = 3;
      this.juego = new AgilidadAritmética();
      this.calculo = this.juego.jugar();
      this.mensajeCalculo = this.calculo.cuenta;

    }

  ngOnInit(): void {
  }

  public jugar(resultadoIngresado: string){
    if(this.intentos > 0){
      if(this.calculo.resultado == resultadoIngresado){
        this.intentos = 0;
        this.respuesta = "¡Felicitaciones, ese era el resultado correcto!";
        this.puntuacion.ganadas++;
        this.puntuacion.cantidad++;
        this.cloudStorageService.setPuntuacion(2, this.puntuacion);
      } else {
        this.intentos--;
        if(this.intentos == 0){
          this.respuesta = "GAME OVER, perdiste esta vez";
          this.puntuacion.perdidas++;
          this.puntuacion.cantidad++;
          this.cloudStorageService.setPuntuacion(2, this.puntuacion);
        } else{
          this.respuesta = "Fallaste, proba otra vez.";
        }
      }
    }
    this.formAgilidad.reset();
  }

  public jugarDeNuevo(){
    this.formAgilidad.reset();
    this.respuesta = "Para comenzar introduce un número";
    this.intentos = 3;
    this.calculo = this.juego.jugar();
    this.mensajeCalculo = this.calculo.cuenta;
  }
}
