import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnagramaComponent } from './componentes/pages/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/pages/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './componentes/pages/agilidad-aritmetica/agilidad-aritmetica.component';
import { TaTeTiComponent } from './componentes/pages/ta-te-ti/ta-te-ti.component';
import { MemotestComponent } from './componentes/pages/memotest/memotest.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { MenuComponent } from './componentes/pages/menu/menu.component';
import { AboutComponent } from './componentes/pages/about/about.component';
import { FormsModule } from '@angular/forms';
import { AdivinarNumeroComponent } from './componentes/pages/adivinar-numero/adivinar-numero.component';

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
    AdivinarNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
