import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  @Output() emitData = new EventEmitter<any>();
  formRegister: FormGroup;
  mensajesValidacion = {
    'email': [
      { tipo: 'required', mensaje: 'El email es requerido.' },
      { tipo: 'email', mensaje: 'Recorda que debe tener formato de email (ejemplo@ejemplo.com).'}
    ],
    'password': [
      { tipo: 'required', mensaje: 'La contraseña es requerida.' },
      { tipo: 'minlength', mensaje: 'La contraseña debe contener al menos 6 caracteres.' }
    ],
    'nombre': [
      { tipo: 'required', mensaje: 'El nombre es requerido.' },
      { tipo: 'pattern', mensaje: 'El nombre solo puede contener letras' }
    ],
    'apellido': [
      { tipo: 'required', mensaje: 'El apellido es requerido' },
      { tipo: 'pattern', mensaje: 'El apellido solo puede contener letras' }
    ],
  };
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formRegister = this.formBuilder.group({
      email: [
        '',
        [Validators.required,
          Validators.email]
      ],
      password: [
        '',
        [Validators.required,
        Validators.minLength(6)]
      ],
      nombre: [
        '',
        [Validators.required,
        Validators.pattern('[a-zA-Z ]*')]
      ],
      apellido: [
        '',
        [Validators.required,
        Validators.pattern('[a-zA-Z ]*')]
      ],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginData){
    this.emitData.emit(loginData);
  }

}

