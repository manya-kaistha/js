const name = "manya";
const repoCount = 50;

// console.log(name + repoCount + "Value")
// above method is old

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = "afsj"
console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf("f"))
console.log(gameName.charAt(2))

const newString = gameName.substring(1,3)
console.log(newString)

const alsoNewString = gameName.slice(-3, 3)
console.log(alsoNewString)

const stringOne = "    manya    "
console.log(stringOne)
console.log(stringOne.trim())

const url = "www.manya.com/mnaya20%kaistha"
console.log(url.replace("20%", "-"))
