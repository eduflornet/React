// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    //rango: 'Soldado'
};

// Primer ejemplo de desestructuracion
// se extraen las propiedades y se definen de tipo "const"
const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

// entre llaves se definen las propiedades
const myContext = ({nombre, edad, rango = 'Capitan'}) =>{
    //console.log(usuario);
    //const {nombre, edad, clave} = usuario;
    console.log('myContext: ');
    return ({
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: 12.3223
        } 
    })
        
};

// extraigo las propiedades que me interesan
const {nombreClave, anios, latlng: {lat, lng}} =  myContext(persona);
//const {lat, lng} = latlng; 
//const {nombreClave, anios} = avenger;
console.log(nombreClave);
console.log(anios);
console.log(lat, lng);