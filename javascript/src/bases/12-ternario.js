// Operador condicional ternario

const activo = true;
let mensaje = '';

/*
if (!activo){
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}
*/

//mensaje = ( activo ) ? 'Activo': 'Inactivo';
//mensaje = (activo === true) && 'Activo';
mensaje = activo && 'Activo';

console.log(mensaje);