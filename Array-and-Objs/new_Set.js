console.log("YOU ARE IN Javascript ES6-ES9 - new Set()")

// Oggetto Set. Come array ma immagazina elementi univoci
// metodi: add, has, delete, entries, keys, velues, clear, foreach

const flavors = new Set();
flavors.add(4)
flavors.add('Name')

let myFunc = () => {}
flavors.add(myFunc)
flavors.add({name: 'Sab', lastname: 'Fiore'})

console.log("new Set().add()", flavors)

//------------------------------------------

console.log("flavors.has(4)", flavors.has(4))
console.log("flavors.delete(4)", flavors.delete(4))
console.log("NEW flavors", flavors)

flavors.forEach((val) => console.log("flavors.forEach", val))

for (let val of flavors.values()) {
  console.log("looping objs", val)
}
for (let k of flavors.keys()) {
  console.log("looping objs k +", k)
}
for (let [k, v] of flavors.entries()) {
  console.log("looping objs [k]", k, "= [v]", v)
}

console.log("flavors.clear()", flavors.clear())

//------------------------------------------

let array = [0, 2, 4, 4, 4, 7, 10, 3]
let uniqueValue = new Set(array)
console.log("no repet values in array", uniqueValue)