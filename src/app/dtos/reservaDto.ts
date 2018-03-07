import { UsuarioDto } from './usuarioDto';
import { VuelosDto } from './vuelosDto';

export class ReservaDto{

	constructor(
		public id,
		public fechaReserva,
		public usuario:UsuarioDto,
		public vuelo:VuelosDto
	){}
}