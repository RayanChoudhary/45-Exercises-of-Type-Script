/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

//making variables
let apple= "apple";
let uppercaseApple = "APPLE";
let ten = 10
let five = 5
let friend = ["Arsalan", "Irfan", "Adnan"] 


//test for equality and inequality with strings
console.log("Test 1: is apple is equal to apple?")
console.log(apple == "apple")

console.log("\nTest 2: is apple is not equal to apple?")
console.log(apple != "apple")

//Tests using the lower case function
console.log("\nTest 3: is 'APPLE' is equal to apple after using lowercase function?")
console.log(uppercaseApple.toLowerCase() == "apple")


console.log("\nTest 4: is 'APPLE' is not equal to apple after using lowercase function?")
console.log(uppercaseApple.toLowerCase() != "apple")

// Numerical tests involving equality and inequality,greater than and less than, greater than or equal to, and less than or equal to

//equal to
console.log("\n Test 5: is ten is equal to 10?")
console.log(ten == 10)

//not equals to
console.log("\n Test 6: is ten is not equal to 10")
console.log(ten != 10)

// greater than
console.log("\nTest 4:is ten is greater than 5?")
console.log(ten > five)

console.log("\nTest 5: is ten is greatar tham 20?")
console.log(ten > 20)

//less than
console.log("\nTest 6: is ten is less than 20?")
console.log(ten < 20)

console.log("\n Test 7: is is ten is less than 5?")
console.log(ten < 5)

// greatar than or equal to
console.log("\n is ten is greatar than or equal to 5?")
console.log(ten >= 5)

console.log("\n is 5 is greatar than or equal to 10?")
console.log(5 >= 10)

//less than or equal to
console.log("\n is 10 is less than or equal to 5?")
console.log(10 <= 5)

console.log("\n is 5 is less than or equal to 10?")
console.log(5 <= 10)

//  And operator &&
console.log("\n is ten is equal to 10 and is five is equal to 5?")
console.log(ten == 10 && five == 5)

console.log("\n is ten is equal to 5 and is five is equal to 5?")
console.log(ten == 5 && five == 5)


// OR operator || 
console.log("\n is ten is equal to 5 OR is ten is equal to 10?")
console.log(ten == 5 || ten == 10)

console.log("\n is ten is equal to 5 OR is 5 is equal to ten?")
console.log(ten == 5 || 5 == ten)


// Test whether an item is in a array
console.log("\n is Arsalan in an array?")
console.log(friend.includes("Arsalan"))


// Test whether an item is not in a array
console.log("\n is Arsalan is not in an array")
console.log(!friend.includes("Arsalan"))