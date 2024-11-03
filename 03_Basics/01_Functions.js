function sayMyName() {
    console.log("manya")
}

// sayMyName()

function addTwoNumbers(number1, number2) {
    let result = (number1 + number2)
    return result
    //return number1 + number2
    console.log("manya") // thsi wil never print
    // code does not execute after return statement
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result) // this prints Result: undefined if the fuction does not return anything

function loginUserMessage(username = "sam"){ // this is basically giving a default value
    if (!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("manya"))

function calculateCartPrice(val1, val2, ...num1){ //... is a rest operator
    return num1
}

console.log(calculateCartPrice(100, 200, 300, 400))// this will give us an array becaouse of the rest operatorthat can be iterated through
// the first 2 values will go to val1 and val2 and all others will go the array(...num1)

const user = {
    username: "manya",
    price: 99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`)
}
handleObject(user)

handleObject({  // you can also create a user and pass that
    username: "manya",
    price: 99
})

const myNewArray = [100, 200, 300, 400]
function ReturnSecondValue(anyArray){
    return anyArray[1]
}
console.log(ReturnSecondValue(myNewArray))