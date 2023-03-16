/*  Si instanzia Promise e si passa una funzione chiamata risolve che riceve due parametri:
	1. Uno per risolvere la Promise
	2. L'altro per rifiutarla
*/

var p00 = new Promise(function(resolve, reject){
	let condition = ''
	let value = 'Promise Resolved'
	let reason = 'Rejected Promise'
	
	if (condition) {
		resolve(value) // andata a buon fine
	} else {
		// reject(reason) errore rifiutata
	}
})

/* Stati di una Promises
	1. Pending (pendente)
	2. Fullfilled (risolta): Viene chiamato il primo metodo
	3. Rejected (rifiutata): Viene chiamato il secondo metodo
*/

var p = Promise.resolve('Promise resolved');

p.then((res) => {
	console.log(res)
})

let r = Promise.reject('Promise rejected')

r.then(function(res) {
	console.log(res)
}).catch((error) => {
	console.log("error", error)
})