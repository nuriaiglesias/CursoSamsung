"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
var mail = /** @class */ (function () {
    function mail(tipoMail, direccionMail) {
        this.tipoMail = tipoMail;
        this.direccionMail = direccionMail;
    }
    mail.prototype.toString = function () {
        return "\n\t\t\t- Tipo: ".concat(this.tipoMail, " - Direcci\u00F3n: ").concat(this.direccionMail);
    };
    return mail;
}());
exports.mail = mail;
