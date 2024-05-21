//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate = step => `<li>${step}</li>`;
const stepsHtml = steps.map(listTemplate);
const list1 = document.querySelector("#myList");
stepsHtml.forEach(step => list1.innerHTML += step);


let numbers = [1,2,3,3,3,3,4,5,6,7];
console.log("numbers", numbers)

let filteredList = numbers.filter(number => number > 4);
console.log("filteredList", filteredList)


let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("sum:", sum);

let max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log("max:", max);


let occurrences = numbers.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});
console.log("occurrences", occurrences);

console.log("flattend array examples")
let complexArray = [
    [1,2,4],
    [1],
    [2,3],
    [4,5,6]
];
const flattenedArray = complexArray.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue);
    return accumulator;
}, []);
console.log(flattenedArray.toString());

// Alternatively
console.log(complexArray.flat().toString());

/*

me:
What can I do with reduce?

ChatGPT:
Sure! Here are some ideas for tasks you can accomplish using the reduce method in JavaScript:

* Sum of all elements in an array.
* Product of all elements in an array.
* Flattening a nested array.
* Counting the occurrences of each unique element in an array.
* Finding the maximum value in an array.
* Finding the minimum value in an array.
* Grouping objects by a property.
* Removing duplicate elements from an array.
* Creating a lookup table (object) from an array of objects.
* Reversing an array.
* Partitioning an array into two arrays based on a condition.
* Calculating the average of elements in an array.
* Transforming an array of objects into a single object (e.g., summarizing data).
* Zipping two arrays into an array of pairs.
* Merging an array of arrays into a single object.
* Calculating the total length of strings in an array.
* Calculating the frequency of letters in a string.
* Converting an array of strings into a single concatenated string.
* Implementing a map-like transformation.
* Implementing a filter-like transformation.

*/