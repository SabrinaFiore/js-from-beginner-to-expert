console.log("YOU ARE IN Javascript ES6-ES9 - Methods")

function myCallFunction(money = 0, city = '') {
  console.log(this.name + " " + this.age + " and she has " + money + ' money and she lives in '+ city)
}

const myData = {
	name: 'Sabrina',
	age: 30,
	showName() {
		console.log(this.name)
	},
	showAge() {
		console.log(this.age)
	},
	getName: function() {
		return this.name
	}
}

myCallFunction.call(myData, 10)
myCallFunction.apply(myData, [0, 'Bari demmerda'])

myData.showName()
myData.showAge()

const newShowName = myData.showName;
// console.log(newShowName)

// Template literals
let test = {
	name: 'Sabrina',
	lastname: 'Hola hola'
}

// Sting Methods
// Le stringhe sono immutabili

// indexOf
let indexOfSentence = 'test string methods'
let indexOf = indexOfSentence.indexOf('string')

console.log("indexOf string", indexOf)

// cartAt()
let cartAtSentence = 'The quick brown fox jumps over the lazy dog.'
let cartAt = 4

console.log("cartAt method", cartAtSentence.charAt(cartAt))

// Slice
let sliceSentence = 'Lorem Ipsum is simply dummy text';
let slice = sliceSentence.slice(0,4)

console.log("slice method", slice)

// Substring method - i valori negativi vengono trasformati in zero
let substringSentence = 'Lorem Ipsum is simply dummy text';
console.log("substring method", substringSentence.substring(-4, 4))

// Substr method
let substringIndex = substringSentence.indexOf('ipsum');
// let substrgSentence = substringSentence.substs(substringIndex, 5)