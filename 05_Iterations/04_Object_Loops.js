const myObj = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby",
}

for (const key in myObj){
    console.log(`${key} is the shortcut for ${myObj[key]}`);
}
 // maps are not iterable so you can use for in loop on maps
 