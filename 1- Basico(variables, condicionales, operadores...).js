console.log("Helo world!"); //imprime "hello world" en la consola

let name = "contenido de la variable"; //declarar variable name y su contenido
let admin; //declarar variable admin
admin = name; //copiar el contenido de name en admin

//alert(admin); //mostrar lo que hay en admin

/* Declarar variable con let y no var, porque var define las variables 
de forma global (mala práctica) mientra let las define solo en el bloque en el que
 se está trabajando */

// Un bloque en JS es lo que está separado por un juego de llaves

/***************MATES DE BÁSICAS */

/******************Operadores de asignación**************/

let a = 10;
let b = 20;
let c = 5;

a *= c; // es: a = a * c
b += b; // es: b = b + b

let x = 50;
let y = 50;

x *= 4; // es x = x * 4;  que sería x = 50 * 4;
y += 50 * 3; // es y = y + 50 * 3; que sería y = 50 + 50 * 3;

/********************Ejercicios de mates ****************/

/*

1- Crea cuatro variables que contengan numeros. Llama a las variables razonablemente.

2- Agrega las dos primeras variables juntas y guarda el resultado en otra variable.

3- Resta la cuarta variable de la tercera y almacena el resultado en otra variable.

4- Multiplique los resultados de los dos últimos pasos juntos, almacenando el
 resultado en una variable llamada finalResult. El producto debe ser 48. 
 Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.

5- Finalmente, escribe un cálculo que verifique si finalResult es un número par.
 Almacene el resultado en una variable llamada evenOddResult

*/

let num1 = 5;
let num2 = 1;
let num3 = 2;
let num4 = 10; //crear 4 variables con números

let result = num1 + num2; // sumar las 2 primeras variables y guardar el resultado en otras variable

let result2 = num4 - num3; // restar la 4ta menos la 3ra

let finalResult = result * result2; // multiplicar las operaciones anteriores y que dé 48

let evenOddResult = finalResult % 2; // Si el resultado es 0 es par

/ **********************CONDICIONALES *********************/;

/* 

Ejercicio completando un calendario

1- Mire el mes seleccionado (almacenado en la variable choice.
   Este será el valor del elemento <select> después de que cambie el valor,
    por ejemplo "January")
2- Establezca una variable llamada days para que sea igual al número de
 días del mes seleccionado. Para hacer esto, tendrá que buscar el número 
 de días en cada mes del año. Puede ignorar los años bisiestos a los efectos de este ejemplo.

Sugerencias:

Se le aconseja que utilice el operador lógico OR para agrupar varios meses 
en una sola condición; Muchos de ellos comparten el mismo número de días.
Piense qué número de días es le más común y utilícelo como valor predeterminado.
*/

/*

Asi se ve el código que tienes que modificar:  */

var select = document.querySelector("select");
var list = document.querySelector("ul");
var h1 = document.querySelector("h1");

select.onchange = function () {
  var choice = select.value;

  // AÑADIR CONDICIONAL AQUÍ

  let days = 31;

  if (choice === "february") {
    days = 28;
  } else if (
    choice === "april" ||
    choice === "june" ||
    choice === "september" ||
    choice === "november"
  ) {
    days = 30;
  }

  //hasta aquí la modificación

  createCalendar(days, choice);
};

function createCalendar(days, choice) {
  list.innerHTML = "";
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "January");

// EJERCICIO CON SWITCH

/*
 
1- Debe aceptar la variable choice como expresión de entrada.

2- Para cada caso, la elección debe ser igual a uno de los posibles
valores que se pueden seleccionar, es decir, blanco, negro, morado,
amarillo o psicodélico. Tenga en cuenta que los valores distinguen
entre mayúsculas y minúsculas y deben ser iguales a los valores value
del elemento <opción> en lugar de a las etiquetas visuales.

3- Para cada caso se debe ejecutar la función update() y pasarle dos
valores de color, el primero para el color de fondo y el segundo para
el color del texto. Recuerde que los valores de color son cadenas,
 por lo que deben estar entre comillas.
 
 */

var select = document.querySelector("select");
var html = document.querySelector(".output");

select.onchange = function () {
  var choice = select.value;

  // AÑADIR DECLARACIÓN SWITCH

  switch (choice) {
    case "black":
      update("black", "white");
      break;
    case "white":
      update("white", "black");
      break;
    case "yellow":
      update("yellow", "black");
      break;
    case "blue":
      update("blue", "white");
      break;
  }

  //Hasta aquí
};

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

// EJERCICIO IF ELSE

/*

Usando el if..else construct, escribe el código que pregunta:
 '¿Cuál es el nombre "oficial" de JavaScript?'

Si el visitante ingresa "ECMAScript", entonces la salida 
"¡Correcto!", de lo contrario, la salida: "¿No lo sabes? ¡ECMAScript!"

*/

let pregunta = prompt("Sabes cuál es el nombre original de JS?", "Respuesta");

if (
  pregunta == "ECMAScript" ||
  pregunta == "EcmaScript" ||
  pregunta == "ecmascript"
) {
  alert("Correcto");
} else {
  alert("¿No lo sabes? Es ECMAScript");
}

// EJERCICIO IF ELSE

/*
Usando if..else, escriba el código que obtiene un número
 a través de prompt y luego se muestra en alert:

1, si el valor es mayor que cero,
-1, si es menor que cero,
0, si es igual a cero.
*/

let valor = prompt("Introduce un número", 0);

if (valor === 0) {
  alert(0);
} else if (valor > 0) {
  alert(1);
} else if (valor < 0) {
  alert(-1);
} else {
  alert("Eso no es un número");
}

// *Rescribir esto con el OPERADOR TERNARIO ?

/*let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

let resultado;
let aa = Number(prompt("Introdduzca el valor de aa", 0)); //number convierte el string en número
let bb = Number(prompt("Introdduzca el valor de bb", 0));

aa + bb < 4
  ? (resultado = "el resultado es menor que 4")
  : (resultado = "el resultado es mayor que 4");

alert(resultado); //muestra el contenido
