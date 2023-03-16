const albumUrl = 'https://jsonplaceholder.typicode.com/albums'
const photoUrl = 'https://jsonplaceholder.typicode.com/photos'
const userUrl = 'https://jsonplaceholder.typicode.com/users'

async function fetchAlbums() {
	const albums = await fetch(albumUrl).then(resp => resp.json()).then(
		albumcontent => albumcontent
	)

	let usersArray = []
	albums.map(album => {
		if (!usersArray.includes(album.userId)) {
			usersArray.push(album.userId);
		}
	})

	let userPromises = usersArray.map(userId =>  fetch(userUrl+'/' + userId ).then(resp => resp.json()))
	
	/* Finche tutte le Promise non verranno risolte il codice andrà in pausa
	Inoltre le chiamate verranno fatte in parallelo */
	const users = await Promise.all(userPromises);
	console.log("users", users)

	return {albums: albums, users: users}
}

/* 
	async function fetchAlbum(id) {
		// from fetch to albumcontent è una Promise 
		const album = await fetch(albumUrl + '/' + id).then(resp => resp.json()).then(
			albumcontent => albumcontent
		)
		
		const photo = await fetch(photoUrl + '/' + album.id).then(resp => resp.json()).then(
			photos => photos
		)

		album.photo = photo
		return album
	}

	let res = fetchAlbum(1)
	// alert(res)

	// Risolvo la promise con then 
	res.then(resp => console.log("res fetchAlbum(1)", resp))
*/

let res = fetchAlbums()

/* Risolvo la promise con then */
res.then(resp => console.log("res02 fetchAlbums()", resp))