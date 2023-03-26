export class telefono{
    private tipoTel: string;
    private numeroTel: number;

    constructor(tipoTel: string, numeroTel: number){
        this.tipoTel = tipoTel;
        this.numeroTel = numeroTel;
    }
    toString(): string {
        return `\n\t\t\t- Tipo: ${this.tipoTel} - Nº: ${this.numeroTel.toString()}`;
      }
}