import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const CONSULTAR_VUELOS = "http://localhost:8080/TechAndSolve/api/vuelos/consultarVuelos";

@Injectable()
export class VuelosService{
	public url:string;

	constructor(private _http: HttpClient){
		this.url = CONSULTAR_VUELOS;
	}

	getVuelos():Observable<any>{
		return this._http.get(this.url);
	}
}