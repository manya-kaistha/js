const marvelHeros = ["spiderman", "Iron Man", "Hulk"]
const dcHeros = ["Flash", "Batman", "Superman"]

// marvelHeros.push(dcHeros) // this adds dc heros to marver as an arry nad does not merge the arrays 

const allheros = marvelHeros.concat(dcHeros)// thsi merges both the arrays
// concast stores the new arry in a new array
// push changes the original array

const all_new_heros = [...marvelHeros, ...dcHeros]
// this is the same as the above line but uses the spread operator to merge the arrays
// spread opperator is better as it allows you to merge more than 2 arrays
// it also does not change the original array
// it also does not create a new array it just creates a new reference to the array

console.log(all_new_heros)

const another_array = [1, 2, [2, 3, 5], [6,7,8, [9,5,4]]]
const flattened_array = another_array.flat(Infinity) // inplace of infinity you can choose to give how deep you want it to flatten
console.log(flattened_array)


console.log(Array.isArray("manya"))// check if the data is array
console.log(Array.from("manya"))//converts the data to array

console.log(Array.from({name: "manya"})) // this prints an empty array as it is not able to decide wheather to convert the keys to arry or the values to array
//thsi is interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))// of fives you the array from a set of variables