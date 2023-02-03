console.log("YOU ARE IN Javascript ES6-ES9 - forEach")

let cities =  [
	{ name: 'Torino', reg: 'Pie'},
	{ name: 'Asti', reg: 'Pie'},
	{ name: 'Milano', reg: 'Lom'},
	{ name: 'Como', reg: 'Lom'}
];

let city = document.getElementById('city')
let ul = document.createElement('ul')
let pieCities = cities.filter(v => v.reg == 'Pie')

pieCities.forEach((el) => {
	let li = document.createElement('li')
	li.innerHTML = el.name
	
	ul.appendChild(li)
})

cities.splice(0, 1)
console.log("cities array", cities)
city.appendChild(ul)

