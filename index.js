// //Question 1.Differences between mutating array methods and non-mutation array methods in JavaScript.
// //Mutating array methods change the original array directly by adding, removing, or modifying elements,
// // while non-mutation methods do not modify the original array and instead return a new array or a single value.

// //Mutating array methods:

// // push() - adds one or more elements to the end of an array
// // pop() - removes the last element from an array
// // shift() - removes the first element from an array
// // unshift() - adds one or more elements to the beginning of an array
// // splice() - adds or removes elements from an array at a specific index

// //Non-mutating array methods;
// // concat() - merges two or more arrays and returns a new array
// // slice() - returns a new array with a portion of the elements of the original array
// // join() - converts all elements of an array into a string
// // map() - returns a new array with the result of calling a function on each element of the original array
// // filter() - returns a new array with the elements of the original array that meet a certain condition specified by a function.


// //Question2.
// // Create the initial array
// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// // Add 'Kotlin' to the end of the array
// languages.push('Kotlin');


// // Add 'Java' after 'Ruby'
// let rubyIndex = languages.indexOf('Ruby');
// languages.splice(rubyIndex + 1, 0, 'Java');

// // Remove the first item in the array
// languages.shift();

// // Add 'Scala' and 'Swift' to the beginning of the array
// languages.unshift('Scala', 'Swift');

// // Replace 'PHP' with 'Go' and 'Rust'
// let phpIndex = languages.indexOf('PHP');
// languages.splice(phpIndex, 1, 'Go', 'Rust');

// //Question3 : What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// function changeFruit( fruit ) {
//         fruit[2] = "orange";
//         return fruit;
// }

// changeFruit(fruit); //[apple', 'mango', 'orange'];
// //After calling the changeFruit function with the fruit array as an argument, 
// //the value of fruit will be ['apple', 'mango', 'orange'].

// //Question4: 

// function getMaxValue(numbers) {
//     // Initialize the maximum value to be the first element of the array
//     let max = numbers[0];
    
//     // Iterate over the array starting from the second element
//     for (let i = 1; i < numbers.length; i++) {
//       // If the current element is greater than the current max, update max
//       if (numbers[i] > max) {
//         max = numbers[i];
//       }
//     }
//     // Return the maximum value
//     return max;
//   }
// //   let numbers = [3, 7, 1, 9, 4, 2, 8, 5];
// //   let maxValue = getMaxValue(numbers); // returns 9
// //   console.log(maxValue);
    
  //Question5:

  function valTimesIndex(arr) {
    return arr.map((val, index) => val * index);
  }

  const arr = [1, 2, 3, 4, 5];
const result = valTimesIndex(arr);
console.log(result); // [0, 2, 6, 12, 20]
  