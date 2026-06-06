// JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 3

// Ques 1 : You are given an array of prices.
// Print each price with "₹" before it.

// let prices = [100, 250, 399, 499];

// prices.forEach((element) => { 
//     console.log(`₹ ${element}`);
// })

// Ques hard : ------> You are given an array of students.
//"Pass" if marks are greater than 50
//"Fail" otherwise

// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];

// students.forEach((element) => { 
//     console.log(`${element.name} - ${element.marks > 50 ? "pass" : "fail"}`);
// })

//--------------------Ques 2 :  map -----------------------
// Convert all names into uppercase.
// let names = ["anubhav", "rahul", "aman"];

// let UpperCasedNames = names.map((element) =>  element.toUpperCase())

// console.log(UpperCasedNames)

//------------------- You are given products.
// Create a new array where:

// - Every product has a new property `discountPrice`
// - Discount is 10%


let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];

//In this original products also made change : 
// let discountedPrice = products.map((element) =>{
//     let discountPrice = element.price - (element.price * 10 / 100)
//     element.discountPrice = discountPrice;
//     return element;
// })

// console.log(discountedPrice)

// in this products never change  : 
// let discountedPrice = products.map((element) => {
//     return {
//         ...element,
//         discountPrice: element.price * 0.9
//     };
// });

// console.log(discountedPrice);