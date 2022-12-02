
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Edu';
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );