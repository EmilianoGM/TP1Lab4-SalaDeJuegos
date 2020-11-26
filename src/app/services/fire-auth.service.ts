import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { IUsuario } from '../clases/usuarios';
import { IPuntuacion } from '../clases/puntuacion';
@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  estadoAutenticacion: firebase.User;
  listaJuegos = ['Adivinar número', 'Agilidad aritmética', 'Anagrama', 'Memotest', 'Piedra papel o tijera', 'TaTeTi', 'Ahorcado'];
  constructor(
    private angularFireAuth: AngularFireAuth,
    private dataBase: AngularFirestore
  ) {
  }

  /**
   * Para loggear un usuario de Firebase
   * @param value Recibe datos con un campo email y otro password
   */
  public loginUsuario(value){
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    });
  }

  /**
   * Para registrar un usuario en Firebase
   * @param value Recibe datos con campos email, password, nombre y apellido
   */
  public registrarUsuario(value){
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            let usuario: IUsuario = {
              correo: value.email,
              nombre: value.nombre,
              apellido: value.apellido
            };
            this.dataBase.collection('usuarios').doc(res.user.uid).set(usuario);
            let indice = 0;
            this.listaJuegos.forEach((juego)=>{
              indice++;
              let puntuacion: IPuntuacion = {
                nombre: juego,
                cantidad: 0,
                ganadas: 0,
                empates: 0,
                perdidas: 0,
              }
              this.dataBase.collection('partidasJugador').doc(res.user.uid).collection('puntuaciones').doc(indice.toString()).set(puntuacion);
            });
            resolve(res);
          },
          err => reject(err))
    });
  }

  /**
   * Desloggea al usuario
   */
  public logoutUsuario() {
    return new Promise((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth.signOut()
          .then(() => {
            resolve();
          }).catch((error) => {
            console.log("Error en logout", error);
            reject();
          });
      }
    });
  }

  public getAuthState(): Observable<any>{
    return this.angularFireAuth.authState;
  }

  async getUIDUserLoggeado(): Promise<string>{
    let observador: Subscription;
    const terminado = await new Promise<string>((resolve, reject) => {
      observador = this.angularFireAuth.user.subscribe((data) => {
        if(data){
          resolve(data.uid);
        }
      });
    });
    if(terminado){
      observador.unsubscribe();
      return terminado;
    }
  }


}
