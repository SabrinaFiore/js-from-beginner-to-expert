console.log("YOU ARE IN promises.js")

const p = new Promise((resolve, reject) => {
   setTimeout(() => resolve(5), 3000)
})

p.then(
   () => new Promise((resolve, reject) => {
    setInterval(() => resolve(50), 2000);
   }),
   err => console.log(err)
).then(
    data => console.log(data)
).catch(
    err => console.log(err)
);