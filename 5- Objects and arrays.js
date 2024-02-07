/* const person = {} */ // creando un objeto vacío

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  contact: {
    twitter: "@Boby",
    facebook: "BobS",
    phoneNumber: 12345678,
  },
  presentación: function () {
    console.log(
      `My name is ${this.name[0]} ${this.name[1]}, tengo ${this.age} años. Me puedes seguir en twitter como ${this.contact.twitter}`
    );
  },
  saluda: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

// * NOTA
// A las variables se les llama atributos/propiedades, y las funciones se les llama métodos

// *Acceder con notación de puntos:

person.name; //acceder a atributos
person.age;
person.saluda(); //acceder a métodos
person.presentación();
person.contact.twitter; //acceder a un atributo que está en un objeto dentro de este objeto

// *Acceder con notación de corchetes

person["age"];

// La notación de corchetes es útil para acceder o introducir propiedades que sean strings separados, ya que la notación de puntos no entiende esto
//Ej:

person["nombre de la mamá"] = "María";
console.log(person["nombre de la mamá"]); //accede a esa propiedad del objeto

//Con la notación de corchetes tambien se puede crear una propiedad dependiendo del valor de una variable
//Ej:

let key = "estatura";

person[key] = 1.8; //ahora el objeto tiene la propiedad 'estatura: 1.8'

//se puede hacer lo mismo con una variable que se calcule en tiempo de ejecución
//ej:

let key2 = prompt("¿Qué propiedad quieres agregar al objeto?", "propiedad");
let valor = prompt("¿Qué valor quieres darle?", "valor");

person[key2] = valor; //se agrega una propiedad y su valor dependiendo del lo que introduzca el usuario

//(nada de esto se puede hacer con notación de puntos)

// * Eliminar una propiedad

delete person.age;

// *Para comprobar si existe una propiedad con la clave proporcionada: "key" in obj

//* Cambiar el valor de los atributos

person.age = 70; //Ahora age = 70
person.name[0] = "Ale"; // Ahora el segundo nombre del array es Ale

//* Agregar propiedades al objeto

person.eyes = "blue";
person.despedida = function () {
  console.log("Bye everybody");
};

console.log(person);

person.despedida();

//* Propiedades calculadas

let fruta = prompt("¿Qué fruta quiere", "fruta");
let carne = prompt("Qué carne quiere?", "carne");

const cesta = {
  [fruta]: 5,
  [carne]: "media libra",
};

cesta[fruta] = 5;
cesta[carne] = "media libra";

//Esto sería lo mismo que:

/*

?let fruta = prompt("¿Qué fruta quiere", "fruta");
?let carne = prompt("Qué carne quiere?", "carne");
?const cesta = {}

?cesta[fruta] = 5;
?cesta[carne] = "media libra";

 */

// Otro ejemplo:

let marca = prompt("Diga que marca de cell quiere", "Marca del cell");
const compra = {
  [marca + "-cell"]: true,
};

compra[marca];

// *Creando objetos con funciones

function createPersonObject(name) {
  obj = {};
  obj.name = name;
  obj.presentación = function () {
    console.log(`Hola, mi nombre es ${this.name}`);
  };

  return obj;
}

let Robe = createPersonObject("Robe");
Robe.presentación(); // Hola mi nombre es Robe

let Albe = createPersonObject("Albe");
Albe.presentación(); // Hola mi nombre es Albe

// * Usando constructores para que sea más sencillo hacer lo mismo

// Los constructores se ponen con inicial mayúscula
// Para llamarlos se usa "new"

function Person(name) {
  this.name = name;
  this.presentación = function () {
    console.log(`Hi, my name es ${this.name}`);
  };
}

const Roberto = new Person("Roberto");
Roberto.presentación(); // Imprime: Hi, my name is Roberto

const Frank = new Person("Frank");
Frank.presentación(); // Imprime: Hi, my name is Frank

//* Bucle for in

const randomObject = {
  name: "Ramón",
  edad: 20,
  momName: "María",
};

for (const key in randomObject) {
  console.log(key) //así accede a la propiedad 
  console.log(randomObject[key]) // así accede al valor
}



