const arr = [1, 2, 3, 4, 5, 6]

//for of loop

for (const num of arr) {
    console.log(num)
}

const greetings = "hello world"
for (const greet of greetings) { 
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()// map os ordered and holdes unique key value pairs
map.set("IN", "Inida")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")
map.set("IN", "Inida")

console.log(map)

for (const [key, value] of map) {
    console.log(`${key} is ${value}`)
}

const myObj = {
    "game1": "NFS",
    "game2": "FIFA",
    "game3": "Mortal Kombat"
}

// for (const [key, value] of myObj) { 
//     console.log(`${key} is ${value}`) // this is not how to iterate through an object 
//     // this will give an error
// }

