import { Persona } from './persona';
import { mail } from './mail';
import { telefono } from './telefono';
import { direccion } from './direccion';

const persona1 = new Persona('Pablo', 'Pérez', 25, '12345678A', new Date('1993-05-20'), 'rojo', 'Hombre', [new direccion('Calle rojo', 12, 1, 'A', 15234, 'Madrid', 'Madrid')], [new mail('personal', 'pablo@gmail.com')], [new telefono('Casa', 123456789)], 'Notas de Juan');
const persona2 = new Persona('María', 'Gómez', 30, '87654321B', new Date('1996-05-21'), 'azul', 'Mujer', [new direccion('Calle azul', 23, 4, 'B', 10234, 'Andalucia', 'Sevilla')], [new mail('trabajo', 'maria@gmail.com')],  [new telefono('Casa', 987654321)], 'Notas de María');
const persona3 = new Persona('Alejandro', 'Rodriguez', 60, '23456789C', new Date('1993-09-30'), 'verde', 'Hombre', [new direccion('Calle verde', 10, 8, 'C', 98765, 'Galicia', 'Ourense')], [new mail('personal', 'pedro@gmail.com')],  [new telefono('Casa', 555555555)], 'Notas de Pedro');

// Registro de personas
const listaPersonas = [persona1,persona2,persona3]

console.log('------------------------------------- ANTES DE MODIFICAR: -------------------------------------');

for (let i = 0; i < listaPersonas.length; i++) {
    console.log(`Información de la persona ${i+1}:`);
    console.log(`- Nombre: ${listaPersonas[i].getNombre()}`);
    console.log(`- Apellido: ${listaPersonas[i].getApellidos()}`);
    console.log(`- Edad: ${listaPersonas[i].getEdad()}`);
    console.log(`- DNI: ${listaPersonas[i].getDNI()}`);
    console.log(`- Cumpleaños: ${listaPersonas[i].getCumpleaños()}`);
    console.log(`- Color favorito: ${listaPersonas[i].getColorFav()}`);
    console.log(`- Sexo: ${listaPersonas[i].getSexo()}`);
    console.log(`- Notas: ${listaPersonas[i].getNotas()}`);
    console.log(`- Dirección: ${listaPersonas[i].getDireccion().toString()}`);
    console.log(`- Correo electrónico: ${listaPersonas[i].getMail().toString()}`);
    console.log(`- Teléfono: ${listaPersonas[i].getTelefono().toString()}`);
    console.log('----------------------------------------------------------------------------------------------------------');
  }

  console.log('------------------------------------- UNA VEZ MODIFICADA LA PERSONA: -------------------------------------');

const dniABuscar = '12345678A';
const nuevaDireccion = new direccion('Calle Nueva', 13, 2, 'S', 15234, 'Madrid', 'Madrid');
const nuevoMail = new mail('trabajo', 'pablo.nuevo@gmail.com');
const nuevoTelefono = new telefono('casa', 983456123);
const modificado = Persona.modificarPersona(dniABuscar, [nuevaDireccion], [nuevoMail], [nuevoTelefono], listaPersonas);
if (modificado) {
    console.log(`La persona con DNI ${dniABuscar} ha sido modificada`);
  } else {
    console.log(`La persona con DNI ${dniABuscar} no ha sido encontrada`);
  }


  for (let i = 0; i < listaPersonas.length; i++) {
    console.log(`Información de la persona ${i+1}:`);
    console.log(`- Nombre: ${listaPersonas[i].getNombre()}`);
    console.log(`- Apellido: ${listaPersonas[i].getApellidos()}`);
    console.log(`- Edad: ${listaPersonas[i].getEdad()}`);
    console.log(`- DNI: ${listaPersonas[i].getDNI()}`);
    console.log(`- Cumpleaños: ${listaPersonas[i].getCumpleaños()}`);
    console.log(`- Color favorito: ${listaPersonas[i].getColorFav()}`);
    console.log(`- Sexo: ${listaPersonas[i].getSexo()}`);
    console.log(`- Notas: ${listaPersonas[i].getNotas()}`);
    console.log("- Dirección:");
    for (let j = 0; j < listaPersonas[i].getDireccion().length; j++) {
      console.log(`${listaPersonas[i].getDireccion()[j].toString()}`);
    }
    console.log(`- Correo electrónico:`);
    for (let j = 0; j < listaPersonas[i].getMail().length; j++) {
      console.log(`${listaPersonas[i].getMail()[j].toString()}`);
    }
    console.log(`- Teléfono:`);
    for (let j = 0; j < listaPersonas[i].getTelefono().length; j++) {
      console.log(`${listaPersonas[i].getTelefono()[j].toString()}`);
    }
    console.log('-----------------------------------------------------------------------------------------------------------');
  }
  