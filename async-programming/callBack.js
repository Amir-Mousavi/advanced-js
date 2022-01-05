function sayHello (name, cb) {
  console.log(`Hello ${name}`)

  cb(name)
}

function sayBye (name) {
  console.log(`Bye ${name}`)
}

sayHello('Amir', sayBye)

// Callback hell
// a(b => {
//     asdasdad
//     c(d=> {
//         asdsad
//         e(f => {
//             asdasd
//         })
//     })
// })
