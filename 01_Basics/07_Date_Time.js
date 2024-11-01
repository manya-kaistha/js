"use strict"

// Dates
let myDate = new Date()
console.log(myDate.toString())

console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 27)
let myCreatedDate2 = new Date("01-14-2005")
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate2.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate2.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate2 = new Date()
console.log(newDate2.getMonth() + 1)
console.log(newDate2.getDay())

newDate2.toLocaleString('default', {
    weekday: "long",
})
// this date and tiem can be used to fromat the otuput according to your needs 

