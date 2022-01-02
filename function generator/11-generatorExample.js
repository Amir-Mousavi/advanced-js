function * printNumbers (n) {
  for (let current = n; current >= 0; current--) {
    yield current
  }
}

const gen = printNumbers(5)

for (let n of gen) {
  console.log(n)
}
