import { Component } from '@angular/core';
import { VuelosDto } from '../dtos/vuelosDto';
import { VuelosService } from './vuelos.service';

@Component({
  selector: 'vuelos',
  templateUrl: './vuelos.component.html',
  providers: [VuelosService]
})
export class VuelosComponent {
	public vuelos:Array<VuelosDto>;
	public vuelo:VuelosDto = new VuelosDto();
	public esReserva:boolean;

	constructor(
		private _vuelosService: VuelosService
	){
		this.esReserva = false;
	}

	ngOnInit(){
		this._vuelosService.getVuelos().subscribe(
			result => {
				this.vuelos = result;

				if(!this.vuelos){
                	console.log("Error en el servidor");
                }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	reservarVuelo(vuelo){
		this.vuelo = new VuelosDto();
		this.vuelo.id = vuelo.id; 
		this.vuelo.aerolinea = vuelo.aerolinea; 
		this.vuelo.origen = vuelo.origen; 
		this.vuelo.destino = vuelo.destino; 
		this.vuelo.fecha = vuelo.fecha; 
		this.vuelo.valor = vuelo.valor;

		this.esReserva = true;
	}

	cancelar(){
		this.vuelo = new VuelosDto();
		this.esReserva = false;
	}

	recibirDatos(event){
		this.esReserva = event.nombre;
		console.log(event.nombre);
	}
}