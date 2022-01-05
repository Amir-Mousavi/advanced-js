import { parentPort } from 'worker_threads'

function calculate () {
  let n = 1

  for (let i = 1; i < 10000000000; i++) {
    n *= i
  }

  return n
}

const result = calculate()

parentPort.postMessage(result)
