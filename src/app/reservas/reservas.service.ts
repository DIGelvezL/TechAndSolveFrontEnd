import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ReservaDto } from '../dtos/reservaDto';

const RESERVAR_VUELO = "http://localhost:8080/TechAndSolve/api/reserva/reservarVuelo";

@Injectable()
export class ReservasService{
	public url:string;

	constructor(private _http: HttpClient){
		this.url = RESERVAR_VUELO;
	}

	reservarVuelo(reserva: ReservaDto):Observable<any>{
		let json = JSON.stringify(reserva);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/json');
         
        return this._http.post(this.url, json, {headers: headers});
	}
}