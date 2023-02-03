console.log("YOU ARE IN Javascript ES6-ES9 - Math")

// Math Obj
// max, min, abs, random, sin, cos, exp, pow, round

Math.max(4, 66, 77,  12, 98)
console.log("Math.max(4, 66, 77,  12, 98) - max num =", Math.max(4, 66, 77,  12, 98))

let num = - 2
Math.abs(num)
console.log("Math.abs(-2) - numero intero da numero negativo =", Math.abs(num))

// Math.random() è sempre un numero random al di sotto di zero
console.log("Math.round(Math.random()*100)", Math.round(Math.random()*100))

// The Math.ceil() static method always rounds up and returns 
// the smaller integer greater than or equal to a given number.

console.log("Math.ceil(Math.ceil()*100)", Math.ceil(Math.random()*100))
console.log("Math.ceil(.95)", Math.ceil(.95));
console.log("Math.ceil(7.004)", Math.ceil(7.004));

// The Math.floor() static method always rounds down and returns 
// the largest integer less than or equal to a given number.
console.log("Math.floor(5.95)", Math.floor(5.95));
console.log("Math.floor(-5.05)", Math.floor(-5.05));

// square root
console.log("Math.sqrt(16)", Math.sqrt(16))

// Math.pow(x, y) = x alla potenza di y
console.log("Math.pow(4, 2)", Math.pow(4, 4))

// The Number() constructor creates a Number object. 
// When called instead as a function, it performs type conversion to a primitive number, 
// which is usually more useful.
// NB new Number non è MAI === a un numero perchè è un oggetto

let num_obj = new Number("2")
console.log("know primitive value of new Number()", num_obj.valueOf())
console.log("(2).toString() =", (2).toString(), "/ (2).toString(2) =", (2).toString(2), "/ 2.0.toFixed(4) =", 2.0.toFixed(4))

let num_var = "123";
console.log("concatenare numero with parseInt(num_var)", parseInt(num_var))
console.log("concatenare numero num_var+12", num_var+12)
console.log("sommare numero +num_var+12", +num_var+12)

// Metodi e proprietà obj Number
console.log("Number.MAX_VALUE", Number.MAX_VALUE)
console.log("Number.MIN_VALUE", Number.MIN_VALUE)
console.log("Infinity", Infinity)
console.log("typeof(Infinity) =", typeof(Infinity))
console.log("-Infinity", -Infinity)
console.log("typeog(-Infinity) =", typeof(-Infinity))


// The Number.parseFloat() static method parses an argument and returns a floating point number. 
// If a number cannot be parsed from the argument, it returns NaN.

let parseFloatNum = Number.parseFloat("2.34")
console.log("Number.parseFloat('2.34') =", parseFloatNum)
console.log("Number.parseFloat('2.34 abcdefghilm') =", Number.parseFloat('2.34 abcdefghilm'))
console.log("Number.parseFloat('abcdefghilm 2.34') = DOESN'T WORK", Number.parseFloat('abcdefghilm 2.34'))
console.log("same to parseFloat() => num = +num", parseFloatNum = +parseFloatNum)