// *Escribe la función isEmpty(obj) que devuelva el valor true si el objeto no tiene propiedades, en caso contrario false.

const cosas = {};

const isEmpty = function (obj) {
  for (const key in obj) {
    console.log("It is not empty");
    return false;
  }
  console.log("It is empty");
  return true;
};

isEmpty(cosas); // imprime "It is empty" y devuelve true

cosas.cajas = 10; // Ahora agrego una propiedad y un valor

isEmpty(cosas); // Eimprime "It is not empty" y devuelve false

// *Escribe el código para sumar todos los salarios y almacenar el resultado en la variable sum

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const key in salaries) {
  sum += salaries[key];
}

console.log(sum);

//* Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2.

const menu = {
  width: 200,
  height: 300,
  title: "Mi menú",
};

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu)

console.log(menu);
