// 'use strict'
/*
## Problem 1: Global vs Function `this`

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
## Problem 2: Object Method Context

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

const user = {
  name: "Anubhav",
  greed : function(){
    console.log("hello", this.name)
  }
};

let check = user.greed
check()