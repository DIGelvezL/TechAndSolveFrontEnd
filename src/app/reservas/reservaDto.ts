import { UsuarioDto } from './usuarioDto';
import { VuelosDto } from '../vuelos/vuelosDto';

export class ReservaDto{

	constructor(
		public id,
		public fechaReserva,
		public usuario:UsuarioDto,
		public vuelo:VuelosDto
	){}
}