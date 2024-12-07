export class Ciudad {
    id: number;
    latitud: number;
    longitud: number;
    nombre: string;
    clima: string;
    temperatura: number;
    imagen: string;

    constructor(id: number, latitud: number, longitud: number, nombre: string,
      clima: string, temperatura: number, imagen: string) {
        this.id = id;
        this.latitud = latitud;
        this.longitud = longitud;
        this.nombre = nombre;
        this.clima = clima;
        this.temperatura = temperatura;
        this.imagen = imagen;
      }

      get getTemperaturaFormateada(): number {
        return parseFloat(this.longitud.toFixed(1)); // Limitar a 1 decimal
      }
}