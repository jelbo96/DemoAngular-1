import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {


  fecha: string= new Date().toISOString();
  fecha2: number = new Date().getTime();
  curso: string = "Angular";
  inputDay: string = "";


  inputEmail: string = "";
  inputPassword: string = "";


  /* puede ser de uno de los 2 tipos de datos */
  variable: number|null = 1;
  value: boolean = true;

  dias: Array<string> = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
  deletedDay: string|null = null;


  /* Formulario */
  insertar() {
      console.log("insertar" + this.inputEmail + " " + this.inputPassword);



  }



  cambiaFormato() {
    this.fecha = this.fecha.substring(0, 10);

  }

  sumar() {
    if(this.variable != null) {
      this.variable++;
    }
  }

  changeValue() {
    this.value = !this.value;
  }


  deleteDay(index: number) {
    this.deletedDay = this.dias[index];
    this.dias.splice(index, 1);
    console.log("elemento eliminado"+index);
  }




  get dia(): number|null{
    /* Aqui se podria modificar la variable, modifica el
    valor default, ideal para apis */
    return this.variable;
  }



  agregarDia(){
    if(this.inputDay != ""){
      this.dias.push(this.inputDay);
      this.inputDay = "";
    }
  }

  constructor() { console.log("constructor de pruebas") }

  ngOnInit(): void {
    console.log("onInit pruebas")
  }

}
