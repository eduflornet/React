// Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;
const [ , p2] = personajes;
const [p1, , ] = personajes;

console.log(p3);
console.log(p2);
console.log(p1);
//console.log(personajes);

const retornaArreglo = () => {
    return ['ABC', 123];
};

//console.log(retornaArreglo());
// extraigo los valores del arreglo mediante la posición
const [letras, numeros] = retornaArreglo();
console.log('letras:',letras, 'numeros:', numeros);

// Tarea
// 1.- el primer valor del arreglo se llamara nombre
// 2.- el segundo se llamara setNombre
const myState = (valor) => {
    return [valor, ()=> {console.log('Hola Mundo')} ];
};

const arr = myState('Goku');
const [nombre, setNombre] = arr;
console.log('nombre:',nombre);
console.log('setNombre');
setNombre();