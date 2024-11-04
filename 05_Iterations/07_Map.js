const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num + 10)
console.log(newNums)

const newNums2 = myNums //this is called map chaining
                .map( (num) => num * 10) 
                .map( (num) => num + 1 ) // all the values from previous map will be passed to this map
                .filter( (num) => num >= 40)// same as above applies to this as well
console.log(newNums2)
