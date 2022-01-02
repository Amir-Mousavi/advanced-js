const someObj = {
    *generator() {
        yield 'a'
        yield 'b'
    }
}

const gen = someObj.generator()
console.log(gen.next());
console.log(gen.next());