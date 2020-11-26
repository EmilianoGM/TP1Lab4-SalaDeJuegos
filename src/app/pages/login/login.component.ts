import { Component, OnInit } from '@angular/core';
import { FormLoginComponent } from '../../componentes/form-login/form-login.component';
import { FireAuthService } from '../../services/fire-auth.service';
import { Router} from '@angular/router';
import { CloudStorageService } from '../../services/cloud-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorLogin: boolean = false;

  constructor(
    private fireAuthService: FireAuthService,
    private router: Router,
    private cloudStorageService: CloudStorageService
  ) { }

  ngOnInit(): void {
  }

  public loggearUsuario(value){
    this.fireAuthService.loginUsuario(value)
      .then((res) => {
        this.router.navigateByUrl("/home");
      }, (err) => {
        this.errorLogin = true;
      });
  }
}
