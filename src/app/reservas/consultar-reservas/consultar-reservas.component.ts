import { Component, Input } from '@angular/core';
import { ReservaDto } from '../../dtos/reservaDto';
import { UsuarioDto } from '../../dtos/usuarioDto';
import { VuelosDto } from '../../dtos/vuelosDto';
import { ConsultarReservasService } from '../consultar-reservas/consultar-reservas.service';

@Component({
  selector: 'consultar-reservas',
  templateUrl: './consultar-reservas.component.html',
  providers: [ConsultarReservasService]
})
export class ConsultarReservasComponent {
	public reservas:Array<ReservaDto>;
	public cedula:string;
	public mostrarReservas:boolean;

	constructor(
		private _consultarReservasService: ConsultarReservasService,
	){
		this.mostrarReservas = false;
	}

	consultarReservaByCedula(){
		this._consultarReservasService.consultarReservaByCedula(this.cedula).subscribe(
			result => {
				this.reservas = result;

				if(this.reservas){
					if(this.reservas.length > 0){
						this.mostrarReservas = true;	
					}else{
						this.mostrarReservas = false;
						alert("No existen reservas con el número de cedula " + this.cedula);
					}
                }else{
                	console.log("Error en el servidor");
                }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}