/* 
Escribe la función camelize(str) que convierta palabras separadas por guión como “mi-cadena-corta” en palabras con mayúscula “miCadenaCorta”.

Esto sería: remover todos los guiones y que cada palabra después de un guión comience con mayúscula.
*/

/* const camelize = function(str) {
    const strSeparado = str.split("-")
    const mayusc = strSeparado[0].split("").toUpperCase()
};
 */

function camelize(str) {
  return str
    .split("-")
    .map(
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      //word[0].toUpperCase coge el string y devuelve la 1ra en mayúsculas
      //y word.slice(1) devuelve la palabra a partir del 2do carácter, por lo que concatenados son la palabra entera con la 1ra letra en mayúsculas
    )
    .join("");
}

console.log(camelize("hola-mundo"));

/* 
Escribe una función filterRange(arr, a, b) que obtenga un array arr, busque los elementos con valor mayor o igual a a y menor o igual a b y devuelva un array con los resultados.

La función no debe modificar el array. Debe devolver un nuevo array.
 */

const filterRange = function (arr, a, b) {
  return arr.filter((arrElement) => arrElement >= a && arrElement <= b);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterRange(arr, 2, 6)); //imprime el array con un rango del 2 al 6
console.log(arr); //imprime el array original sin modificar

/* 
Escribe una función filterRangeInPlace(arr, a, b) que obtenga un array arr y remueva del mismo todos los valores excepto aquellos que se encuentran entre a y b. El test es: a ≤ arr[i] ≤ b.

La función solo debe modificar el array. No debe devolver nada.
 */

const filterRangeInPlace = function (arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--; //cuando se elimina un elemento del array, tengo que restar uno a i para que el chupapijas del bucle no se tufe
    }
  }
};

let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filterRangeInPlace(arrayNum, 2, 5); // remueve los números excepto aquellos entre 1 y 5

console.log(arrayNum);

// Ordena un array de forma ascendente y descendente

const numers = [5, 2, 1, -10, 8];

const descendente = [...numers].sort((a, b) => b - a);
const ascendente = [...numers].sort((a, b) => a - b);

console.log(numers);
console.log(ascendente);
console.log(descendente);

/* 
Tienes un array de objetos user, cada uno tiene user.name. Escribe el código que lo convierta en un array de nombres.
 */

const users = [
  { name: "Robe", age: 25 },
  { name: "Rosa", age: 30 },
  { name: "Albe", age: 35 },
  { name: "Norbe", age: 32 },
];

const usersNames = users.map((item) => item.name);

console.log(usersNames);

/* 
Tienes un array de objetos user, cada uno tiene name, surname e id.

Escribe el código para crear otro array a partir de este, de objetos con id y fullName, donde fullName es generado a partir de name y surname.
 */

const randomUser = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 },
];

const fullNameArray = randomUser.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
})); //En casos así hay que envolver el cuerpo de la arrow funtion entre paréntesis

/* 
Escribe la función getAverageAge(users) que obtenga un array de objetos con la propiedad age y devuelva el promedio de age.
 */

const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 29 };

const arrayUsers = [john, pete, mary];

//My code here:

const getAverageAge = function (users) {
  const sumOfAges = users.reduce((prev, user) => prev + user.age, 0);
  const ageAverage = sumOfAges / users.length;
  return ageAverage;
};

console.log(getAverageAge(arrayUsers));

/* 
Crea una función unique(arr) que devuelva un array con los elementos que se encuentran una sola vez dentro de arr.
 */

const strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

const uniqueArray = function (arr) {
  const noRepeat = []; //crear un array vacío
  for (const str of arr) {
    if (!noRepeat.includes(str)) {
      noRepeat.push(str);
    }
  }
  return noRepeat;
};

console.log(uniqueArray(strings));

/* 
Crea un objeto a partir de un array
Supongamos que recibimos un array de usuarios con la forma {id:..., name:..., age:... }.

Crea una función groupById(arr) que cree un objeto, con id como clave (key) y los elementos del array como valores.
 */

const usersArr = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

const groupById = function(arr) {
  
};