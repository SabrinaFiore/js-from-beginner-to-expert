console.log("YOU ARE IN fetch.js")

// const Url = 'https://jsonplaceholder.typicode.com/todos/1'
const Url = 'https://jsonplaceholder.typicode.com/posts'

export default fetch(Url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Lorem Ipsum',
        content: 'Textual content',
        author: 'Sabrina'
    })
    })
    .then(r => r.json())
    .then(data => console.log("[debug] post data line 19", data))

export async function asyncFunction() {
    const Url = 'https://jsonplaceholder.typicode.com/todos/1'
    const response = await fetch(Url)
    const data = await response.json()
    return data
}

asyncFunction()
    .then(console.log)