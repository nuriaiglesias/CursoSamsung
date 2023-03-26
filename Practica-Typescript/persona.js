"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, DNI, cumpleaños, color_fav, sexo, direccion, mail, telefono, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DNI = DNI;
        this.cumpleaños = cumpleaños;
        this.color_fav = color_fav;
        this.sexo = sexo;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono = telefono;
        this.notas = notas;
    }
    // Método para modificar datos en función del DNI
    Persona.modificarPersona = function (DNI, direcciones, mails, telefonos, listaPersonas) {
        for (var i = 0; i < listaPersonas.length; i++) {
            if (listaPersonas[i].DNI === DNI) {
                for (var j = 0; j < direcciones.length; j++) {
                    listaPersonas[i].modificarDireccion(direcciones[j]);
                }
                for (var j = 0; j < mails.length; j++) {
                    listaPersonas[i].modificarMail(mails[j]);
                }
                for (var j = 0; j < telefonos.length; j++) {
                    listaPersonas[i].modificarTelefono(telefonos[j]);
                }
                return true; // Devuelve true si encuentra la persona y la modifica
            }
        }
        return false; // Devuelve false si no encuentra la persona
    };
    Persona.prototype.modificarDireccion = function (nuevaDireccion) {
        this.direccion.push(nuevaDireccion);
    };
    Persona.prototype.modificarMail = function (nuevoMail) {
        this.mail.push(nuevoMail);
    };
    Persona.prototype.modificarTelefono = function (nuevoTelefono) {
        this.telefono.push(nuevoTelefono);
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDNI = function () {
        return this.DNI;
    };
    Persona.prototype.getCumpleaños = function () {
        return this.cumpleaños.toLocaleDateString();
    };
    Persona.prototype.getColorFav = function () {
        return this.color_fav;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.getMail = function () {
        return this.mail;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    return Persona;
}());
exports.Persona = Persona;
