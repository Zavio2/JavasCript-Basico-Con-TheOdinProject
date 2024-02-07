// *ARRAYS: Es una variable especial que puede contener más de un dato
// ej:

const numbers = [1, "Dos", 3, "cuatro"];

const cars = ["Audi", "Mercedes", "BMW"];

// *TAmbien se puede crear el array vacío y luego introducir los los elementos

const names = [];
names[0] = "Robert";
names[1] = "ALbert";
names[2] = "Nand";

console.log(names);

// *Acceder a los arrays:

console.log(names[0]); // print the first value (Robert)

// * Cambiar lo que hay dentro del array

const colors = ["blue", "white", "yellow"];

colors[1] = "black"; // Change blue to black

colors.push("red"); // Agrega un elemento (o varios) nuevo al final del array

/* colors.pop(); // Elimina el último elemento del array */

colors.shift(); // Saca el primer elemento del array (y lo returna) y mueve el siguiente al 1er lugar (al índice [0])

colors.unshift("pink"); // Agrega un elemento al inicio del array

// *Acceder al último valor del array

console.log(colors[colors.length - 1]);

// length = mayor índice del array +1
// ej:
const randomArr = [1, 2, 3, 4];
randomArr[200] = 200;
console.log(randomArr.length); // imprime 201

// * Formas de iterar un array (con bucles, con reduce, con map...)

// Con for of

for (const newVariable of colors) {
  //Se crea una nueva variable (en este caso NewVariable) y cada elemento del array se va iterando en esa variable

  console.log(newVariable); // se imprime cada elemento del array
}

// Con for

const Numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < Numeros.length; i++) {
  const newVariable = Numeros[i];

  console.log(newVariable); //imprime cada elemento del array
}

//*********************** MÉTODOS DE ARRAYS ****************************************

//! Mejorar estos apuntes explicando bien cada método con varios ejemplos, agregar los demás métodos de javascript.info

// *Usando el método reduce:
// Se usa para reducir todos los elemtos de un array a uno solo

const num = [1, 2, 3, 4, 5];

let resultado = num.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);

//El 0 es el valor inicial con el que empieza "acumulador", y "valorActual" es igual a cada valor del array que va recorriendo

// *Usando map:
// Se usa para aplicar una función a cada elemto del array y crear uno nuevo con el resultado

const num2 = [1, 2, 3, 4, 5];

let resultDoble = num2.map((valor) => valor * 2); //  returna la multipicación por 2 de cada elemento del array en un nuevo array

// *Usando filter:
// Este método crea un nuevo array con los elementos que cumplan las condiciones que se dan

const num3 = [12, 15, 20, 23, 40];

let mayoresQue20 = num3.filter((num) => num > 20);

/* Ver los demás métodos en Javascript.info o MDN */

//* Splice modifica el array, eliminando, agregando o sustituyendo elementos de este

// arr.splice(indice, cantidad de elementos a eliminar a partir del índice(incluyedolo), elemento/s para agregar o sustituir a partir del índice)

const randomArr = ["a", "b", "c", "d", "e"];
randomArr.splice(1, 1, "BB"); // si no pongo nada después del cantidad de elementos, solo elimina sin sustitución
console.log(randomArr);

// No hay que crear otra variable para ejcutar el método, si guardo el resultado en una variable estaría teniendo los elementos eliminados
const Num = [1, 2, 3, 4, 5];
const Result = Num.splice(1, 2);
console.log(Result); // 2, 3 (2 números eliminados a partir del indice dado, incluyéndolo)

/* ************************************LOOPS************************************* */

//* for

for (inicialización; condición; incremento) {
  // código a ejecutar en cada iteración
}

// Ej:
for (i = 0; i <= 3; i++) {
  console.log(i); // se imprime el contenido de i hasta que "i<=3"
}

//* for...of

// Se usa para iterar valores en cualquier objeto que sea iterable

for (variable of objetoIterable) {
  //acción que se va a realizar
}

// Ej:

const randomArray = [1, 2, 3, 4, 5, 6];

for (number of randomArray) {
  console.log(number); // repite el ciclo hasta que imprime cada elemento del array
}

//* while

//?variable inicializadora

while (condición) {
  //código a ejecutar varias veces hasta que se cumpla la condición
}

// ej:
let a = 0;
while (a <= 20) {
  a += 5;
  console.log(a);
}
// Se repite 5 veces

// Break, para forzar la detención de un loop

let value = +prompt("Introduce un número");
let resultd = 0;

for (let i = 0; i < value; i++) {
  if (!value) {
    break; // se detiene y pasa para la 1ra línea que está después del loop
  }
  resultd += 5;
}

if (!value) {
  alert("FUCK YOU!");
} else alert(`El resultado es ${resultd}`);


// Continue. Fuerza al loop a ejecutar la siguiente iteración si se cumple una condición dada

let i = 0
while (i<10) {
  
}