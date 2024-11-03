const tinderUser = new Object()
// the object above is mode using constructor and is a singleton object

tinderUser.id = "123abc"
tinderUser.name = "manu"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gamil.com",
    fullName: {
        userFullName: {
            first: "manu",
            last: "kaistha",
        }
    }
}

console.log(regularUser.fullName.userFullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//merging 2 objects
const obj3 = Object.assign({}, obj1, obj2, obj4)// it is good to take {} when there are more than 2 objects
// thsi basically adds all the objects to the forst obj ie obj1 if {} is not used
// this adds all the objects to {}

const obj5 = {...obj1, ...obj2, ...obj4} // this also merges all the objects
//preferred method to merge
console.log(obj3)

const users =[
    {id: 1, name: "manu"},
    {id: 2, name: "nabhu"},
]

console.log(users[1].id) //prints id of nabhu

console.log(Object.keys(tinderUser))// this outputs an array which can be iterated through
console.log(Object.values(tinderUser))// this outputs an array which can be iterated through
console.log(Object.entries(tinderUser))// prints both key and value both as arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//checks if a key is present

//****************** object destructuring**********************
const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "manya"
}
console.log(course.courseInstructor)// it is verbose to keep writting couse.courseInstructor
// so we use the syntax below to make it easier on ourselves

const {courseInstructor} = course //extract value from course of courseInstructor
const {courseInstructor: instructor} = course // basically assigning value of courseinstructor ot instructor
// thsi syntax will be useful while learning React
console.log(courseInstructor)
console.log(instructor)

//++++++++++++API+++++JSON+++++++++
// {
//     courseName: "js in hindi",
//     price: 999,
//     courseInstructor: "manya"
// }
// thsi is how json looks
//json is an object like ds
