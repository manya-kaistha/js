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