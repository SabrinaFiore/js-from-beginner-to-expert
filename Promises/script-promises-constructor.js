let p = new Promise(function (resolve, reject) {
    // resolve(24)
    // reject('There was an error')
    throw new Erroe('There was an exception')
})

p.then(function (res) {
    console.log(res)
}).catch(function (error) {
    console.log(error)
})