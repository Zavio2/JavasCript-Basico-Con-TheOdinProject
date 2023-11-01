// *COMO SE CREA UNA FUNCIÓN

function nombreDeFuntion() {
  alert("código que ejecuta la función");
}

// *INVOCAR UNA FUNCIÓN

nombreDeFuntion(); // debe ejecutarse el alert que está en la función

// *PARÁMETROS

// Los parámetros se usan para pasar un valor a la función cuando se invoca

// Ejemplo:

function miNombre(nombre) {
  alert("Mi nombre es " + nombre);
}

miNombre("Vladimir"); // se imprime: "Mi nombre es Vladimir"

// Cuando se hace esto solo se copia el valor en la función para usarlo en ese momento, pero el valor inicial se queda, si se llama después a la función sin copiar ningún valor en el parámetro, se ejecutará el valor por defecto
//Ej:

miNombre(); // Se imprime: "Mi nombre es Undefined (valor por defecto de la variable en el parámetro)"

// Otro ejemplo con parámetros

function yo(name, edad) {
  alert("Mi nombre es " + name + " y tengo " + edad + " años");
}

yo("Vladimir", 23); // Se imprime: Mi nombre es Vladimir y tengo 23 años

// *También se usa para mostrar un valor predeterminado personalizado
//Ej:

function holaM(saludo = "mundo") {
  alert("Hola " + saludo);
}

holaM(); // imprime "Hola mundo" como predeterminado si no se pone nada en el paréntesis

// * ÁMBITO/SCOPE

// Se refiere a las formas en la que se puede acceder a una variable o función

/* 

Ámbito de bloque (con variables internas en la función) o ámbito global (con variables globales a las que se puede acceder desde cualquier parte del código)

*/

// A lo que está dentro de una función solo se puede acceder desde dentro de esa función
// Ej:

function random0() {
  let variable_interna = 10;
  console.log(variable_interna);
}

console.log(variable_interna); // da error porque está intentando acceder a una variable interna en la función

// Pero cuando es una variable externa, se puede acceder desde una función (o desde cualquier parte del código si es una variable global)
// Ej:

let b = 20;

function random1() {
  console.log(b);
}

random1(); // cuando se llama a la función se imprime la variable global que está en el console.log

//!no es una buena práctica usar variables globales, lo mejor es usar lo menos posible
