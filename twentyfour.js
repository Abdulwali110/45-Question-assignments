var num1 = 5;
var num2 = 10;
console.log("Equality Test:");
console.log(num1 == num2); // False because 5 is not equal to 10
console.log("Inequality Test:");
console.log(num1 != num2); // True because 5 is not equal to 10
console.log("Greater Than Test:");
console.log(num1 > num2); // False because 5 is not greater than 10
console.log("Less Than Test:");
console.log(num1 < num2); // True because 5 is less than 10
console.log("Greater Than or Equal To Test:");
console.log(num1 >= num2); // False because 5 is not greater than or equal to 10
console.log("Less Than or Equal To Test:");
console.log(num1 <= num2); // True because 5 is less than or equal to 10
//"And" aur "or" operators using test :
var condition1 = true;
var condition2 = false;
console.log("And Operator Test:");
console.log(condition1 && condition2); // False (because both conditions are not true)
console.log("Or Operator Test:");
console.log(condition1 || condition2); // True (because at least one condition is true)
// array 
var array = [1, 2, 3, 4, 5];
var itemToFind = 3;
console.log("Item in Array Test:");
console.log(array.includes(itemToFind)); // True (because 3 is in the array)
// any item is not in array:
console.log("Item not in Array Test:");
console.log(!array.includes(6)); // True (because 6 is not in the array)
