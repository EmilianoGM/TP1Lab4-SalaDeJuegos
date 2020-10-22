import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './componentes/pages/about/about.component';
import { AgilidadAritmeticaComponent } from './componentes/pages/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './componentes/pages/anagrama/anagrama.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { MemotestComponent } from './componentes/pages/memotest/memotest.component';
import { PiedraPapelTijeraComponent } from './componentes/pages/piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './componentes/pages/ta-te-ti/ta-te-ti.component';
import { AdivinarNumeroComponent } from './componentes/pages/adivinar-numero/adivinar-numero.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:"adivinar-numero",
    component: AdivinarNumeroComponent
  },
  {
    path: 'agilidad-aritmetica',
    component: AgilidadAritmeticaComponent
  },
  {
    path: 'anagrama',
    component: AnagramaComponent
  },
  {
    path: 'memotest',
    component: MemotestComponent
  },
  {
    path: 'piedra-papel-tijera',
    component: PiedraPapelTijeraComponent
  },
  {
    path: 'tateti',
    component: TaTeTiComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
