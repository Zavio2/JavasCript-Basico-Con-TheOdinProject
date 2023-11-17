// ?Creando un Fizz Buzz

// ?"Escriba un programa que tome la entrada de un usuario e imprima los números del uno al número que el usuario ingresó. Sin embargo, para múltiplos de tres, imprima Fizz en lugar del número y para los múltiplos de cinco, imprima Buzz. Para números que son múltiplos de tres y cinco, imprima FizzBuzz".

//  * 1- ENTENDER EL PROBLEMA (refomulando lo que se pide a mi forma, más simple)

// Tengo que crear un programa que cuando el usuario ponga un número, imprima todos los números desde 1 hasta el número que introdujo el usuario, pero que imprima fizz con los múltiplos de 3, buzz con los múltiplos de 5 y fizz buzz con los que son múltiplos de ambos

// * 2- PLAN

/* 
-¿Su programa tiene una interfaz? ¿Cómo será? Nuestra solución FizzBuzz será un programa de consola de navegador, por lo que no necesitamos una interfaz. La única interacción del usuario será permitir que los usuarios ingresen un número.

-¿Qué insumos tendrá su programa? ¿El usuario introducirá datos o usted recibirá información de otro lugar? El usuario ingresará un número de un mensaje (cuadro emergente).

-¿Cuál es el resultado deseado? La salida deseada es una lista de números desde 1 hasta el número que el usuario ha introducido. Pero cada número que sea divisible por 3 dará como resultado Fizz, cada número que sea divisible por 5 generará Buzz Buzz y cada número que sea divisible por 3 y 5 generará FizzFizzBuzz.

(Explicar la lógica del programa con lenguaje natural)

*/

// * 3- PASAR AL PSEUDOCÓDIGO


// ASK the user for a number and STORE it as 'answer'

// FOR each number from 1 to 'answer' DO
//   IF the number is divisible by both 3 and 5 THEN
//     PRINT "FizzBuzz"
//   ELSE IF the number is divisible by 3 THEN
//     PRINT "Fizz"
//   ELSE IF the number is divisible by 5 THEN
//     PRINT "Buzz"
//   ELSE
//     PRINT the number
//   END IF
// END FOR






// * 4- DIVIDIR EL PROBLEMA EN PEQUEÑOS SUBPROBLEMAS E IR RESOLVIENDO UNO POR UNO (abstracción)

// *subproblema: Obtener el número que va introducir el usuario
// Lo haré con un promt

// ?let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// parseInt es necesario para convertir el string en número

// *subproblema: Crear un bucle/loop para que se impriman números hasta el número que ponga el usuario
// Crearé un bucle con for

/* 
? for (let i = 1; i <= answer; i++) {
?  console.log(i);

} */

/* 
1er parámetro declara una variable con un valor (let i = 1)
2do parámetro crea una condición (i <= answer)
3er parámetro suma 1 suma una si se cumple la condición anterior

*(El bucle define que se le estará sumando 1 al valor hasta que deje de cumplirse la condición)

Console.log imprimira números desde el 1 hasta el número que introduce el usuario
*/

// * subproblema: Que cuando llegue a un múltiplo de 3 imprima fizz en vez del  número

/* 
?  if (i % 3 === 0) {
?   console.log("fizz");
? } else {
?   console.log(i);

}  */

// Así cada vez que sea un múltiplo de 3 imprime "fizz"

// * subproblema: Que cuando llegue a un múltiplo de 5 imprima buzz en vez del número

/*
?   else if (i % 5 === 0) {
?      console.log("buzz");     

*/

// * subproblema: Que cuando llegue a un múltiplo de 5 y 3 imprima fizz buzz

/* 
?   if ((i % 3 === 0) & (i % 5 === 0)) 
(modifiqué el if para que quedara así el inicio)
}

*/

// Al final quedaría como:

let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

