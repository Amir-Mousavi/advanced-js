function * logGenerator () {
  console.log(0)
  console.log(1, yield)
  console.log(2, yield)
  console.log(3, yield)
}

const gen = logGenerator()

gen.next()
gen.next('Amir')
gen.next('Ali')
gen.next('Reza')
