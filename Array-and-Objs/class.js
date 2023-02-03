console.log("YOU ARE IN Javascript ES6-ES9 - Class")

// DOING WITH CLASS
class Alien {
	constructor(weapons) {
		if (this.weapons === undefined) {
			this.weapons = ['Pistols']
		} else {
			this.weapons = weapons
		}
	}
	getWeapons() {
		return this.weapons;
		// return this.weapons
	}
}

let alien = new Alien(['Beatch', 'YeahB', 'Gun'])
console.log("print alien.getWeapons()", alien.getWeapons().push('Beatch', 'YeahB', 'Gun'))
console.log("print CLASS ALIEN", alien)

Alien.prototype.addWeapon = function(weapon) {
	this.weapons.push(weapon)
}

alien.addWeapon('New One')
console.log("alien.addWeapon()", alien.getWeapons())


// ANOTHER TRY
class AlienSecondClass {
	constructor(weapons) {
		this.weapons = weapons || ['don/t give up']
		this.healt = 80
	}
	getWeapons() {
		return this.weapons;
	}
	increaseHealth(healt) {
		this.healt += healt
	}
	getHealt() {
		return this.healt
	}
}

let alienSecondClass = new AlienSecondClass(['try that', 'is it a good idea?'])

AlienSecondClass.prototype.addTest = function(params) {
	this.weapons.push(params)
}

alienSecondClass.increaseHealth(20)
alienSecondClass.addTest('just go');
console.log('alienSecondClass.getWeapons()', alienSecondClass.getWeapons())
console.log('alienSecondClass.increaseHealth()', alienSecondClass.getHealt())


// DOING WITH FUNCTION
function SecondAlien(){
	this.type ='Alien';
	this.weapons = ['pistols', 'laserbeam'];
}

let secondAlien = new SecondAlien();
console.log(secondAlien.type);

SecondAlien.prototype.getWeapons = function(){
	return this.weapons;
}

console.log(secondAlien.getWeapons());


// CLASS, EXTENDS, SUPER
class Enemy {
	constructor(type, age) {
		this.type = type;
		this.age = age;
	}

	getType() {
		return 'THIS IS A FUNCTION INSIDE CLASS '
	}

	shout() {
		return "Enemy shout: grrrr"
	}
}

let enemy = new Enemy("New Enemy", 25);
console.log("CLASS ENEMY", enemy)

class Creapers extends Enemy {
	constructor(type = 'Creapers', age = 30) {
		// per aggiungere nuove proprietà nella classe extend bisogna sempre usare super()
		super(type, age);
		this.health = 60;
	}

	// un metodo statico è accessibile (che appartiene) solo dalla classe
	// non è un metodo che si trova all'interno del prototype
	static getType() {
		return super.getType() + 'THIS IS A STATIC METHOD INSIDE CLASS'
	}

	shout() {
		// super.shout()
		console.log("YOU ARE IN CREAPERS.SHOUT()", super.shout() + ',' + "Creapers shout: zzzzz")
		this.calledShout = true
		return super.shout() + ',' + "Creapers shout: zzzzz"
	}
}

// se non si utilizza Creapers.prototype.getHealth 
// il metodo non viene ereditato da tutte le classi
Creapers.getHealth = function(params) {
	return params * 100
}

let creapers = new Creapers('Hola', 50);

console.log('CLASS CREAPERS', creapers)
console.log('creapers.health', creapers.health)
console.log('creapers.shout()', creapers.shout())

console.log('creapers.getType()', creapers.getType())
console.log('Creapers.getHealth', Creapers.getHealth(5.2345))
// console.log('creapers.getType()', Creapers.getType())
