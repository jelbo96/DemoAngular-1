import { ThrowStmt } from '@angular/compiler';
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

  errores: string[] = [];
  dataCompleta: boolean = false;

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

  @Output()
  validPaymentEvent: EventEmitter<boolean> = new EventEmitter();

  guardar() {
    this.errores = [];
    this.dataCompleta = false;
    this.validPaymentEvent.emit(false);
    /* Validar datos */
    if (this.tipoTarjeta === '') {
      this.errores.push('Debe indicar un tipo de tarjeta');
    }
    if (this.nombreTitular === '') {
      this.errores.push('Debe indicar el nombre del titular');
    }
    if (this.numeroTarjeta === 0) {
      this.errores.push('Debe ingresar el número de la tarjeta');
    }
    if (this.codigoSeguridad === 0) {
      this.errores.push('Debe ingresar el código de seguridad');
    }
    if (this.fechaVencimiento === '') {
      this.errores.push('Debe ingresar la fecha de vencimiento');
    }
    if (this.anoVencimiento === 0) {
      this.errores.push('Debe ingresar el año de vencimiento');
    }
    if (this.errores.length === 0) {
      this.medioDePago = {
        tipoTarjeta: this.tipoTarjeta,
        nombreTitular: this.nombreTitular,
        numeroTarjeta: this.numeroTarjeta,
        codigoSeguridad: this.codigoSeguridad,
        fechaVencimiento: this.fechaVencimiento,
        anoVencimiento: this.anoVencimiento,
      };
      this.dataCompleta = true;
      this.savePaymentEvent.emit(this.medioDePago);
      this.validPaymentEvent.emit(true);

      console.log('guardando datos de pago', this.medioDePago);
    }
  }

  changeTipo(e: any) {
    this.tipoTarjeta = e.target.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
