import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ReservaDto } from '../../dtos/reservaDto';

const CONSULTAR_RESERVA_BY_CEDULA = "http://localhost:8080/TechAndSolve/api/reserva/consultarByCedula";

@Injectable()
export class ConsultarReservasService{
	public url:string;

	constructor(private _http: HttpClient){
		this.url = CONSULTAR_RESERVA_BY_CEDULA;
	}

	consultarReservaByCedula(cedula: string):Observable<any>{
        return this._http.get(this.url + "?cedula=" + cedula);
	}
}