const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123456,
        lat: 14.98765,
        lng: 34.9865432
    }
};


// solo esta una copia de la referencia de obejto "persona" al objeto "persona2"
//const persona2 = persona;
// con el operador spread se copia el objeto y el valor de cada propiedad
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.table(persona);
console.table(persona2)
