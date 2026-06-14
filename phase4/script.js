'use strict'
/*
################################################### Problem 1: Global vs Function `this`

Create a function `showThis()` and print the value of `this` when:

- Called normally
- Called in strict mode

### Expected Learning

- Default Binding
- Strict Mode Behavior
*/

// function showThis(){
//     console.log(this)
// }

// showThis()

/*
################################################# Problem 2: Object Method Context

Create an object:
const user = {
  name: "Anubhav"
};

Add a method that prints:
Hello Anubhav

Then store the method in another variable and call it.

### Expected Learning

- Method Binding
- Call Site Concept
*/

// const user = {
//   name: "Anubhav",
//   greed : function(){
//     console.log("hello", this.name)
//   }
// };

// let check = user.greed
// check()


//################################### Fix using bind()
// const fn = user.greet.bind(user);

// fn();

// Output:

// Hello Anubhav

/*
######################################## Problem 3: Arrow Function vs Regular Function

Create an object with:
name: "Rahul"

Implement:

- One regular method
- One arrow method

Print `this.name` from both.

### Expected Learning

- Lexical `this`
- Object Method Context
*/

// let user = {
//     name : "aryan",
//     greet(){
//         console.log("hello", this.name)
//     },
//     greed : ()=>{
//         console.log("hello", this.name)
//     }
    
// }

// user.greet()
// user.greed()


// let user = {
//     name : "aryan",
//     greet(){
//         let greed = () => {
//             console.log("hello", this.name)
//         }
//         return greed
//     },
    
// }

// let check = user.greet()
// check()