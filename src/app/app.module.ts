import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnagramaComponent } from './pages/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './pages/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './pages/agilidad-aritmetica/agilidad-aritmetica.component';
import { TaTeTiComponent } from './pages/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './pages/memotest/memotest.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { FormsModule } from '@angular/forms';
import { AdivinarNumeroComponent } from './pages/adivinar-numero/adivinar-numero.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormLoginComponent } from './componentes/form-login/form-login.component';
import { FormRegisterComponent } from './componentes/form-register/form-register.component';
import { ButtonResetearComponent } from './componentes/button-resetear/button-resetear.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { ListaPuntuacionComponent } from './componentes/lista-puntuacion/lista-puntuacion.component';

import { ReactiveFormsModule } from '@angular/forms';

//Angular Fire
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerJuegoComponent } from './componentes/spinner-juego/spinner-juego.component';



@NgModule({
  declarations: [
    AppComponent,
    AnagramaComponent,
    PiedraPapelTijeraComponent,
    AgilidadAritmeticaComponent,
    TaTeTiComponent,
    MemotestComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    AdivinarNumeroComponent,
    LoginComponent,
    RegisterComponent,
    FormLoginComponent,
    FormRegisterComponent,
    AhorcadoComponent,
    ButtonResetearComponent,
    ListaPuntuacionComponent,
    SpinnerJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
