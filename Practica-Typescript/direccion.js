"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
var direccion = /** @class */ (function () {
    function direccion(calle, numero, piso, letra, codigo_postal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigo_postal = codigo_postal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    direccion.prototype.toString = function () {
        return "\n\t\t\t- Calle: ".concat(this.calle, " - N\u00BA: ").concat(this.numero.toString(), " - Piso: ").concat(this.piso.toString(), " - Letra: ").concat(this.letra, " \n\t\t\t - Cod. Postal: ").concat(this.codigo_postal.toString(), " - Poblacion: ").concat(this.poblacion, " - Provincia: ").concat(this.provincia);
    };
    return direccion;
}());
exports.direccion = direccion;
