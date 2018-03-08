import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ReservaDto } from '../dtos/reservaDto';

const RESERVAR_VUELO = "http://localhost:8080/TechAndSolve/api/reserva/reservarVuelo";
const CONSULTAR_RESERVA_BY_CEDULA_FECHA = "http://localhost:8080/TechAndSolve/api/reserva/consultarByCedulaFecha";

@Injectable()
export class ReservasService{
	public url:string;

	constructor(private _http: HttpClient){}

	reservarVuelo(reserva: ReservaDto):Observable<any>{
		let json = JSON.stringify(reserva);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/json');
         
        return this._http.post(RESERVAR_VUELO, json, {headers: headers});
	}

	consultarByCedulaFecha(request):Observable<any>{
		let json = JSON.stringify(request);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/json');
         
        return this._http.post(CONSULTAR_RESERVA_BY_CEDULA_FECHA, json, {headers: headers});
	}
}