import { Worker } from 'worker_threads'

const worker = new Worker('./calculate')

worker.on('message', msg => {
  console.log(msg)
})

setInterval(() => {
  console.log('hello')
}, 1000)
