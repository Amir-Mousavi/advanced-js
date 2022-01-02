class Foo {
  * [Symbol.iterator] () {
    yield 1
    yield 2
  }
}

const SomeObj = {
  * [Symbol.iterator] () {
    yield 'a'
    yield 'b'
  }
}

console.log(Array.from(new Foo()))
console.log(Array.from(SomeObj))
