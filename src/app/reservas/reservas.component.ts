import { Component, Input } from '@angular/core';
import { ReservaDto } from './reservaDto';
import { UsuarioDto } from './usuarioDto';
import { VuelosDto } from '../vuelos/vuelosDto';
import { ReservasService } from './reservas.service';

@Component({
  selector: 'reservas',
  templateUrl: './reservas.component.html',
  providers: [ReservasService]
})
export class ReservasComponent {
	public reservas:ReservaDto;
	public usuario:UsuarioDto;
	@Input('vueloSeleccionado') vueloSeleccionado:VuelosDto;

	constructor(
		private _reservasService: ReservasService
	){
		this.usuario = new UsuarioDto(null, "Gelvez Leon", "1989-04-18", "Daniel Ivan", 12345);
		// this.vuelo = new VuelosDto(1, "avianca", "medellin", "bogota", "2018-03-17", 150000);

		this.reservas = new ReservaDto(null, new Date(), this.usuario, this.vueloSeleccionado);

		console.log(this.vueloSeleccionado);
	}

	reservarVuelo(){
		this._reservasService.reservarVuelo(this.reservas).subscribe(
			result => {
				// this.vuelos = result;
				console.log(result);

				if(result.respuestaDto && result.respuestaDto.codigo == 0){
					alert("Se guardo la reserva correctamente.")                   
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