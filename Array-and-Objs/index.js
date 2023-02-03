console.log("Hello world")

function hoursToSeconds(hours) {
	// cast variable a number - mettendo il + davanti facciamo il cast della variabile
	var hours = +hours | 0
  return hours * 3600
}

var result = hoursToSeconds()
var result2 = hoursToSeconds('test2')
console.log(result2)

// NaN - is not a number
// Addition assignment	x += f()	x = x + f()
// Subtraction assignment	x -= f()	x = x - f()

function calc(oper, firstparam, secondparam) {
	let operations = arguments[0]
	let params = []

	for (let i = 1; i < arguments.length; i++) {
		params.push(arguments[i])
	}
	// console.log(params)
		
	switch (oper) {
		case 'somma':
			let result = 0

			for (let i = 0; i < params.length; i++) {
				result += params[i]
			}
			return result
			break;
		case 'sottrazione':
			return firstparam - secondparam
			break;
		case 'moltiplicazione':
			return firstparam * secondparam
			break;
		case 'divisione':
			return firstparam / secondparam
			break;
	}
}

console.log(calc('somma', 2, 3, 4, 5))


// Refactoring

function calc2(param1, param2) {
	let oper = arguments[0]
	// let params = []
	var result = 0

	for (let i = 1; i < arguments.length; i++) {
		switch (oper) {
			case '+':
				result += arguments[i]
				break;
			case '-':
				result -= arguments[i]
				break;
			case '*':
				console.log("Entra in moltiplicazione")
				result *= arguments[i]
			break;
			case '/':
				result /= arguments[i]
			break;
			default:
			 	result
		}
		// params.push(arguments[i])
	}

	return result
}

console.log(calc2('*', 20, 3))


// Closure 01
var costoUnitario = 25

function localVar(num) {
	var costoUnitario = 35
	
	function hiddenGlobalVariable() {
		num * costoUnitario
	}
	 
	return hiddenGlobalVariable();
}

var print = localVar(5)
// console.log(print)


// Closure 02
var userName = 'Test'

function testVar() {
	var userName = 'Test2'

	function internalFunc() {
		return interVar = '2'
	}

	return internalFunc();
}

var func = testVar()
console.log(func)

// Callback 01
function outPutObject(obj) {
	for (var i in obj) {
		console.log(i + ' = ' + obj[i])
	}	
}

function processObj(myObject, callback) {
	callback(myObject)
}

var objTest = {
	name: 'hola',
	lastname: 'holaLast',
	age: 30
}

processObj(objTest, outPutObject)

// Callback 02
function outPutResult(param1) {
	result = param1 * param1
	console.log("result =", result)
	return result;
}

function callBackFunc(param1, param2) {
	param2(param1);
}

callBackFunc(5, outPutResult);

// Immediatly invoked function espression

function iiee(params) {
	console.log('test')
}

// Arrow function

var test = function() {
	return 1;
}

// Basic arrow function
// var test3 = () => smt

var test3 = (arg1, arg2) => arg1 + arg2;

var test4 = (arg1, arg2) => {
	// con piu di un espressione vanno aggiunte le {}
	// in piu va specificato il return
	console.log(arg1, arg2)
	return arg1*arg2;
}

console.log(test3(2, 4));