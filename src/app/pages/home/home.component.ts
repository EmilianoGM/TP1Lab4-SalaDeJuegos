import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloudStorageService } from '../../services/cloud-storage.service';
import { IPuntuacion } from '../../clases/puntuacion';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaPuntuaciones: IPuntuacion[];
  nombreApellido: string;
  constructor(
    private router: Router,
    private cloudStorageService: CloudStorageService,
    private spinner: NgxSpinnerService
  ) {
    this.cloudStorageService.getlistaPuntuaciones().then((data) => {
      data.subscribe((lista)=>{
        this.listaPuntuaciones = lista;
      });
    });
    this.cloudStorageService.getNombre().then((data) =>{
      this.nombreApellido = data;
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

}
