export interface Payment {
  tipoTarjeta: string;
  nombreTitular: string;
  numeroTarjeta: number;
  codigoSeguridad: number;
  fechaVencimiento: string;
  anoVencimiento: number;
}
