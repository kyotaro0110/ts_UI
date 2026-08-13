//unknown型とany型は、どちらも「どんな型が入るかわからない」
//unknownを優先して使うべき
let a: unknown = 30
let b = a === 123
let c = a + 10
let d = 5
if (typeof a ==='number') {
    d = a + 10
}
console.log(a,b,c,d)

