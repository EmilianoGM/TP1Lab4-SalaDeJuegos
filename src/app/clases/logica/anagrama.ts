export class Anagrama{
  private listaPalabras: string[];
  private seleccion: string;
  private selecciónMezclada;

  constructor(){
    this.listaPalabras = [
      "prueba",
      "argentina",
      "tecnicatura",
      "programador",
      "universidad"
    ];
    this.generarSeleccion();
  }

  public getSeleccionMezclada(){
    this.generarSeleccion();
    return this.selecciónMezclada;
  }

  public generarSeleccion(){
    let longitud = this.listaPalabras.length;
    let random = Math.floor(Math.random() * longitud);
    this.seleccion = this.listaPalabras[random];
    this.selecciónMezclada = this.mezclarPalabra(this.seleccion);
  }

  public jugar(respuesta: string){
    return respuesta === this.seleccion;
  }

  public mezclarArray(lista: any[]){
    let indice = lista.length;
    let valorTemporal;
    let indiceRandom;

      // While there remain elements to shuffle...
    while (0 !== indice) {

        // Pick a remaining element...
      indiceRandom = Math.floor(Math.random() * indice);
      indice -= 1;

        // And swap it with the current element.
      valorTemporal = lista[indice];
      lista[indice] = lista[indiceRandom];
      lista[indiceRandom] = valorTemporal;
    }

    return lista;
  }

  public mezclarPalabra(palabra: string){
    let resultado = palabra.split("");
    let  longitud = resultado.length;

    for(var i = longitud - 1; i > 0; i--) {
        var random = Math.floor(Math.random() * (i + 1));
        var temporal = resultado[i];
        resultado[i] = resultado[random];
        resultado[random] = temporal;
    }

    return resultado.join("");
  }


}
