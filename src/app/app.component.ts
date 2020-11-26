import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { FireAuthService } from './services/fire-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SalaDeJuegos';
  hayUsuario: boolean;

  constructor(
    private fireAuthService: FireAuthService,
    private router: Router
  ){
    this.fireAuthService.getAuthState().subscribe((authState) => {
      if(authState){
        this.hayUsuario = true;
      } else {
        this.hayUsuario = false;
      }
    })
  }

  public logOut(){
    if(this.hayUsuario){
      this.fireAuthService.logoutUsuario().then((res) => {
        this.router.navigateByUrl('/login');
      });
    }
  }
}
