/**************************MÉTODOS QUE NO MODIFICAN EL ARRAY ORIGINAL ***************************** */

// *MAP
// Itera por cada elemento de un array con una función dada, y crea un nuevo array con el resultado
//Ej:

const number = [1, 2, 3, 4];
const dobles = number.map((numero) => numero * 2);

console.log(dobles); //imprime los números del array multiplicados por 2

// Otro ejemplo
// *Dado este array de objetos, debo disminuir un 10% el precio de los productos que cuesten 1000 o más

const productos = [
  { id: "34v802", nombre: "jeans", precio: 500 },
  { id: "77v802", nombre: "chanclas", precio: 900 },
  { id: "45v802", nombre: "camiseta", precio: 1500 },
  { id: "98v802", nombre: "short", precio: 2000 },
];

const productosEnDescuento = productos.map((producto) => {
  if (producto.precio < 1000) return producto; //devolución rápida, para descartar desde el inicio lo que queremos descartar o no queremos que se modifique

  // si no se cumple la 1ra condición, se aplica el return de abajo, y así con cada elemento del array

  return {
    ...producto, //esto hace una  copia superficial de lo que hay en el array de objetos sin modificar el original
    precio: producto.precio * 0.9,
  };
});

console.log(productosEnDescuento); // imprime el array con los productos rebajados

// * También se usa para extraer datos de los objetos
//ej:

const id = productos.map((producto) => {
  return producto.id;
});

console.log(id); // imprime el id de cada producto

//* FILTER

//se crea una función con unas condiciones para un array, y a partir de esta función, todos los elementos del array que "pasen el filtro" pasan para un nuevo array
//ej:

const numer = [12, 13, 20, 35, 40, 50];

const mayoresDe20 = (numero) => {
  return numero >= 20;
};

const numer2 = numer.filter(mayoresDe20);

console.log(numer2); //imprime los numeros que pasaron el filtro, los mayores o = a 20

// *Ej con el array de objetos del inicio
//fltrar los productos baratos

const filtraProductosBaratos = (producto) => {
  return producto.precio <= 1000;
};
const productosBaratos = productos.filter(filtraProductosBaratos);
console.log(productosBaratos);

//filtrar los productos caros

const filtraProductosCaros = (producto) => {
  return !filtraProductosBaratos(producto);
};

const productosCaros = productos.filter(filtraProductosCaros);
console.log(productosCaros);

//filtrar los elementos repetidos de un array

const numb = [1, 5, 5, 6, 7, 7, 8, 5, 9, 20, 20];

const numb2 = numb.filter((numero, index) => {
  return numb.indexOf(numero) === index;
  // de esta forma con indexof se compara el indice de la primera aparición de ese elemento con el indice actual, por ende si se repite no tendrá el mismo indice de la 1ra vez que aparece y no pasa el filtro
});

console.log(numb2);

//* REDUCE
// Aplica una función a cada elemento del array para reducirlo a un solo valor

const numeross = [10, 20, 30, 10];

const resultado = numeross.reduce(
  (acumulador, currentValue) => acumulador + currentValue,
  0
); //el 0 es el valor inicial que tendrá el acumulador, y por currentValue va pasando cada elemento del array por el que va iterando la función

console.log(resultado); // imprime un único valor: 70
/* Sería como:
acumulador (0) += acumulador(0) + 10
acumulador (10) += acumulador(10) + 20
acumulador (30) += acumulador(30) + 30
acumulador (60) += acumulador(60) + 10
acumulador = 70
*/

//* Otra forma de hacer lo mismo:

const numeross2 = [10, 20, 30, 10];

const acumula = (acumulador, currentValue) => acumulador + currentValue; //hacer la función reductora aparte
const result = numeross2.reduce(acumula, 0); // pasar como argumento del .reduce la función reductora y el valor inicial del acumulador

//* Reduce es el más potente, se pueden obtener nuevos arrays, objetos e incluso se puede aplicar .filter y .map con reduce
//ej usado como map:
// Dado un array de números, obten un nuevo array con los dobles de cada número, pero usando reduce

const num = [12, 43, 56, 76, 23, 23];

const funReductora = (acumulador, currentValue) => {
  // acumulador.push(currentValue * 2);

  return [...acumulador, currentValue * 2]; //usando el spreed operator para hacer una copia del array y no modificar el original con el método .push
};

const numDobles = num.reduce(funReductora, []); //poniendo un array como valor incial del acumulador

console.log(numDobles);

//ej como filter
//Filtra los mayores de 40

const numm = [12, 43, 56, 76, 23, 23];

const filtraLosMayoresDe40 = (acumulador, currentValue) => {
  if (currentValue > 40) {
    acumulador.push(currentValue);
  }
  return [...acumulador];
};
const mayoresDe40 = numm.reduce(filtraLosMayoresDe40, []);

console.log(mayoresDe40);

//* AHORA LOS 3 MÉTODOS JUNTOS

//* SORT

//Si se pone sol sort() sin poner niguna función de comparación, se organiza el array según la reglas unicode, pero cuando pones una función de comparación tú decides como se organiza todo

//En la función de comparación se usan dos parámetros (a, b), si la función returna un valor mayor a 0, se pone el segundo parámetro antes ej: (b, a), si returna un valor menor a 0, se pone el segundo parámetro 1ro (a, b) y si es igual a 0, se mantiene igual

const numeros = [1, 23, 21, 10, 5, 43, 0];

const compareFn = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
};

const numerosOrdenados = [...numeros].sort(compareFn); 
//1- Copio el array a otro con el método spread para no modificar el array original, porque a diferencia de los demás, sort sí modifica el array
 //2- Aplico el método sort a el nuevo array

console.log(numeros); // imprime el array original
console.log(numerosOrdenados); // imprime el array con los números ordenados
