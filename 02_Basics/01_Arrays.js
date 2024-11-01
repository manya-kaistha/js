// const myArr = [0, 1, 2, 3, 4, 5, 6, "manya", True]
const myArr = [0, 1, 2, 3, 4, 5, 6]
// arrays in javascript have shallow copy i.e. they only copy the reference pont and dont make a new array on copy

console.log(myArr[0])

// const myArr2 = new Array(1, 2, 3, 4)
// myArr.push(7) // add someting to an array
// console.log(myArr2)
// console.log(myArr)

// myArr.pop() // removes the last element
// myArr.shift()//removes the first element
// myArr.unshift(0) // adds an element at the beginning

// console.log(myArr)

// console.log(myArr.indexOf(4))// output value will be -1 if elemet is not presetn

// const myArr3 = myArr.join()// adds all hte elements of the arry to a string with comas as seperator
// console.log(myArr3)


// slice and splice
const myArr4 = myArr.slice(1, 4) // returns a new array exclusive of the last index 
console.log("a", myArr4)
console.log("b", myArr)

const myArr5 = myArr.splice(1, 4) // inclusive of the last index 
console.log("c", myArr5)// this also remove sall the elements in myArr5 from the original Array
console.log("d", myArr)
// splice is used to insert or remove elements from an array