export class Ciudad {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;

    constructor(id: number, nombre: string, descripcion: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
      }
}