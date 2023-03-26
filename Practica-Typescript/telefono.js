"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;
var telefono = /** @class */ (function () {
    function telefono(tipoTel, numeroTel) {
        this.tipoTel = tipoTel;
        this.numeroTel = numeroTel;
    }
    telefono.prototype.toString = function () {
        return "\n\t\t\t- Tipo: ".concat(this.tipoTel, " - N\u00BA: ").concat(this.numeroTel.toString());
    };
    return telefono;
}());
exports.telefono = telefono;
