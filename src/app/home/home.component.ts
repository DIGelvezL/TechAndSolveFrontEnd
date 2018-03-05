import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})
export class HomeComponent{
	public titulo = "Página principal";
	public listado_ropa:Array<string>;
	public prenda_a_guardar:string;

	public fecha;
	public nombre = "DANIEL gelvez LEON"

	constructor(
	){
		this.fecha = new Date(2018, 2, 1);
	}

}