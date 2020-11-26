import { Component, OnInit, Input} from '@angular/core';
import { IPuntuacion } from 'src/app/clases/puntuacion';

@Component({
  selector: 'app-lista-puntuacion',
  templateUrl: './lista-puntuacion.component.html',
  styleUrls: ['./lista-puntuacion.component.scss']
})
export class ListaPuntuacionComponent implements OnInit {
  @Input() lista: IPuntuacion[];
  @Input() nombre: string;
  constructor() { }

  ngOnInit(): void {
  }

}
