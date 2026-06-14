// // 1
// console.log(x);
// var x = 5;

// // 2
// foo();
// function foo() { console.log("called"); }

// // 3
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// // 4
// function make() {
//   let secret = "hidden";
//   return () => secret;
// }
// const reveal = make();
// console.log(reveal());

//############## Q11. Reverse a string.
//1
// function reverseString(str){
//   let arr = str.split("");
//   let left = 0;
//   let right = arr.length-1;

//   while(left < right){
//       let temp = arr[left]
//       arr[left] = arr[right]
//       arr[right] = temp;
//       left++;
//       right--;
//   }
//   console.log(arr);
//   arr.join("");
// }
// reverseString("hello");
// reverseString("aryan");

//2
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// ############## Q12. Count vowels in a string.

// let vowel = "aeiou"
// let count = 0;
// var countVowels = (str) =>{
//   for(let s of str){
//     if(vowel.includes(s)) count++;
//   }
//   console.log(count);
// }
// countVowels("javascript");

//############# Q13. Check whether a string is a palindrome.


// let isPalindrome = (str) =>{
//   let left = 0;
//   let right = str.length-1;

//   while(left < right){
//     if(str[left] !== str[right]){
//         return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(isPalindrome("madam"))


//############ Q14. Convert the first letter of every word to uppercase.

// let capitalize = (str) =>{

//   let result = str.split(" ")
//                   .map((word) => word[0].toUpperCase() + word.slice(1))
//                   .join(" ");

//   console.log(result)
// }

// capitalize("hello world");

//############### Q15. Count how many times a character appears in a string.
// let countChar = (str,char) =>{ 
//   let count = 0;
//   for(let s of str){
//       if(s === char) count++;
//   }
//   console.log(count);

// }
// countChar("javascript", "t");


//############ Q16. Find the largest number in an array.


// var arr = [10, 20, 30, 40, 50]

// var max = arr.reduce((max,n) =>{
//     if(n > max) max = n;
//     return max;
// })
// // let max = arr.reduce((max, n) => n > max ? n : max);
// //2

// console.log(max);
// console.log(Math.max(...arr));

//############### Q18. Find the sum of all array elements.

// var arr = [1,2,3,4,5]

// let sum = arr.reduce((sum,n) => sum + n,0)

// console.log(sum);

//###################### Q19. Return only even numbers from an array.

// var arr = [1,2,3,4,5,6]

// let even = arr.filter(n => n%2 == 0)

// console.log(even)

//################ Q20. Remove duplicate values from an array.

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let unique = [...new Set(arr)];

// console.log(unique);

/*Build a **Student Marks Calculator**.

Input:
[50, 60, 70, 80, 90]


Output:

Highest Marks: 90
Lowest Marks: 50
Average Marks: 70
Total Marks: 350
 */

// let arr = [50, 60, 70, 80, 90]

// let max = Math.max(...arr);

// let min = Math.min(...arr)

// let total = arr.reduce((acc,n) => acc+n,0);

// let average = () =>{
//   let N = arr.length;
//   return total/N;
// }
// console.log(`Highest Marks : ${max}`)
// console.log(`Lowest Mark : ${min}`)
// console.log(`Average marks : ${average()}`)
// console.log(`Total Marks : ${total}`)

// console.log(this)