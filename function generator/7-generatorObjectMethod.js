class Foo {
  * generator () {
    yield 1
    yield 2
    yield 3
  }
}

const f = new Foo()
const gen = f.generator()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
