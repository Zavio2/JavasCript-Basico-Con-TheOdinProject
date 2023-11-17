// *COMO SE CREA UNA FUNCIÓN

function nombreDeFuntion() {
  alert("código que ejecuta la función");
}

/* ************************************************************************** */

// *INVOCAR UNA FUNCIÓN

nombreDeFuntion(); // debe ejecutarse el alert que está en la función

/* *************************************************************************** */

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

/*********************************************************************/

// *ÁMBITO/SCOPE

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

/* *********************************************************************************** */

// *RETURN

//  Se usa principalmente para: retornar el resultado de una operación hecha en la función
// Ej

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 8)); // devuelve la suma 2 + 8

//Ej2:

function divide(a, b) {
  if (b === 0) {
    return "Error, división por cero";
  }
  return a / b; //aquí el funcionamiento de return es el equivalente a "if else", como: si  no se cumple lo 1ro, entonces ejecuta lo 2do
}

console.log(divide(20, 0)); // imprime "Error, división por cero"
console.log(divide(20, 10)); // imprime la división

/* ******************************************************************************** */

// * NOMENCLATURA DE FUNCIONES

// ?Usar nombres descriptivos (usualmente verbos) que describan la acción que realiza la función.
//Ej:

// showMessage(..)     // muestra un mensaje
// getAge(..)          // devuelve la edad (la obtiene de alguna manera)
// calcSum(..)         // calcula una suma y devuelve el resultado
// createForm(..)      // crea un formulario (y usualmente lo devuelve)
// checkPermission(..) // revisa permisos, y devuelve true/false

// ?No usar una misma función para varias acciones, para cada acción una función diferente con un nombre diferente
//Ej:

// getAge – está mal que muestre una alert con la edad (solo debe obtenerla).
// createForm – está mal que modifique el documento agregándole el form (solo debe crearlo y devolverlo).
// checkPermission – está mal que muestre el mensaje acceso otorgado/denegado(solo debe realizar la verificación y devolver el resultado).

/* Los nombres de funciones deben ser bien descriptivos y concisos, si se torna muy complejaa una función, una buena práctica es dividirla entre 2 (o más) */

/* **************************************************************************************** */

//* TAREAS

// Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.

//Ej usando if:

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log(min(2, 3)); // imprime 2
console.log(min(5, 1)); // imprime 1

//Ej usando operador ternario

function min(a, b) {
  return a < b ? a : b;
}

/************************************************************ */
// * FUNCIONES FLECHA

// Son una forma más compacta y simple de escribir una función
// EJ:

let sum = (a, b) => a + b;

// es el equivalente a:

let sum = function (a, b) {
  return a + b;
};

/************************************************************** */
// * FUNCIONES ANÓNIMAS

// Son funciones sin nombre, normalmente se usan para pasar una función como argumento de otra función o para alojarse dentro de una variable


/* ********************************************************* */

// * FUNCIONES CALLBACK

// Se usan para pasar un argumento a otra función; por su naturaleza asincrona, aseguran que no se ejecute una parte del código hasta que se ejecute la función que se pasa como argumento

// EJ:

function saluda(nombre, funcion1) {
  console.log("Hola " + nombre);
  funcion1();
}

function funcion2() {
  console.log("Adios");
}

saluda("Juan", funcion2); // Pasa a la funcion2 como argumento en la funcion "saluda"
/* Se imprime:

   Hola Juan
   Adios (esta es la funcion1 invocada usando a la funcion2 como argumento)

*/

/************************************************************************** */

// * DECLARACIÓN DE FUNCIÓN V/S EXPRESIÓN DE FUNCIÓN

// Declaración:

// de esta forma por el "hoisting" en javascript (significa que "se elevan" al inico del ambito en el que están), se puede acceder a esta función desde cualquier parte del código e incluso se puede invocar antes de escribir la función
// EJ:

funcionDecl(); // se imprime lo que hay en console log

function funcionDecl() {
  console.log("Función declarada random");
}

// Expresión:
// Son funciones anónimas que están dentro de otra construcción sintáctica (dentro de una variable o dentro de otra función)
// Ej:

let sum = function (a, b) {
  return a + b;
};

// Con estas no se aplica lo del hoisting, se puede usar solo desde que se crea
//Pero a diferencia de las funciones declaradas, sí se puede acceder al código desde fuera del ambito de la función invocando a la variable que la tiene almacenada
