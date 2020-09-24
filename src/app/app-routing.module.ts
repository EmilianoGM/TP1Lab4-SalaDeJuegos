import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { HomeComponent } from './componentes/home/home.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './componentes/ta-te-ti/ta-te-ti.component';


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
