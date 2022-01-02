const foo = function * () {
  yield 10
  yield 20
}

const bar = foo()
console.log(bar.next())
