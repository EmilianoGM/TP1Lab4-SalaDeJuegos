import { Component, OnInit } from '@angular/core';
import { FormRegisterComponent } from '../../componentes/form-register/form-register.component';
import { FireAuthService } from '../../services/fire-auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorRegistro: boolean = false;

  constructor(
    private fireAuthService: FireAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public registrarUsuario(value){
    this.fireAuthService.registrarUsuario(value)
      .then((res) => {
        this.router.navigateByUrl("/login");
      }, (err) => {
        this.errorRegistro = true;
      });
  }
}
