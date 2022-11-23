const arreglo = [1,2,3,4];

// con el operador spread se realiza una copia
let arreglo2 = [...arreglo];
arreglo2.push(5);

// la funcion que se ejecuta dentro del map se conoce como "callback
// se ejecuta por cada uno de los elementos que este en map
const arreglo3 = arreglo2.map( function(numero){
    return numero *2;
});

// arreglo3 no altera los valores de los arreglos anteriores

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);