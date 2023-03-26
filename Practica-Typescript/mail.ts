export class mail{
    private tipoMail: string;
    private direccionMail: string;
    
    constructor(tipoMail: string, direccionMail: string){
        this.tipoMail = tipoMail;
        this.direccionMail = direccionMail;
    }

    toString(): string {
        return `\n\t\t\t- Tipo: ${this.tipoMail} - Dirección: ${this.direccionMail}`;
      }
}