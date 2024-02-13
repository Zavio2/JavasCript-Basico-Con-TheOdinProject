//* REST
// Se usa para reunir en un array los parámetros restantes que se le pasan a una función

//ej

function random(param1, param2) {
  return param1 + param2;
}

random(1, 2, 3, 4, 5, 6); // no da error, pero solo serán reconocidos los 1ro 2 parámetros, el resto será ignorado

//CON REST SE COLOCA EN UN ARRAY EL RESTO DE PARÁMETROS

function random2(param1, ...rest) {
  let resultado = 0;

  for (const item of rest) {
    //itera por el array y guarda el resultado en una variable
    resultado += item;
  }

  return param1 + resultado; //concatena el 1er parámetro con el contenido de la variable
}

console.log(random2("El resultado es: ", 12, 23, 45)); //

//* SPREAD
//Puede hacer exactamente lo opuesto a rest, expande un array en una lista de argumentos
//Puede hacer una copia de un array

let arr = [1, 2, 3];

let arrCopy = [...arr]; // separa el array en una lista de parameters y luego pone el resultado en un nuevo array

//Puede hacer una copia de un objeto

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let objCopy = { ...obj }; // separa el objeto en una lista de parámetros y luego devuelve el resultado en un nuevo objeto
