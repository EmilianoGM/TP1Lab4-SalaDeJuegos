import { Component, OnInit } from '@angular/core';
import { CloudStorageService } from '../../services/cloud-storage.service';
import { Ahorcado } from '../../clases/logica/ahorcado';
import { IPuntuacion } from '../../clases/puntuacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {
  formAhorcado: FormGroup;
  juego: Ahorcado;
  intentos: number;
  puntuacion: IPuntuacion;
  palabra: string;
  palabraSeparada: string[];
  palabraUsuario: string = "";
  palabraUsuarioSeparada: string[] = [];
  respuesta: string;
  mensaje: string;
  inicio = true;
  uno = false;
  dos = false;
  tres = false;

  constructor(
    private cloudStorageService: CloudStorageService,
    private formBuilder: FormBuilder,
  ) {
    this.formAhorcado = this.formBuilder.group({
      letra: [
        '',
        [Validators.required,
        Validators.maxLength(1)]
      ]
    });
    this.mensaje = "Adivina la palabra oculta en 3 intentos o menos";
    this.respuesta = "Para empezar introduce una letra.";
    this.cloudStorageService.getPuntuacion(7).then((data) => {
      this.puntuacion = data;
    });
    this.intentos = 3;
    this.juego = new Ahorcado();
    this.palabra = this.juego.getPalabra();
    this.palabraSeparada = this.palabra.split('');
    this.palabraSeparada.forEach((letra) => {
      this.palabraUsuarioSeparada.push("_");
      this.palabraUsuario += "_ ";
    });

  }

  ngOnInit(): void {
  }

  public jugar(letra: string){
    let acierto: boolean = false;
    if(this.intentos > 0){
      for (let index = 0; index < this.palabra.length; index++) {
        //comparo cada letra de la palabra con la introducida
        if(letra == this.palabraSeparada[index]){
          //si es igual, la ubico en usuarioSeparada, en el mismo lugar
          this.palabraUsuarioSeparada[index] = this.palabraSeparada[index];
          this.setPalabraMuestra();
          acierto = true;
          break;
        }
      }
      if(acierto){
        //comparo con la palabra introducida a ver si es correcta
        if(this.juego.compararPalabras(this.palabraSeparada, this.palabraUsuarioSeparada)){
          this.intentos = 0;
          this.respuesta = "ADIVINASTE LA PALABRA";
          this.puntuacion.cantidad++;
          this.puntuacion.ganadas = this.puntuacion.ganadas + 1;
          this.cloudStorageService.setPuntuacion(7, this.puntuacion);
        } else {
          this.respuesta = "Acertaste la letra, sigue intentando";
        }
      } else{
        this.intentos--;
        if(this.intentos == 2){
          this.inicio = false
          this.uno = true;
        }
        if(this.intentos == 1){
          this.uno = false;
          this.dos = true;
        }
        //si se terminaron los intentos pierde el juego
        if(this.intentos == 0){
          this.dos = false;
          this.tres = true;
          this.respuesta = "GAME OVER, perdiste el juego";
          this.puntuacion.cantidad++;
          this.puntuacion.perdidas++;
          this.cloudStorageService.setPuntuacion(7, this.puntuacion);
        } else{
          this.respuesta = "Esa letra no está, volve a probar.";
        }
      }
      this.formAhorcado.reset();
    }
  }

  public setPalabraMuestra(){
    this.palabraUsuario = "";
    this.palabraUsuarioSeparada.forEach((letra) => {
      this.palabraUsuario += letra + ' ';
    });
  }

  public jugarDeNuevo(){
    this.respuesta = "Para empezar introduce una letra.";
    this.inicio = true;
    this.uno = false;
    this.dos = false;
    this.tres = false;
    this.formAhorcado.reset();
    this.intentos = 3;
    this.palabraUsuario = "";
    this.palabraUsuarioSeparada = [];
    this.palabra = this.juego.getPalabra();
    this.palabraSeparada = this.palabra.split('');
    this.palabraSeparada.forEach((letra) => {
      this.palabraUsuarioSeparada.push("_");
      this.palabraUsuario += "_ ";
    });
  }
}
