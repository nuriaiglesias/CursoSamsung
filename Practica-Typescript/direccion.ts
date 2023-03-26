export class direccion{
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigo_postal: number;
    private poblacion: string;
    private provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigo_postal: number, poblacion: string, provincia: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this. codigo_postal = codigo_postal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    toString(): string {
        return `\n\t\t\t- Calle: ${this.calle} - Nº: ${this.numero.toString()} - Piso: ${this.piso.toString()} - Letra: ${this.letra} \n\t\t\t - Cod. Postal: ${this.codigo_postal.toString()} - Poblacion: ${this.poblacion} - Provincia: ${this.provincia}`;
      }
}