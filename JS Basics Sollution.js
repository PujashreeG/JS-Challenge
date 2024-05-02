///-- JS Variables------///

//1.What will be the output?

// let num;
// console.log(num);

//ANS. undefined

//2. What will be the output?

// let num = 0;
// console.log(num);
// num = 2;
// console.log(num);

//ANS. 0 2

//3.  Assign a new value to the variable num. The code will not work the way it is. Find the mistake and fix it. Execute the corrected code.

// let num = 1;
// let num = 2;
// console.log(num); //SyntaxError: Identifier 'num' has already been declared

//Solution

// let num = 1;
// num = 2;
// console.log(num);

//4. Here, we declare the variable num. But, it has no value yet. Assign a value to it and run the code.

// let num;

// console.log(num); //undefined

//Solution

// let num = 25;
// console.log(num); //25

// or
// let num ;
// num =25
// console.log(num); //25

//5. Here, we have two variables numOne and numTwo. numOne already has a value. Assign numTwo the value of numOne and run the code.

// let numOne = 5;
// let numTwo;
// console.log(numTwo);

//Solution

// let numOne = 5;
// let numTwo = numOne;

// console.log(numTwo);

//6. Below, we attempt to assign the value of a variable named numOne to the variable numTwo. But, that variable has not been declared yet. Declare a variable named numOne and run the code.

// let numTwo = numOne;
// console.log(numTwo);

//Solution

// let numOne = 5;
// let numTwo = numOne;

// console.log(numTwo);

//--const variable--

//you can not assign a new value to a variable that was created with const.

//Try it out. Here, we attempt to assign a new value to a variable that was created with const.

// const test = 1;
// test = 2;
//TypeError: Assignment to constant variable.

//You also cannot declare a const-variable without assigning a value to it directly. See what happens if you try anyway:

// const test;
//SyntaxError: Missing initializer in const declaration

//7. What will be the output?

// let num;
// num = 2;
// console.log(num);

//Ans. 2

//8. What will be the output?

// const num;
// num = 5;
// console.log(num);

// Ans. Uncaught SyntaxError: Missing initializer in const declaration

//9. What will be the output?

// const num = 2;
// num = 6;
// console.log(num);

//Ans. Uncaught TypeError: Assignment to constant variable

//10.In this simple exercise we declare a variable called num and assign it a value of 5. Then we try to log the value of the variable using the console.log() method. But, the console.log() method contains a small mistake. If you try to run the code, you will see an error message. Fix the mistake and run the code again.

// const num = 5;
// console.log(Num); //Num is not defined

//Solution;

// const num = 5;
// console.log(num);

//11.This exercise is very similar to the previous one. We declare a variable called num, assign it a value of 5, and try to log it. But again, we introduced a small mistake. Fix the code and run it.

// console.log(num);
// const num = 5; //ReferenceError: Cannot access 'num' before initialization

//Solution
// const num = 5;
// console.log(num);

//12. In this exercise we practice how to declare a new variable and how to assign it a number. The console.log() statement below attempts to log a variable named num. Declare a variable with this name and assign it a number of your choice. Run the code to see if the number is being logged.

// console.log("The value of num is: " + num); //ReferenceError: num is not defined

//Solution

// const num = 5;
// console.log("The value of num is: " + num);

//13. The code below first declares a variable named num with a string value hello. Then, a new value bye is assigned. Finally, the variable is logged. But, the code will not work like that. Find the mistake and fix it. Execute the corrected code.

// const num = 1;
// num = 2;
// console.log(num); //TypeError: Assignment to constant variable.

//Solution

// let num = 1;
// num = 2;
// console.log(num);

//JS TEST--------

//14. What will be the output?

// let num = 2;
// num = 6;
// console.log(num);

//Ans. 6

//14. What will be the output?

let num;
num = 6;
console.log(num);

//Ans. SyntaxError: Missing initializer in const declaration
