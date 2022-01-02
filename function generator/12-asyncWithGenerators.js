import fetch from 'node-fetch'
const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'

function * fetcher () {
  const response = yield fetch(url)
  const data = yield response.json()
  return data
}

const coroutine = gen => {
  const generator = gen()

  const handler = result => {
    if (result.done) return Promise.resolve(result.value)

    return Promise.resolve(result.value).then(res =>
      handler(generator.next(res))
    )
  }

  return handler(generator.next())
}

const commentFetcher = coroutine(fetcher)
commentFetcher.then(data => console.log(data))
