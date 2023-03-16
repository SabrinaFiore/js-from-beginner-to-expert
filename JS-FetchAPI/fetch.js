let postUrl = 'https://jsonplaceholder.typicode.com/posts/';

let headers = new Headers();
headers.append('Authorization', 'Bearer dsfsdfdsf$$££$£$');

let init = {
	headers: headers,
	method: 'GET',
};

fetch(postUrl + 1, init).then(result => {
  if (result.ok) {
    if (result.headers.get('Content-type').includes('application/json')) {
        return result.json();
    }
    throw new Error('response type is not json')
  } else {
		throw new Error('response failed')
	}
}).then(json => {
	console.log(json)
}).catch(err => {
  console.log(err)
})