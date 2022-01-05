const interval = setInterval(() => {
  console.log('Hello')
}, 1000)

setTimeout(() => {
  clearInterval(interval)
}, 4100)
