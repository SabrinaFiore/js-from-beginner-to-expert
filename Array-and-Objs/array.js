console.log("YOU ARE IN Javascript ES6-ES9 - Array")

let array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log("JUST PRINT EL OF ARRAY", array[3])

// The slice() method returns a shallow copy
let arrayCopy = array.slice(0, 2);
console.log("The slice() method returns a shallow copy",  arrayCopy)

let arrayCopy2 = array.slice();
arrayCopy2[1] = 'Martedi'
console.log("The slice() method to return a entire copy of array",  arrayCopy2)

// The join() method creates and returns a new string by concatenating all of the elements in an array
console.log("Concatenating all of the elements in an array with join()", array.join(' - '))

// The push() method adds one or more elements to the end of an array and returns the new length of the array.
array.push('day off:', 'saturday and sunday')
console.log("The push() method adds one or more elements to the end of an array", array)

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
array.unshift('Lunedi')
console.log("The unshift() method adds one or more elements to the beginning of an array", array)

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
array.splice(5, 0, "so boring")
console.log("The splice() method changes the contents of an array", array)

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexOfArray = array.indexOf('Friday')
console.log("The indexOf() method returns the first index at which a given element", indexOfArray)

// Array filter
let numberArray = [2, 4, 6, 7, 8, 57, 9] 
let lettersArray = ["abc", "bitcoin", "c", "d", "e", "f", "google"] 

console.log("numberArray", numberArray)

// The filter() method creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

const result = numberArray.filter(i => i > 4);
const resultOfMap = result.map(el => el*2)
const resultOfReduce = result.reduce((el, el2) => el*el2)
console.log("result of filter numberArray", result);
console.log("result of filter numberArray and MAP", resultOfReduce);
console.log("result of filter numberArray / MAP and REDUCE", resultOfReduce);

const resultLetters = lettersArray.filter(el => el.length > 4);
console.log("result of filter resultLetters", resultLetters);

const evens02 = numberArray.filter((el) => el%2 == 0 )
console.log("filter evens02", evens02)

let odds = numberArray.filter((ele) => ele%2 != 0 )
console.log("filter odds", odds)

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

let sum = numberArray.reduce((p, s) => p+s)
console.log('result of reduce - add elements of array', sum)
