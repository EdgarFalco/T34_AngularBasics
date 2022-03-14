import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textoVisor: any = '';
  operador1: number = 0;
  operador2: number = 0;
  operacion: string = '';
  resultado: any = 0;

  // Añadimos numeros en el visor
  anadirNumero(numero: number) {
    this.textoVisor += '' + numero;
  }

  //Vacia el visor
  borrar() {
    this.textoVisor = '';
  }

  //Elimina la ultima posicion
  retr() {
    this.textoVisor = this.textoVisor.substring(0, this.textoVisor.length - 1);
  }

  //Añade o quita "-""
  masmenos() {
    this.resultado = 0;
    this.resultado = -this.textoVisor;
    this.textoVisor = this.resultado;
  }

  // //Hace el porcentaje
  porcentaje() {
    this.resultado = 0;
    this.resultado = this.textoVisor / 100;
    this.textoVisor = this.resultado;
  }

  // Hace operacion Raiz
  raiz() {
    this.resultado = 0;
    this.resultado = Math.sqrt(this.textoVisor);
    this.textoVisor = this.resultado;
  }

  //El inverso de un número A es 1/A ya que A * 1/A = 1 (por ejemplo, el inverso de 5 es 1/5)
  inversa() {
    this.resultado = 0;
    this.resultado = 1 / this.textoVisor;
    this.textoVisor = this.resultado;
  }

  // Hace las operaciones + | - | * | /
  hacerOperacion(op: string) {
    this.operacion = op;
    this.operador1 = this.textoVisor;
    this.textoVisor = '';
  }

  // //Evalua los operadores y la operacion, muestra el resultado en el visor
  igual() {
    this.resultado = 0;
    this.operador2 = this.textoVisor;
    this.resultado = eval(this.operador1 + this.operacion + this.operador2);
    this.textoVisor = this.resultado;
  }
}
