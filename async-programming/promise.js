import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/posts'

// Promise => rejected -> catch, pending, fulfilled -> then

function isCorrectName (name) {
  if (name === 'amir') {
    return Promise.resolve(Promise.resolve('Yes'))
  }
  return Promise.reject('Not a correct name...')
}

isCorrectName('amir')
  .then(result => result)
  .then(res => console.log(res))
  .catch(e => console.log(e))

fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(e => {
    console.error(e.message)
  })
