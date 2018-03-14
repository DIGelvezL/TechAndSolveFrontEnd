import { Component, Input, Output, EventEmitter } from '@angular/core';
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
	public reservaList:Array<ReservaDto>;
	@Output() desde_el_hijo = new EventEmitter();

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

        	let request = {
        		cedula: this.reservas.usuario.cedula,
        		fechaReserva: this.reservas.fechaReserva
        	};

        	this.validarReservaByDia(request)

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

	validarReservaByDia(request){
		this._reservasService.consultarByCedulaFecha(request).subscribe(
			result => {
				this.reservaList = result;

				if(this.reservaList && this.reservaList.length == 0){
				    this.guardarReserva(this.reservas);
	        	}else{
	        		alert("No se puede hacer más de una reserva para el mismo día.!!");
	        	}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	guardarReserva(reserva){
		this._reservasService.reservarVuelo(reserva).subscribe(
			result => {
				if(result.respuestaDto && result.respuestaDto.codigo == 0){
					this.router.navigate(['consultar-reservas']); 
					alert("Se guardó la reserva correctamente.");     
                }else{
                	console.log("Error en el servidor");
                }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	volver(event){
		this.desde_el_hijo.emit({nombre: false});
	}
}