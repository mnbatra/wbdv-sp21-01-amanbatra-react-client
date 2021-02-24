let someObject = {
  anObjectProperty: {
    anotherObjectProp: {
      q: 111,
      w: "222"
    },
    anotherArrayProp: [321, 432, 543]
  },
  aNumberArrayProp: [1, 2, 3],
  anObjectArrayProp: [
    {a: 123, b: 234}, {a: 321, b: 432}]
}
// console.log(someObject)
// console.log(someObject.anObjectProperty)
// console.log(someObject.anObjectProperty.anotherObjectProp.q)
// console.log(someObject.anObjectProperty["anotherObjectProp"].q)

function addEs5(a, b) {
  console.log(a, b)
  return a + b
}

// let ewq = addEs5(2, 3)
// console.log(ewq)

// const addEs6 = (a, b) => {
//   console.log(a, b)
//   return a + b
// }

// const addEs6 = (a, b) => {
//   return a + b
// }

// const addEs6 = (a, b) => a + b
//
// ewq = addEs6(2, 3)
// console.log(ewq)
//
// function squareEs5 (b) {
//   return b * b
// }
//
// let ewq = squareEs5(3)
// console.log(ewq)
//
// // const squareEs6 = (b) => b * b
// const squareEs6 = b => b * b
// ewq = squareEs6(4)
// console.log(ewq)

let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let even = all.filter(function (i){
//   return i % 2 === 0
// })
let even = all.filter(i => {
  console.log(i);
  return i % 2 === 0
})
let odd  = all.filter(i => i % 2 !== 0)

console.log(even)
console.log(odd)


all = [1, 2, 3, 4]
let squares = all.map(i => i * i)
console.log("all = ", all)
console.log("squares = ", squares)


let list = [ 1, 2, 3 ]
let [ a, , b ] = list
console.log(list, a, b)
//   [ b, a ] = [ a, b ]
// console.log(list, a, b)

let tmp = {a: "123", q: "234", c: "345", w: "456"}
let {q, w} = tmp
console.log(q, w)
