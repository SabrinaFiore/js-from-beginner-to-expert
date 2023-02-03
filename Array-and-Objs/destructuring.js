console.log("YOU ARE IN Javascript ES6-ES9 - Destruccturing")

let a, b;

[a, b] = [1, 2];
console.log("destructuring: a", a, "b", b)

let [c, d] = [3, 4]
console.log("assegnazione e destructuring: c", c, "d", d)

function summ(arg1, arg2, arg3, arg4) {
  return [].reduce.call(arguments, (a, b) => a+b)
}
console.log(summ(20, 6, 9, 18))

let dest = [1, 2, 4, 5]
console.log("destructuring", ...dest);
console.log("destructuring + summ", summ(...dest))

// objs
let obj = { name: 'Jhon', lastName: 'Doe' };
let { name: Nome, lastName: cognome } = obj;

console.log(Nome);
console.log(cognome);

// let theName, theSurname;
// ({name: theName, lastName: theSurname} = { name: 'Sabrina', lastName: 'Arias' });
({ newName , lastName } = { newName: 'Sabrina', lastName: 'Arias' });

console.log(newName);
console.log(lastName);

let newObj = {
	name: 'Sab',
	myName: 'Test Hidran',

	displayName: function (params) {
		console.log("this.myName", this.myName)
		var callingItself = this

		setTimeout(() => {
			console.log('output =', callingItself.myName)
		}, 1000);
	}
}
newObj.displayName()
