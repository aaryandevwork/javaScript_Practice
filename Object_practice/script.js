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

// ######################## 16. Frequency Counter ######################################## 

// Count frequency of each character.

// Input:
// "banana"

// Expected Output:
// {
//   b:1,
//   a:3,
//   n:2
// }

// let str = "banana"
// let obj = {}

// for(let s of str){
//     // if(Object.hasOwn(obj, s)){
//     if(obj[s]){
//         obj[s] = obj[s] + 1;
//     }
//     else{
//         obj[s] = 1;
//     }
// }

// console.log(obj)

// ######################## 17. Group By Property ######################################## 


// Group users by age.

// 1 approach
// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 }
// ]

// let group1 = users.filter((Element) => Element.age === 20)
// let group2 = users.filter((Element) => Element.age === 21)

// // console.log(group1);
// // console.log(group2);

// // let groupded =  {...group1,...group2}
// let groupded = {
//     20 : group1,
//     21 : group2
// }
// console.log(groupded);

// 2 Approach 
// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 }
// ];

// let grouped = {};

// for (let user of users) {
//   if (Object.hasOwn(grouped, user.age)) {
//     grouped[user.age].push(user);
//   } else {
//     grouped[user.age] = [user];
//   }
// }

// console.log(grouped);

// ######################## 18. Deep Property Check ######################################## 

// Check whether this property exists:

// "user.address.city"

// inside an object dynamically.

// const obj = {
//   user: {
//     address: {
//       city: "Bhopal"
//     }
//   }
// };

// const path = "user.address.city";

// let keys = path.split(".");
// let current = obj;

// let exists = true;

// for (let key of keys) {
//   if (current && Object.hasOwn(current, key)) {
//     current = current[key];
//   } else {
//     exists = false;
//     break;
//   }
// }

// console.log(exists);

// current = current[key]; ---------------------------> ye 
// 1 itration me bad 
// const obj = {
//   user: {
//     address: {
//       city: "Bhopal"
//     }
//   }
// };
// next aisa ho jayega or kam hote jayega
// const current = {
//     address: {
//       city: "Bhopal"
//     }
// };

// ######################## 19. Object Comparison ######################################## 

// Check if two objects have same keys and values.

// Example:
// {a:1,b:2}
// {a:1,b:2}

// function isEqual(obj1, obj2) {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (let key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// let obj1 = { a: 1, b: 2 };
// let obj2 = { a: 1, b: 2 };

// console.log(isEqual(obj1, obj2));

// ######################### 20. Remove Duplicate Objects ######################################## 

// Remove duplicate objects from array based on `id`.

const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];

let seen = {};
let result = [];

for (let user of arr) {
  if (!seen[user.id]) {
    seen[user.id] = true;
    result.push(user);
  }
}

console.log(result);