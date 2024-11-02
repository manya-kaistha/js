// singelton
//when onjecyt is declared as literal singleton is not formed

// Object Literals

const mySym = Symbol('key1') //creating a sybmbol

const JsUser = {
    name: "Manya",
    "full name": "Manya Kaistha", // this can not be accessed using JsUser.full name 
    age: 18,
    // mySym = "mykey1" // thsi does not use the symbol as the key
    [mySym]: "mykey1", // this can be accessed using JsUser[mySym]
    location: "Delhi",
    company: "Google",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Friday"]  
}

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["full name"])// only way to access full name
console.log(JsUser[mySym])

JsUser["location"] = "Pune" // overriding the value of a key
console.log(JsUser["location"])

console.log(JsUser)//check if the mySym shows up as Symbol(key1) in terminal

JsUser.greetings = function(){
    console.log("Hello JS user");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo())

Object.freeze(JsUser) // prevents the values in object from being overwritten
JsUser.isLoggedIn = true
console.log(JsUser.isLoggedIn)// this will not yield the expected results as the object has been frozen
