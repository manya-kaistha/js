const user = {
    username: "Manya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
    }
}
user.welcomeMessage()
user.username = "nabhya"
user.welcomeMessage()

// console.log(this); // here this refers to an empty object in node // i.e. a gloab lobject
// console.log(this); // here this refers to the global object in browser i.e. window

// function chai(){
//     let username = "manya"
//     console.log(this.username)// this prints undefined // this cant be used in functions like in objects
// }
// chai()

const chai = () => { // arrow function
    let username = "manya"
    console.log(this)// this will give an empty object
}
chai()

const addTwo = (num1, num2) => {
    return num1+num2
}

const addTwo2 = (num1, num2) => num1 + num2 // this is called implrcit return and is the same as the function above but less verbose
// when you use {} in a function you need to do an explecit return using the return keyword 

const addTwo3 = () => ({username: "manya"}) // to return an object you need to wrap it in ()
const addTwo4 = () => {return {username: "manya"}} // this is the when doing an explecit return



