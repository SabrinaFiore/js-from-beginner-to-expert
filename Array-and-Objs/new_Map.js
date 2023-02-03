console.log("YOU ARE IN Javascript ES6-ES9 - new Map()");

// Map: Dizionario di chiavi e valori
// Le chiavi possono essere di qualunque tipo
// Possiamo sapere la sua dimensione con .size
// Di solito viene usato con un ciclo for

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

let mydict = new Map();
const name_obj = "string key";
const func = () => {};
const obj = { name: "Sab", lastname: "Fiore" };

mydict.set(name_obj, "This is a string");
mydict.set(func, "This is a function");
mydict.set(obj, "This is an obj");
console.log("size method - to know how many elm has the obj" + mydict.size);
console.log(
  "discover wich elm do you have at one particular position" + mydict.get(obj)
);

// The Object.entries() static method returns an array of a given object's own
// enumerable string-keyed property key-value pairs.

for ([k, v] of mydict.entries()) {
  console.log("typeof KEY", typeof k, "VALUE", v);
}

mydict.forEach((v, k) => {
  console.log("mydict.forEach VALUE", v + " KEY", k);
});
