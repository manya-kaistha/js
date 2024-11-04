const coding = ["js", "rb", "py", "ts", "cpp"]

coding.forEach(function (item){
    console.log(item);
})

coding.forEach( (val) => {
    console.log(val);
})

function printMe (item) {
    console.log(item);
}

coding.forEach(printMe) // only give reference printMe dont execute printMe()

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

// object iteration 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )