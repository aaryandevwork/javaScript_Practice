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


// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];

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

//--------------------Ques 3 :  Filter -----------------------
// // medium :  Filter all even numbers.

// // let nums = [1,2,3,4,5,6,7,8];

// // let evenNums = nums.filter((Element) => Element%2 == 0)

// // console.log(evenNums)

// // hard :  You are given users.
// // Return only active users.

// // let users = [
// //   { name: "Anubhav", active: true },
// //   { name: "Rahul", active: false },
// //   { name: "Aman", active: true },
// // ];

// // let activeUsers = users.filter((Element) => Element.active === true)

// // console.log(activeUsers);

// //--------------------Ques 4 :  Reduce -----------------------


// //Medium :  Find total sum of array.

// let nums = [10,20,30,40];

// // let sum = nums.reduce((acc,curr) => acc += curr, 0)

// let sum = nums.reduce((acc,curr) => {
//     acc += curr
//     return acc;
// },0)

// console.log(sum)

// //Hard :  Count frequency of elements.

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let counted = fruits.reduce((acc, curr) => {
//     if(acc[curr]){
//         acc[curr]++;
//     }
//     else{
//         acc[curr] = 1;
//     }
//     return acc;
// },{})

// console.log(counted)

// //--------------------Ques 5 :  Find -----------------------
//Mid :  Find first number greater than 50.

// let nums = [20, 35, 60, 80];

// let finded = nums.find((Element) => Element > 50 )

// console.log(finded)

// // hard : Find a user with username `"admin"`.

// let users = [
//     { username: "rahul" },
//     { username: "admin" },
//     { username: "aman" }
// ];

// let founded = users.find((element) => element.username === "admin")

// console.log(founded)

// //--------------------Ques 6 :  FindIndex -----------------------

// Mid :  Find index of number `90`.

// let nums = [10, 40, 90, 50];

// let index = nums.findIndex((Element) => Element == 90)

// console.log(index+1)

// // Hard Question : Find index of first failed student.

// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 },
// ];

// let failedStudent = students.findIndex((Element) => Element.marks < 40);

// console.log(failedStudent+1)

// //--------------------Ques 7 :  some() -----------------------
// mid :  Check if any number is negative.

// let nums = [10, 20, -5, 40];

// let neg = nums.some((Element) => Element < 0)

// console.log(neg);

// // Hard : Check if any product is out of stock.

// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
// ];

// let outOfStock = products.some((Element) => Element.stock <= 0)
// console.log(outOfStock)

// //--------------------Ques 7 :  every() -----------------------
// Intermediate :  check if all numbers are positive.

// let nums = [10, 20, 30, 40];

// let allPositive = nums.every((element) => element>0)

// console.log(allPositive);

// // Hard : Check if all students passed.

// let students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 },
// ];

// let allPassed = students.every((element) => element.marks >= 40)

// console.log(allPassed)

let person = { name: "Aman", age: 25, city: "Bhopal" };

for (let key in person) {
    console.log(key, ":", person[key]);
}