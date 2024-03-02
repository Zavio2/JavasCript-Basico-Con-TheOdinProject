// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// *1. Filter the list of inventors for those who were born in the 1500's

/* const filtraInventorBornIn1500 = (inventor) => {
        if (inventor.year >= 1500 && inventor.year < 1600){
            return inventor
        }
      }
      const inventorsBornIn1500 = inventors.filter(filtraInventorBornIn1500)
      console.log(inventorsBornIn1500); */

//* Lo mismo con menos código

const filtraInventorBornIn1500 = (inventor) =>
  inventor.year >= 1500 && inventor.year < 1600;

const inventorsBornIn1500 = inventors.filter(filtraInventorBornIn1500);
console.log(inventorsBornIn1500);

// Array.prototype.map()
// *2. Give us an array of the inventors first and last names

const returnFullName = (inventor) => {
  return `First: ${inventor.first}; Last: ${inventor.last}`;
};
const fullName = inventors.map(returnFullName);
console.table(fullName);

// Array.prototype.sort()
//* 3. Sort the inventors by birthdate, oldest to youngest

const compareFn = (a, b) => {
  if (a.year < b.year) {
    return -1;
  } else if (a.year > b.year) {
    return 1;
  } else if (a.year == b.year) {
    return 0;
  }
};
const sorted = [...inventors].sort(compareFn);

console.table(inventors);

console.table(sorted);

// Array.prototype.reduce()
// *4. How many years did all the inventors live all together?

//*Se puede crear un array con la edad de cada uno usando map, para luego calcular el total con reduce
//ej:
/* const obtieneLaEdad = (inventor) => {
  let edad = inventor.passed - inventor.year;
  console.log(`${inventor.first}: ${edad}`);
  return edad;
};
const edad = inventors.map(obtieneLaEdad); */

//* Pero hay una forma más rápida de hacer todo solo con reduce:

const calculaEdadTotal = (total, inventor) =>
  total + (inventor.passed - inventor.year);

const totalYears = inventors.reduce(calculaEdadTotal, 0);
console.log("Edad total: " + totalYears); //imprime la edad total de todos los inventores

// 5. Sort the inventors by years lived

const orderedByYears = [...inventors].sort(function (a, b) {
  let inventorA = a.passed - a.year;
  let inventorB = b.passed - b.year;

  if (inventorA > inventorB) {
    return -1;
  } else if (inventorA < inventorB) {
    return 1;
  }
});
console.table(orderedByYears);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//* todo esto en la DevTools manipulando el DOM de esa página
/* 
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a")); //el arrayfrom convierte la lista de nodos en un array, para poder aplicarle métodos de arrays

const de = links
  .map((link) => link.textContent) //mete en un nuevo array el texto de los links
  .filter((streetName) => streetName.includes("de")); //filtra los que incluyan "de"
 */

// 7. sort Exercise
// Sort the people alphabetically by last name

const compareF = (lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", "); //dividir el string en dos (lastName y firstName) y guardar cada uno en una variable
  const [bLast, bFirst] = nextOne.split(", "); //lo mismo en el segundo parámetro para luego compararlos

  return aLast > bLast ? 1 : -1; //y ahora ya se pueden comparar y organizar los lastName por orden alfabético
};

const alphab = people.sort(compareF); //se aplica el método sort con la función: "compareF"

console.log(alphab);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const sumIntances = (obj, item) => {
  if (!obj[item]) {
    obj[item] = 0
  }
  obj[item]++
  return obj
}
const suma = data.reduce(sumIntances, {})
console.log(suma);