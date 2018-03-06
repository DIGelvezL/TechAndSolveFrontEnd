import { Component } from '@angular/core';
import { VuelosDto } from './vuelosDto';
import { VuelosService } from './vuelos.service';

@Component({
  selector: 'vuelos',
  templateUrl: './vuelos.component.html',
  providers: [VuelosService]
})
export class VuelosComponent {
	public vuelos:Array<VuelosDto>;

	constructor(
		private _vuelosService: VuelosService
	){}

	ngOnInit(){
		this._vuelosService.getVuelos().subscribe(
			result => {
				this.vuelos = result;

				if(this.vuelos){
					console.log(this.vuelos);                    
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