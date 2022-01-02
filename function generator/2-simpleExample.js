function * idMaker () {
  let index = 0

  while (true) {
    yield index++
  }
}

const gen = idMaker()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
