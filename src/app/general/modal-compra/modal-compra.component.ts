import { Component, OnInit, Input } from '@angular/core';
import { Direction } from '../../interfaces/direction.interface';
import { Payment } from '../../interfaces/payment.interface';

@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css'],
})
export class ModalCompraComponent implements OnInit {
  @Input()
  productList: any[] = [];

  @Input()
  montoTotal: number = 0;

  direccion: Direction = {
    pais: '',
    calle: '',
    ciudad: '',
    region: '',
    codigoPostal: 0,
  };

  medioDePago: Payment = {
    tipoTarjeta: '',
    nombreTitular: '',
    numeroTarjeta: 0,
    codigoSeguridad: 0,
    fechaVencimiento: '',
    anoVencimiento: 0,
  };

  validDirection = false;
  validPayment = false;

  saveDirection(direccion: Direction) {
    this.direccion = direccion;
    console.log('Direccion padre', this.direccion);
  }

  savePayment(medioDePago: Payment) {
    this.medioDePago = medioDePago;
    console.log('Medio de pago padre', this.medioDePago);
  }

  validateDirection(valid: boolean) {
    this.validDirection = valid;
  }

  validatePayment(valid: boolean) {
    this.validPayment = valid;
  }

  constructor() {
    console.log('Product List', this.productList);
  }

  ngOnInit(): void {}
}
