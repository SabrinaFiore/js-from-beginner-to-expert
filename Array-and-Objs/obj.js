console.log("YOU ARE IN Javascript ES6-ES9 - Objs")

let obj = {
	name: 'Sab',
	age: 43,
	single: true,
	'': null,
	3: 4
}

let nameObj = obj.name
console.log("obj name", nameObj)

// OOP:  Bulding objects with functions
function Animal(params) {
	// this si riferisce all'oggetto che verrà creato nella funzione - ovvero nella nuova Classe
	this.name = name || 'Unknown'
	this.type = 'Animal'
	this.habitat = 'Heart'
}

Animal();

// let dog = new Animal();

let cat = new Animal('Cat')
let horse = new Animal('Horse')

cat.addElement = 'addElement'
horse.newHabitat = 'Bari'

Animal.prototype.displayName = function name(params) {
	this.name;
}

Animal.prototype.testPrototype = function holaHola(params) {
	console.log('Animal.prototype.testPrototype')
}

console.log("obj cat", cat)
console.log("obj horse", horse)

function displayId() {
	console.log("displayID this.idNewAnimal", this.idNewAnimal)
}

// Obj Literal
let newAnimal = {
	type: 'Dog',
	name: 'Laika',
	legs: 4,
	bark: function() {
		console.log('Dog barked')
	},
	// this: fa riferimento alla proprietà oggetto - in questo caso newAnimal
	getName: function() {
		console.log(this.name)
	},
	// si possono aggiungere array ad un obj
	friends: [],
	// si possono aggiungere altri obj in n obj
	idNewAnimal: {
		animalId: '01',
		country: 'IT'
	},
	displayAnimalId: displayId
}

// to add propriety to obj
newAnimal.color = 'white'
newAnimal.friends.push('Jhon', 'Ellen')
newAnimal.displayAnimalId()

let printName = newAnimal.getName;

console.log("new Obj", newAnimal)
console.log("newAnimal.id.animalId", newAnimal.idNewAnimal.animalId)
console.log("newAnimal.getName", newAnimal.getName)
console.log("printName", printName)
console.log("newAnimal.displayAnimalId()", newAnimal.displayAnimalId)

// il THIS fa riferimento a RUNTIME quando viene utilizzata quella funzione
// in che intorno viene utilizzata
// il THIS fa riferimento all'oggetto in cui viene eseguita quella funzione


// OBJECT LITERAL
window.id = 32232323232323;
// window.name ='Hidran';
 
function displaySecondId(){   
  console.log("displayID this.id", this.id);
}

let dog = {
	type : 'DOG',
	name :'Laika',
	legs : 4,
	bark : function(){
		console.log('dog.bark function', 'Dog barked');
	},
	getName : function(){
		console.log('dog.bark function', this.name);
	},
	favoriteFriends:[
		'JIMMY',
		'johny',
		'PIGGY'
	],
	id: {
		dogId:'1212121212',
		address:'corso racconigi, Torino',
		country:'Italy'
	},
	displayDogId:displaySecondId
};

// dog.bark();
// dog.favoriteFriends.push('Giorgi');
// console.log(dog.favoriteFriends);
// console.log(dog.id.address);

dog.displayDogId();
console.log("dog.displayDogId()", dog.displayDogId)

var displayName = dog.getName;

// console.log(dog.displayName());
// console.log("displayName", displayName());

var mioObject = { name :'Jim' };

// call fa riferimento alla proprietà in mioObject
displayName.call(mioObject);