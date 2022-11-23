// Funciones

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

// arrow function
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

// arrow function simplificada, mucho mas ligera y facil de mantener
const saludar3 = (nombre) => `Hola, ${nombre}`;


// arrow function simplificada, paramerizable, igual de sencilla que la anterior
// los parentesis indica que regreso un objeto de manera implicita
let nombre = 'Mundo';
const saludar4 = () => (`Hola, ${nombre}`);


console.log(saludar('Edu'));
console.log(saludar2('Astrix'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

// los parantesis indican que estoy regresando un objeto de manera implicita
const getUser = () => {
    return ({
        uid: 'ABC123',
        username: 'tiosam_1234'
    })
};

console.log(getUser());

// Tarea
// 1.- transformar a una arrow function
// 2.- tiene que retornar un objeto implicito
// 3.- pruebas
function getUsuarioActivo(nombre){
    return ({
        uid: 'ERTYU1234',
        username: nombre
    })
};

//const usuarioActivo = getUsuarioActivo('Edu');
const usuarioActivo = (nombre) =>
     ({
        uid: 'ERTYU1234',
        username: nombre
    })

console.log(usuarioActivo('Edu'));