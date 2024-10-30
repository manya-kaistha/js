// stack (used by premitive datatypes) and heap memory (used by non_premitve datatypes)

let myPcName = "pc1"
let anotherName = "pc2"

anotherName = "pc3"
console.log(myPcName)

let userOne = {
    email: "manya@pc.com",
    upi: "123@okpc"
}

let userTwo = userOne

userTwo.email = "rakesh@123.com"

console.log(userOne.email)
console.log(userTwo.email)