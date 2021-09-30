import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Direction } from '../../interfaces/direction.interface';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css'],
})
export class DirectionComponent implements OnInit {
  pais: string = '';
  calle: string = '';
  ciudad: string = '';
  region: string = '';
  codigoPostal: number = 0;

  errores: string[] = [];
  dataCompleta: boolean = false;

  direccion: Direction = {
    pais: '',
    calle: '',
    ciudad: '',
    region: '',
    codigoPostal: 0,
  };

  @Output()
  saveDirectionEvent: EventEmitter<Direction> = new EventEmitter();

  @Output()
  validDirectionEvent: EventEmitter<boolean> = new EventEmitter();

  guardar() {
    /* Validar datos */
    this.errores = [];
    this.dataCompleta = false;

    if (this.pais == '') {
      this.errores.push('El pais es requerido y al menos 3 caracteres');
    }
    if (this.calle == '') {
      this.errores.push('La calle es requerida');
    }
    if (this.ciudad == '') {
      this.errores.push('La ciudad es requerida');
    }
    if (this.region == '') {
      this.errores.push('La region es requerida');
    }
    if (this.codigoPostal == 0) {
      this.errores.push('El codigo postal es requerido');
    }

    if (this.errores.length == 0) {
      this.direccion = {
        pais: this.pais,
        calle: this.calle,
        ciudad: this.ciudad,
        region: this.region,
        codigoPostal: this.codigoPostal,
      };
      this.dataCompleta = true;
      this.saveDirectionEvent.emit(this.direccion);
      this.validDirectionEvent.emit(true);

      console.log('guardando direccion', this.direccion);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
