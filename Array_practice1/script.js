//3. Create a function that accepts unlimited numbers and returns their sum using rest operator.

// const sum = (...numbers) =>{
//     let totel = 0;
//     for(let n of numbers){
//         totel += n;
//     }
//     return totel;
// }

// console.log(sum(5,5,5));

//4., Write a function that counts vowels in a string.

// let vowels = "aeiouAEIIOU";
// let count = 0;
// const checkVowels = (str) =>{
//     for(let s of str){
//         if(vowels.includes(s)) count++;
//     }
//     return count;
// }

// console.log(checkVowels("Vikash ji"));

//5. Create a function that checks if a string is palindrome.?

// const ReverseString = (str) =>{
//     let reversed = ""
//     for(let i=str.length-1; i>=0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(ReverseString("aryan"));


//6.  Write a callback function example using setTimeout.

// const greed = () =>{
//     console.log("hello");
// }
// setTimeout(greed,1000)

//7. Create a higher-order function that executes another function twice.

//1
// function greed(greeder , name){
//     console.log("i am ",name);

//     greeder(name);
// }

// function greeeeder(name){
//     console.log("hello :", name);
// }

// greed(greeeeder,"aaryan");

//8. Write a function that returns another function.

// function greed(greeder){
//     return function(name){
//         console.log(`${greeder} my Friend, I am ${name}`);
//     }
// }

// const greeder = greed("hefllo");

// console.log(greed());

//Ques : Write a recursive function for factorial.

// function factorial(n){
    //     if(n <= 1) return 1;
    
    //     return n * factorial(n-1);
    // }
    
    // console.log(factorial(5));
    
//Ques : Write a recursive function for factorial.

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6)); // 8


// Function
 
// function aa(a,b){
//      console.log("adcd",a,b);

//     //  return 10;
// }

// console.log(aa(a));
// aa(10);

// (function(){
//     console.log("Executed")
// })();


//Ques : Check if array contains a value.

// let arr = [1,2,3,4,5]

// console.log(arr.includes(2))

//Ques : Join array elements with .
// let arr = [1,2,3,4,5]
// console.log(arr.join("."))

//Ques : Create array of names and convert all to uppercase.

// let name = ["aaryan","raju","ammu","saam"]

// let upperData = name.map((name) => {
//     return name.toUpperCase();
// })

// console.log(upperData)


// ---------------------------- JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 2 -------------------------------

//Ques 1---> Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

// let array = [10,12,"hello",true,[12,34,56]];

// console.log(array[4]);

// Ques ----> Swap the second and second-last element using indexing.

// let arr = [10, 20, 30, 40, 50];

// let temp = arr[1]; // second element

// arr[1] = arr[arr.length - 2]; // second-last element
// arr[arr.length - 2] = temp;

// console.log(arr);

// Quest ----> Create a 2D array and print all first elements of inner arrays.
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// arr.forEach((element) => {
//     console.log(element[0])
// });

// // Ques 2 ----> Find the sum of all diagonal elements in a 3x3 matrix.
// let sum = 0;
// arr.forEach((element,index) => {
//     sum += element[index];
//     // console.log(element[index])

// });

// console.log(sum);

// Ques 3 --->  Create a function that checks whether array length is even or odd.

// let arr = [1,2,3,4,5]

// function checkLength(arr){
//     let len = arr.length;
//     // (len%2 == 0)?console.log("Even"):console.log("Odd");
//     console.log(len % 2 == 0 ? "Even" : "Odd");
// }

// checkLength(arr);

// Ques 5 ---> Add elements dynamically inside loop from another array.

// let arr = [1,2,3,4,5]
// let arr1 = [];

// arr.forEach(element => {
//     arr1.push(element); 
// });
// console.log(arr1);


// Ques 6 ---> Keep removing elements until array becomes empty.
// let arr = [1,2,3,4,5]

// while(arr.length > 0){
//     arr.pop();
// }
// console.log(arr);
// console.log(arr.length);

//Ques 7 ---> Insert multiple elements at beginning without replacing existing ones.
// let arr = [1,2,3,4,5]

// arr.unshift(0,10)

// console.log(arr);

//Ques 8 ---> Remove first element repeatedly until only 2 elements remain.
// let arr = [1,2,3,4,5]

// while(arr.length > 2){

//     arr.shift()
// }

// console.log(arr);

//Ques 9 ---> Replace 3 middle elements with 5 new values.
// let arr = [1,2,3,4,5]

// arr.splice(2,3,6,7,8,9,10)

// console.log(arr);

//Ques 10 ---> Reverse only first half of array.
// let arr = [1,2,3,4,5]

// // let len = Math.floor(arr.length);

// let left = 0;
// let right = Math.floor(arr.length / 2) - 1;

// while(left < right){
//     let temp = arr.at(left);
//     arr[left] = arr[right]
//     arr[right] = temp;
//     left++;
//     right--;
// }

// console.log(arr);

// Ques 11 ----> Sort array so even numbers come first and odd later.
// let arr = [2,3,4,5,6,7]

// let o = 0;
// let left = 0;
// let right = 0;

// while(right < arr.length){
//     if(arr[right]%2 == 0){
//         [arr[left],arr[right]] = [arr[right],arr[left]];
//         left++;
//         right++;
//     }
//     else{
//         right++;
//     }
// }

// console.log(arr);

// Ques 12 ---> Create a copy excluding first and last element.
// let arr = [1,2,3,4,5,6,7]
// let arr1 = arr.slice(arr.at(0),arr.at(arr.length-1));
// console.log(arr1);

// Ques 13 ---> Merge 3 arrays and remove duplicate values.

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let arr3 = [5, 6, 7, 8];

// // Combine arrays
// let merged = [...arr1, ...arr2, ...arr3];

// let result = [];

// for (let i = 0; i < merged.length; i++) {
//     if (!result.includes(merged[i])) {
//         result.push(merged[i]);
//     }
// }

// console.log(result);

// Ques 14 ---> Check if all elements of one array exist inside another.

// let arr1 = [1, 2, 3, 4];
// let arr2 = [1,2,3, 4, 5, 6];
// // let arr3 = [5, 6, 7, 8];

// let found = true;

// for (let element of arr1) {
//     if (!arr2.includes(element)) {
//         found = false;
//         break;
//     }
// }

// console.log(found);
// console.log("running");

// Ques 16 ---> Convert array into sentence format.

// let str = ["hello","js",'this',"is","new","world"]

// let newstr = str.join(" ");

// console.log(newstr);

// Ques 19 ---> Assign one array to another variable and modify second one.
// Create true copy so original array does not change.
let arr1 = [1, 2, 3, 4];

// let arr2 = [...arr1];

// arr2[2] = 8;

console.log(arr1);
console.log(arr2);

// Merge arrays and add extra values in between.
let mergedArray = [...arr1,0,0,0,0,...arr2]
console.log(mergedArray);
