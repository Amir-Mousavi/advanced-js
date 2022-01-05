import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/posts'

async function fetchData () {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

console.log('Hello')
fetchData().then(result => console.log(result))
console.log('Bye')

// Main thread => stack(console.log('Hello'), console.log('Bye'))
// Event Loop => queue => [fetchData]
// Main thread => stack(fetchData)
// Main thread => stack(console.log(result))
