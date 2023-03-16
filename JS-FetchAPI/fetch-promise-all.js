console.log("You are in fetch-promise-all.js")
let jsonplaceholder = 'https://jsonplaceholder.typicode.com/posts/';

/* $ per indicare che è una Promises o un Observable */

/* con .fetch() se ci sono errori di tipo 500 o 400... con il .then il problema viene risolto e non solleva l'errore
	con una promise normale segnala errori del server come 500/400 ecc */

let post$ = fetch(jsonplaceholder + '/1')
	.then(
		resp => { throw new Error('Error contacting server') }
		
		//resp.json()
	)
// post$.then(post => console.log("fetch-promise-all - post$", post))

let comments$ = fetch(jsonplaceholder + '1/comments')
	.then(
		resp => resp.json()
	)
// comments$.then(comments => console.log("fetch-promise-all - comment$", comments))

Promise.all([post$, comments$])
	.then(
		resp => {
			let post = resp[0]
			document.querySelector('#postTitle').innerHTML = post.title;
			document.querySelector('#postBody').innerHTML = post.body

			let comments = resp[1];
			let ul = document.querySelector('#comments')

			comments.forEach(comment => {
				let li = document.createElement('li')
				li.innerHTML = comment.body;
				ul.appendChild(li)
			});
		}
	).catch(error => console.log(error))