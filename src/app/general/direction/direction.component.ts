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

  direccion: Direction = {
    pais: '',
    calle: '',
    ciudad: '',
    region: '',
    codigoPostal: 0,
  };

  @Output()
  saveDirectionEvent: EventEmitter<Direction> = new EventEmitter();

  guardar() {
    /* Validar datos */

    this.direccion = {
      pais: this.pais,
      calle: this.calle,
      ciudad: this.ciudad,
      region: this.region,
      codigoPostal: this.codigoPostal,
    };

    this.saveDirectionEvent.emit(this.direccion);

    console.log('guardando direccion', this.direccion);
  }

  constructor() {}

  ngOnInit(): void {}
}
