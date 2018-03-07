export class UsuarioDto{

	public id;
	public nombre:string;
	public apellido:string;
	public fechaNacimiento:string;
	public telefono:string;
	public cedula:string;

	constructor(){
		this.id = null;
		this.nombre = null;
		this.apellido = null;
		this.fechaNacimiento = null;
		this.telefono = null;
		this.cedula = null;
	}
}