console.log("YOU ARE IN Javascript ES6-ES9 - date() and JSON")

let date = new Date();
console.log("new Date()", date.toISOString())

let myBirthDay = new Date(1992, 5, 19)
console.log("new Date() of my BirthDay", myBirthDay)

console.log("setFullYear(2016)", myBirthDay.setFullYear(1992))
console.log("setMonth(5)", myBirthDay.setMonth(5))
console.log("setDate(19)", myBirthDay.setDate(19))
console.log("setHours(12)", myBirthDay.setHours(12))
console.log("setSeconds(40)", myBirthDay.setSeconds(40))

let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log('getDay()', myBirthDay.getDay())

// JSON
// JAVASCRIPT OBJECT NOTATION
let obj = {name: 'Sab'}
console.log("JSON.stringify(obj)", JSON.stringify(obj));

let fromObjToString = '{"name": "Sab", "lastName":"Fiore"}'
console.log("JSON.parse(fromObjToString)", JSON.parse(fromObjToString))

// number, stringa, null, obj, array, true, false
let newJson = '{"name" : "Sab", "isSingle": true, "hobbies": {"sport": "flying yoga", "previousOne": "MT" }, "countArr": [0, 1, 2, 3, 4]}'
let newJsonParse = JSON.parse(newJson)

console.log("newJsonParse.hobbies.sport", newJsonParse.hobbies.sport)