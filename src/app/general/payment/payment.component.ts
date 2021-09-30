import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Payment } from '../../interfaces/payment.interface';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  tipoTarjeta: string = '';
  nombreTitular: string = '';
  numeroTarjeta: number = 0;
  codigoSeguridad: number = 0;
  fechaVencimiento: string = '';
  anoVencimiento: number = 0;

  medioDePago: Payment = {
    tipoTarjeta: '',
    nombreTitular: '',
    numeroTarjeta: 0,
    codigoSeguridad: 0,
    fechaVencimiento: '',
    anoVencimiento: 0,
  };

  @Output()
  savePaymentEvent: EventEmitter<Payment> = new EventEmitter();

  guardar() {
    /* Validar datos */

    this.medioDePago = {
      tipoTarjeta: this.tipoTarjeta,
      nombreTitular: this.nombreTitular,
      numeroTarjeta: this.numeroTarjeta,
      codigoSeguridad: this.codigoSeguridad,
      fechaVencimiento: this.fechaVencimiento,
      anoVencimiento: this.anoVencimiento,
    };

    this.savePaymentEvent.emit(this.medioDePago);

    console.log('guardando datos de pago', this.medioDePago);
  }

  constructor() {}

  ngOnInit(): void {}
}
