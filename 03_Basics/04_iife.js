// Immediately Invoked Function Expressions (IIFE)


(function chai(){ // the function is in ()// thsi is a named iife
    // named IIFE
    console.log(`DB CONNECTED`);
})();// () is the execution call // this is like doin chai() but you dont use chai only use the ()
// IIFE is used to prevent global scope pollution
//make sure to use ; after iife as sometime the funciton does not know when to end

( (name) => {// using arrow function // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('manya')

