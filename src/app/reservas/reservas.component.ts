import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ReservaDto } from '../dtos/reservaDto';
import { UsuarioDto } from '../dtos/usuarioDto';
import { VuelosDto } from '../dtos/vuelosDto';
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
		private _reservasService: ReservasService,
		private route: ActivatedRoute,
        private router: Router
	){
		this.usuario = new UsuarioDto();
	}

	reservarVuelo(){
		if(this.validarMayorEdad()){
        	this.reservas = new ReservaDto(null, new Date(), this.usuario, this.vueloSeleccionado);

			this.guardarReserva(this.reservas);
        }else{
        	alert("Solo los mayores de edad pueden hacer reservas de vuelo!!");
        }
	}

	validarMayorEdad(){
		let fechanacimiento = moment(this.usuario.fechaNacimiento, "YYYY-MM-DD");
          
        if(!fechanacimiento.isValid())
            return false;
      
        let years = moment().diff(fechanacimiento, 'years');
      
        return years > 18
	}

	guardarReserva(reserva){
		this._reservasService.reservarVuelo(reserva).subscribe(
			result => {
				// this.vuelos = result;
				console.log(result);

				if(result.respuestaDto && result.respuestaDto.codigo == 0){
					this.router.navigate(['']); 
					alert("Se guardo la reserva correctamente.");     
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