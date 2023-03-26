import { mail } from './mail';
import { telefono } from './telefono';
import { direccion } from './direccion';

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private DNI: string;
    private cumpleaños: Date;
    private color_fav: string;
    private sexo: string;
    private direccion: direccion[];
    private mail: mail[];
    private telefono: telefono[];
    private notas: string;

    constructor(nombre: string, apellidos: string, edad: number, DNI: string, cumpleaños: Date, color_fav: string, sexo: string,
        direccion: direccion[], mail: mail[], telefono: telefono[], notas: string) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.DNI = DNI;
      this.cumpleaños= cumpleaños;
      this.color_fav = color_fav;
      this.sexo = sexo;
      this.direccion = direccion;
      this.mail = mail;
      this.telefono = telefono;
      this.notas = notas;
    }
  
    // Método para modificar datos en función del DNI
    static modificarPersona(DNI: string, direcciones: direccion[], mails: mail[], telefonos: telefono[], listaPersonas: Persona[]){
        for (let i = 0; i < listaPersonas.length; i++) {
        if (listaPersonas[i].DNI === DNI) {
            for (let j = 0; j < direcciones.length; j++) {
                listaPersonas[i].modificarDireccion(direcciones[j]);
            }
            for (let j = 0; j < mails.length; j++) {
                listaPersonas[i].modificarMail(mails[j]);
            }
            for (let j = 0; j < telefonos.length; j++) {
                listaPersonas[i].modificarTelefono(telefonos[j]);
            }
            return true; // Devuelve true si encuentra la persona y la modifica
        }
        }
        return false; // Devuelve false si no encuentra la persona
    }
    
    modificarDireccion(nuevaDireccion: direccion) {
        this.direccion.push(nuevaDireccion);
      }

    modificarMail(nuevoMail: mail) {
        this.mail.push(nuevoMail);
      }
    
    modificarTelefono(nuevoTelefono: telefono) {
        this.telefono.push(nuevoTelefono);
      }
      


    public getNombre(): string {
      return this.nombre;
    }
    
    public getApellidos(): string {
        return this.apellidos;
    }
  
    public getEdad(): number {
      return this.edad;
    }
  
    public getDNI(): string {
        return this.DNI;
    }

    public getCumpleaños(): string {
        return this.cumpleaños.toLocaleDateString();
    }

    public getColorFav(): string {
        return this.color_fav;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public getDireccion(): direccion[] {
        return this.direccion;
    }

    public getMail(): mail[] {
        return this.mail;
    }
    
    public getTelefono(): telefono[] {
        return this.telefono;
    }

    public getNotas(): string {
        return this.notas;
    }
  }
  