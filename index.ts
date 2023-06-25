import { addFn, subtractFn } from "./lib"


const numberOne = 242354235
const numberTwo = 21341234

const sumOfAboveNumbers = addFn(numberOne, numberTwo)
const differenceOfAboveNumbers = subtractFn(numberOne, numberTwo)

console.log(`The sum of ${numberOne} and ${numberTwo} is: ${sumOfAboveNumbers}`)
console.log(`The difference of ${numberOne} and ${numberTwo} is: ${differenceOfAboveNumbers}`)
