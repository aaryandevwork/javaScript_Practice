// JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 4

// ############################## 1. Create an Object ######################################## 

// Create an object for a student with:

// - name
// - age
// - course

// Then print all values.

// let student = {
//     name : "Aryan",
//     age : 23,
//     course : "MCA"
// }

// console.log(student);

// ############################## 2. Access Properties ######################################## 
// - dot notation
// - bracket notation

// const car = {
//   brand: "BMW",
//   model: "M4",
//   year: 2022
// }

// console.log("Using dot")
// console.log(car.brand)
// console.log(car.model)
// console.log("Using Bracket")
// console.log(car["brand"])
// console.log(car["model"])

// ############################## 3. Update Object Value ######################################## 

// Change the age of a user from 20 to 25.

// const user = {
//   name: "Anubhav",
//   age: 20
// }

// user.age = 25;
// console.log(user);

// user["age"] = 26;
// console.log(user);

// ############################## 4. Add New Property ######################################## 
// Add a new property:

//  const user = {
//   name: "Anubhav",
//   age: 20
// }

// user.isAdmin = true;

// console.log(user)

// ############################# 5. Delete Property ######################################## 

// Remove the `password` property from the object.

// const account = {
//   username: "john",
//   password: "12345"
// }

// delete account.password;

// console.log(account);

// ########################### 6. Count Properties ######################################## 

// Write a function that returns how many properties an object has.

// countProperties({a:1,b:2,c:3})

//  const user = {
//   name: "Anubhav",
//   age: 20,
//   username: "john",
//   password: "12345"
// }

// const count = (obj) => {
//   return Object.keys(obj).length;
// }
// console.log(count(user))

// ########################## 7. Loop Through Object######################################## 

// Print all keys and values from this object.

// const person = {
//   name: "aman",
//   age: 22,
//   city: "Delhi"
// }

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

// ######################## 8. Check Property Exists ######################################## 

// Check whether `"email"` exists inside an object or not.

// const person = {
//   name: "aman",
//   age: 22,
//   city: "Delhi"
// }

// console.log("email" in person)

// ######################## 9. Merge Two Objects ######################################## 

// Merge these two objects into one.

// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }

// const MergedObj = {...obj1,...obj2}
// console.log(MergedObj);

// ######################## 10. Convert Object to Array ######################################## 

// Convert this object into an array of key-value pairs.

// const user = {
//   name: "Aman",
//   age: 21
// }

// console.log(Object.entries(user));
// let arr = Object.entries(user)
// console.log(arr);

// ######################## 11. Find Highest Value ######################################## 

// Find the student with highest marks.

// const marks = {
//   Anubhav: 95,
//   Rahul: 82,
//   Aman: 90
// }

// let max = 0;
// let maxIndex = "";
// for(let [key , value] of Object.entries(marks)){
//     console.log(`${key} : ${value}`)
//     if(max < value){
//         max = value
//         maxIndex = key;
//     }
// }

// console.log(maxIndex);

// ######################## 12. Sum of Object Values ######################################## 

// Find total salary.

// const salaries = {
//   john: 1000,
//   alex: 2000,
//   bob: 1500
// }

// let sum = 0;

// for(let key in salaries){
//     sum += salaries[key];
// }

// console.log(sum);

// ######################## 13. Nested Object Access######################################## 

// Print:

// - city
// - pincode

// const user = {
//   name: "Anubhav",
//   address: {
//     city: "Bhopal",
//     pincode: 462001
//   }
// }

// normal way
// console.log(user.address.city)
// console.log(user.address.pincode)

// loop se
// if (user.address.city && user.address.pincode) {
//   console.log(user.address.city);
//   console.log(user.address.pincode);
// }

//advanced recursive way
// function printObject(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       printObject(obj[key]);
//     } else {
//       console.log(key, ":", obj[key]);
//     }
//   }
// }

// printObject(user);

// ######################## 14. Object Method Practice ######################################## 

// Create an object with:
// - name
// - marks
// - method called `getResult`

// If marks > 40:
// "Pass"


// const user = {
//   name: "Anubhav",
//   marks : 75,
//   getResult : function(){
//     if(this.marks > 40){
//       return "pass"
//     }
//     else{
//       return "fail"
//     }
//   }
// }

// console.log(user.getResult());

// ######################## 15. Convert Array to Object ######################################## 

// Convert this array into an object.

// const arr = ["name", "Anubhav", "age", 24]

// let obj = {}

// for(let i=0; i<arr.length; i+= 2){
//     obj[arr[i]] = arr[i+1];
// }

// console.log(obj);