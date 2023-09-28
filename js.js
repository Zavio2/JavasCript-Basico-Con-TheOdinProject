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

let evenOddResult = finalResult % 2 // Si el resultado es 0 es par





