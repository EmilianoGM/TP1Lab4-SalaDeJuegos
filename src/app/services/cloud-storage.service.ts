import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FireAuthService } from './fire-auth.service';
import { IPuntuacion } from '../clases/puntuacion';
import { Observable, Subscription } from 'rxjs';
import { IUsuario } from '../clases/usuarios';

@Injectable({
  providedIn: 'root'
})
export class CloudStorageService {
  uid: Promise<string>;
  coleccionPuntuaciones: AngularFirestoreCollection;
  coleccionPuntuacionJugador: AngularFirestoreCollection<IPuntuacion>;
  coleccionUsuarios: AngularFirestoreCollection<IUsuario>;
  constructor(
    private database: AngularFirestore,
    private authService: FireAuthService
  ) {
    this.coleccionUsuarios = this.database.collection('usuarios');
    this.coleccionPuntuaciones = this.database.collection('partidasJugador');
    this.uid = this.authService.getUIDUserLoggeado();
    this.uid.then((data) => {
      this.coleccionPuntuacionJugador = this.coleccionPuntuaciones.doc(data).collection('puntuaciones');
    });
  }

  public async getlistaPuntuaciones(): Promise<Observable<IPuntuacion[]>>{
    return new Promise((res, rej) => {
      this.uid = this.authService.getUIDUserLoggeado();
      this.uid.then((data) => {
        this.coleccionPuntuacionJugador = this.coleccionPuntuaciones.doc(data).collection('puntuaciones');
        res(this.coleccionPuntuacionJugador.valueChanges());
    })
    });
  }

  public setPuntuacion(id:number, puntuacion: IPuntuacion){
    try{
      this.coleccionPuntuacionJugador.doc(id.toString()).update(puntuacion);
    } catch(error){
      console.log(error);
    }
  }

  public async getPuntuacion(id: number): Promise<IPuntuacion>{
    let observador: Subscription;
    let puntuacion: IPuntuacion;
    const terminado = await new Promise<boolean>((resolve, reject) => {
      observador = this.coleccionPuntuacionJugador.doc(id.toString()).valueChanges().subscribe((data) => {
        puntuacion = data;
        resolve(true);
      });
    });
    if(terminado){
      observador.unsubscribe();
      return puntuacion;
    }
  }

  public async getNombre(): Promise<string>{
    let observador: Subscription;
    let user: IUsuario
    let nombre: string = "";
    const terminado = await new Promise<boolean>((resolve, reject) => {
      this.uid.then((data) =>{
        observador = this.coleccionUsuarios.doc(data).valueChanges().subscribe((snap)=>{
         user = snap;
         nombre = user.nombre + " " + user.apellido;
         resolve(true);
        });
      });
    });
    if(terminado){
      observador.unsubscribe();
      return nombre;
    }
  }
}
