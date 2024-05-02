//JS CHALLENGE--------
//----------------JS Fundamental-----------

//1. Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result

// function sumTotal(a, b) {
//   return a + b;
// }
// console.log(sumTotal(58, 65));

//2. Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

// function equal(a, b) {
//   return a === b;
// }
// console.log(equal(3, 53));

//3.Write a function that takes a value as argument. Return the type of the value.

// function myFunction(a) {
//   return typeof a;
// }
// console.log(myFunction(false));

//4. Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

// function myFunction(str, n) {
//   return str[n - 1];
// }
// console.log(myFunction("abcd", 1));

//5. Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

// function myFunction(a) {
//   return a.slice(3, a.length);
//  // return a.slice(3); //author solution
// }
// console.log(myFunction("fgedcba"));

//6. Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

// function myFunction(a) {
//   return a.slice(a.length - 3);
//   //  return a.slice(-3); //author solution
// }
// console.log(myFunction("asghfhf"));

//7. Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

// function myFunction(a) {
//   return a.slice(0, 3);
// }

// console.log(myFunction("abcdefg"));

// console.log(myFunction("1234"));

// console.log(myFunction("fgedcba"));

//8. Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.

// function myFunction(a) {
//   return a.indexOf("is");
// }
// console.log(myFunction("praise"));

// console.log(myFunction("risky"));

// console.log(myFunction("paris"));

//9. Write a function that takes a string (a) as argument. Extract the first half a. Return the result

// function myFunction(a) {
//   return a.slice(0, a.length / 2);
// }
// console.log(myFunction("abcdefgh"));

// console.log(myFunction("1234"));

// console.log(myFunction("gedcba"));

//10. Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

// function myFunction(a) {
//   return a.slice(0, a.length - 3);
//   // return a.slice(0, -3); //author solution
// }
// console.log(myFunction("abcdefg"));

// console.log(myFunction("1234"));

// console.log(myFunction("fgedcba"));

//11.Write a function that takes two numbers (a and b) as argument. Return b percent of a

// function myFunction(a, b) {
//   return (a * b) / 100;
// }
// console.log(myFunction(100, 50));

// console.log(myFunction(10, 1));

// console.log(myFunction(500, 25));

//12.Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.

// function myFunction(a, b, c, d, e, f) {
//   return Math.pow(((a + b - c) * d) / e, f);
//   // return (((a + b - c) * d) / e) ** f;  //author solution
// }

// console.log(myFunction(6, 5, 4, 3, 2, 1));

// console.log(myFunction(6, 2, 1, 4, 2, 3));

// console.log(myFunction(2, 3, 6, 4, 2, 3));

//13. Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

// function myFunction(a, b) {
//   if (a.includes(b)) {
//     return b.concat(a);
//   } else {
//     return a.concat(b);
//   }

//   // return a.indexOf(b) === -1 ? a + b : b + a; //author solution
// }

// console.log(myFunction("cheese", "cake"));

// console.log(myFunction("lips", "s"));

// console.log(myFunction("Java", "script"));
// console.log(myFunction(" think, therefore I am", "I"));

//14. Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

// function myFunction(a) {
//   return a % 2 === 0;
// }

// console.log(myFunction(10));

// console.log(myFunction(-4));

// console.log(myFunction(5));
// console.log(myFunction(-111));

//15. Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

// function myFunction(a, b) {
//   var count = 0;
//   for (var i = 0; i < b.length; i++) {
//     if (b.charAt(i) == a) count++;
//   }
//   return count;

//   // return b.split(a).length - 1;  //author solution
// }

// console.log(
//   myFunction("m", "how many times does the character occur in this sentence?")
// );

// console.log(
//   myFunction("h", "how many times does the character occur in this sentence?")
// );

// console.log(
//   myFunction("?", "how many times does the character occur in this sentence?")
// );
// console.log(
//   myFunction("z", "how many times does the character occur in this sentence?")
// );

//16. Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

// function myFunction(a) {
//   return a % 1 === 0;

//   // return a - Math.floor(a) === 0; //author solution
// }

// console.log(myFunction(4));
// console.log(myFunction(1.123));
// console.log(myFunction(1048));
// console.log(myFunction(10.48));

// 17. Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

// function myFunction(a, b) {
//   if (a < b) {
//     return a / b;
//   } else return a * b;

//   // return a < b ? a / b : a * b;  //author solution
// }

// console.log(myFunction(10, 100));
// console.log(myFunction(90, 45));
// console.log(myFunction(8, 20));
// console.log(myFunction(2, 0.5));

//18. Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

// function myFunction(a) {
//   return Number(a.toFixed(2));
// }

// console.log(myFunction(2.12397));
// console.log(myFunction(3.136));
// console.log(myFunction(1.12397));
// console.log(myFunction(26.1379));

//19.Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting

// function myFunction(a) {
//   return a
//     .toString()
//     .split("")
//     .map((n) => n);
// }

// console.log(myFunction(10));
// console.log(myFunction(931));
// console.log(myFunction(193278));

//----------------JS Arrays-----------

//20. Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

// function myFunction(a, n) {
//   return a[n - 1];
// }

// console.log(myFunction([1, 2, 3, 4, 5], 3));
// console.log(myFunction([10, 9, 8, 7, 6], 5));
// console.log(myFunction([7, 2, 1, 6, 3], 1));

//21  Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

// function myFunction(a, n) {
//   return a.slice(3);
// }

// console.log(myFunction([1, 2, 3, 4]));
// console.log(myFunction([5, 4, 3, 2, 1, 0]));
// console.log(myFunction([99, 1, 1]));

//22. Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

// function myFunction(a, n) {
//   return a.slice(-3);
// }

// console.log(myFunction([1, 2, 3, 4]));
// console.log(myFunction([5, 4, 3, 2, 1, 0]));
// console.log(myFunction([99, 1, 1]));

//23. Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

// function myFunction(a, n) {
//   return a.slice(0, 3);
// }

// console.log(myFunction([1, 2, 3, 4]));
// console.log(myFunction([5, 4, 3, 2, 1, 0]));
// console.log(myFunction([99, 1, 1]));

//24. Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

// function myFunction(a, n) {
//   return a.slice(a.length - n);
//   // return a.slice(-n); //author solution
// }

// console.log(myFunction([1, 2, 3, 4, 5], 2));
// console.log(myFunction([1, 2, 3], 6));
// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));

//25. Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

// function myFunction(a, b) {
//   return a.filter((a) => a !== b);
// }

// console.log(myFunction([1, 2, 3], 2));
// console.log(myFunction([1, 2, "2"], "2"));
// console.log(myFunction([false, "2", 1], false));
// console.log(myFunction([1, 2, "2", 1], 1));

//26. Write a function that takes an array (a) as argument. Return the number of elements in a

// function myFunction(a) {
//   return a.length;
// }
// console.log(myFunction([1, 2, 2, 4]));
// console.log(myFunction([9, 9, 9]));
// console.log(myFunction([4, 3, 2, 1, 0]));

//27. Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

// function myFunction(a) {
//   return a.reduce((res, e) => {
//     if (e < 0) res++;
//     return res;
//   }, 0);

//   //   return a.filter((el) => el < 0).length; //author solution
// }

// console.log(myFunction([1, -2, -2, 4]));
// console.log(myFunction([0, 9, 1]));
// console.log(myFunction([4, -3, 2, 1, 0]));

//28. Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

// function myFunction(arr) {
//   return arr.sort();
// }

// console.log(myFunction(["b", "c", "d", "a"]));
// console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"]));

//29. Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

// function myFunction(arr) {
//   return arr.sort().reverse();
//   //   return arr.sort((a, b) => b - a); //author solution
// }

// console.log(myFunction([1, 3, 2]));
// console.log(myFunction([4, 2, 3, 1]));

//30. Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

// function myFunction(a) {
//   return a.reduce((res, e) => {
//     res = res + e;
//     return res;
//   }, 0);
// }

// console.log(myFunction([10, 100, 40]));
// console.log(myFunction([10, 100, 1000, 1]));
// console.log(myFunction([-50, 0, 50, 200]));

//31. Write a function that takes an array of numbers as argument. It should return the average of the numbers.

// function myFunction(a) {
//   let sum = 0;
//   for (i = 0; i < a.length; i++) {
//     sum = sum + a[i];
//   }

//   return sum / a.length;
//   //   return (
//   //     a.reduce(
//   //       (res, e) => res + e,

//   //       0
//   //     ) / a.length
//   //   );                    //author solution
// }

// console.log(myFunction([10, 100, 40]));
// console.log(myFunction([10, 100, 1000]));
// console.log(myFunction([-50, 0, 50, 200]));

//32. Write a function that takes an array of strings as argument. Return the longest string.

// function myFunction(arr) {
//   let maxIndx = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[maxIndx].length < arr[i].length) maxIndx = i;
//   }
//   return arr[maxIndx];

//   //   return arr.reduce((a, b) => (a.length <= b.length ? b : a)); //author solution
// }
// console.log(myFunction(["help", "me"]));
// console.log(myFunction(["I", "need", "candy"]));

//33. Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

// function myFunction(arr) {
//   return arr.every((a) => a === arr[0]);
//   //   return new Set(arr).size === 1; //author solution
// }

// console.log(myFunction([true, true, true, true]));
// console.log(myFunction(["test", "test", "test"]));
// console.log(myFunction([1, 1, 1, 2]));

// console.log(myFunction(["10", 10, 10, 10]));

//34. Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

// function myFunction(...arrays) {
//   return arrays.reduce((a, b) => a.concat(b), []);
//   //   return arrays.flat(); //author solution
// }

// console.log(myFunction([1, 2, 3], [4, 5, 6]));
// console.log(myFunction(["a", "b", "c"], [4, 5, 6]));
// console.log(myFunction([true, true], [1, 2], ["a", "b"]));

//35. Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

// function myFunction(arr) {
//   let elem1 = arr[0];
//   let elem2 = arr[1];

//   if (elem1.b > elem2.b) {
//     let temp = elem1;
//     elem1 = elem2;

//     elem2 = temp;
//   }

//   return [elem1, elem2];

//   //   const sort = (x, y) => x.b - y.b;     //author solution
//   //   return arr.sort(sort);
// }

// console.log(
//   myFunction([
//     { a: 1, b: 2 },
//     { a: 5, b: 4 },
//   ])
// );

// console.log(
//   myFunction([
//     { a: 2, b: 10 },
//     { a: 5, b: 4 },
//   ])
// );

// console.log(
//   myFunction([
//     { a: 1, b: 7 },
//     { a: 2, b: 1 },
//   ])
// );

//36. Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

// function myFunction(a, b) {
//   let arr = a.concat(b);
//   let uniqArr = arr.filter((a, indx) => arr.indexOf(a) === indx);

//   return uniqArr.sort((a, b) => a - b);

//   // return [...new Set([...a, ...b])].sort((x, y) => x - y); //author solution
// }

// console.log(1, myFunction([1, 2, 3], [3, 4, 5]));

// console.log(2, myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

//37. Write a function that takes an object with two properties as argument. It should return the value of the property with key country.

// function myFunction(obj) {
//   return obj.country;
// }

// console.log(1, myFunction({ continent: "Asia", country: "Japan" }));

// console.log(2, myFunction({ country: "Sweden", continent: "Europe" }));

//38. Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Hint: you might want to use the square brackets property accessor

// function myFunction(obj) {
//   return obj["prop-2"];
// }

// console.log(1, myFunction({ one: 1, "prop-2": 2 }));

// console.log(2, myFunction({ "prop-2": "two", prop: "test" }));

//39. Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string

// function myFunction(obj, prop) {
//   return obj[prop];
// }

// console.log(
//   1,
//   myFunction({ continent: "Asia", country: "Japan" }, "continent")
// );

// console.log(
//   2,
//   myFunction({ country: "Sweden", continent: "Europe" }, "country")
// );

//40. Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

// function myFunction(a, b) {
//   return a.hasOwnProperty(b);
//   //   return b in a; //author solution
// }

// console.log(1, myFunction({ a: 1, b: 2, c: 3 }, "b"));
// console.log(2, myFunction({ x: "a", y: "b", z: "c" }, "a"));
// console.log(3, myFunction({ x: "a", y: "b", z: undefined }, "z"));

//41. Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

// function myFunction(a, b) {
//   // return !!a[b];
//   return Boolean(a[b]); //author solution
// }

// console.log(1, myFunction({ a: 1, b: 2, c: 3 }, "b"));

// console.log(2, myFunction({ x: "a", y: null, z: "c" }, "y"));
// console.log(3, myFunction({ x: "a", b: "b", z: undefined }, "z"));

//42. Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.

// function myFunction(a) {
//   return { key: a };
// }

// console.log(1, myFunction("a"));

// console.log(2, myFunction("z"));
// console.log(3, myFunction("b"));

//43. Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

// function myFunction(a, b) {
//   return { [a]: b };
// }

// console.log(1, myFunction("a", "b"));

// console.log(2, myFunction("z", "x"));
// console.log(3, myFunction("b", "w"));

//44. Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

// function myFunction(a, b) {
//   // console.log(456, a, b);

//   return a.reduce((acc, elem, indx) => {
//     return { ...acc, [elem]: b[indx] };
//   }, {});
// }

// console.log(1, myFunction(["a", "b", "c"], [1, 2, 3]));
// console.log(2, myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
// console.log(3, myFunction([1, "b"], ["a", 2]));

//45. Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined

// function myFunction(obj) {
//   return obj?.a?.b;
// }
// console.log(1, myFunction({ a: 1 }));
// console.log(2, myFunction({ a: { b: { c: 3 } } }));
// console.log(3, myFunction({ b: { a: 1 } }));
// console.log(4, myFunction({ a: { b: 2 } }));

//46. Write a function that takes an object (a) as argument. Return an array with all object keys.

// function myFunction(a) {
//   return Object.keys(a);
// }

// console.log(1, myFunction({ a: 1, b: 2, c: 3 }));
// console.log(2, myFunction({ j: 9, i: 2, x: 3, z: 4 }));
// console.log(3, myFunction({ w: 15, x: 22, y: 13 }));

//47. Write a function that takes an object (a) as argument. Return the sum of all object values.

// function myFunction(a) {
//   return Object.values(a).reduce((sum, elem) => (sum = sum + elem), 0);
// }

// console.log(1, myFunction({ a: 1, b: 2, c: 3 }));
// console.log(2, myFunction({ j: 9, i: 2, x: 3, z: 4 }));
// console.log(3, myFunction({ w: 15, x: 22, y: 13 }));

//48.  Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'

// function myFunction(obj) {
//   // return (({ b, ...o }) => o)(obj);
//   const { b, ...rest } = obj; //author solution
//   return rest;
// }

// console.log(1, myFunction({ a: 1, b: 7, c: 3 }));
// console.log(2, myFunction({ b: 0, a: 7, d: 8 }));
// console.log(3, myFunction({ e: 6, f: 4, b: 5, a: 3 }));

//49. Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

// function myFunction(x, y) {
//   // y["d"] = y["b"];
//   // delete y["b"];
//   // return { ...x, ...y };
//   const { b, ...rest } = y; //author solution
//   return { ...x, ...rest, d: b };
// }

// console.log(1, myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
// console.log(2, myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

//50. Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

// function myFunction(a, b) {
//   // console.log(212, Object.entries(a));
//   return Object.entries(a).reduce((acc, [key, val]) => {
//     return { ...acc, [key]: val * b };
//   }, {});
// }

// console.log(1, myFunction({ a: 1, b: 2, c: 3 }, 3));
// console.log(2, myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10));
// console.log(3, myFunction({ w: 15, x: 22, y: 13 }, 6));

//51. Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.

// function myFunction(a, b) {
//   return a.getTime() == b.getTime();
// }

// console.log(
//   1,
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
// );
// console.log(
//   2,
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
// );
// console.log(
//   3,
//   myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
// );

//52. Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

// function myFunction(a, b) {
//   const dif = Math.abs(a - b);
//   return dif / 1000 / 60 / 60 / 24;
// }

// console.log(1, myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
// console.log(2, myFunction(new Date("2000-01-01"), new Date("2020-06-01")));

//53. Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.

// function myFunction(a, b) {
//   return (
//     a.getFullYear() === b.getFullYear() &&
//     a.getMonth() === b.getMonth() &&
//     a.getDate() === b.getDate()
//   );
// }

// console.log(1, myFunction(new Date("2000/01/01"), new Date("2000/01/01")));
// console.log(2, myFunction(new Date("2000/01/01"), new Date("2000/01/02")));
// console.log(1, myFunction(new Date("2001/01/01"), new Date("2000/01/01")));
// console.log(2, myFunction(new Date("2000/11/01"), new Date("2000/01/01")));

//54. Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.

// function myFunction(a, b) {
//   return Math.abs(a - b) / 1000 / 60 <= 60;
// }

// console.log(
//   1,
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
// );
// console.log(
//   2,
//   myFunction(new Date("2000/01/01 09:00:00"), new Date("2000/01/01 08:45:00"))
// );
// console.log(
//   1,
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:45:00"))
// );
// console.log(
//   2,
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:00:00"))
// );

//55. Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.

// function myFunction(a, b) {
//   return a < b;
// }

// console.log(
//   2,
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
// );
// console.log(
//   1,
//   myFunction(new Date("2000/01/01 08:45:00"), new Date("2000/01/01 08:00:00"))
// );
// console.log(
//   2,
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
// );

//56.Write a function that takes a Set and a value as arguments. Check if the value is present in the Set

// function myFunction(set, val) {
//   return set.has(val);
// }

// console.log(2, myFunction(new Set([1, 2, 3], 2)));
// console.log(1, myFunction(new Set([123]), 2));
// console.log(2, myFunction(new Set(["1", "2", "3"]), "2"));
// console.log(2, myFunction(new Set("123"), "2"));

//57. Write a function that takes a Set as argument. Convert the Set to an Array. Return the Array

// function myFunction(set) {
//   return [...set];
// }

// console.log(2, myFunction(new Set([1, 2, 3])));
// console.log(1, myFunction(new Set([123])));
// console.log(2, myFunction(new Set(["1", "2", "3"])));
// console.log(2, myFunction(new Set("123")));

//58. Write a function that takes two Sets as arguments. Create the union of the two sets. Return the result. Hint: try not to switch to Arrays, this would slow down your code

// function myFunction(a, b) {
//   const result = new Set(a);
//   // console.log(258, result);
//   b.forEach((el) => result.add(el));
//   return result;
// }

// console.log(2, myFunction(new Set("123"), new Set("234")));
// console.log(1, myFunction(new Set([1, 2, 3]), new Set([3, 4, 5])));
// console.log(
//   2,
//   myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
// );

//59. Write a function that takes three elements of any type as arguments. Create a Set from those elements. Return the result

// function myFunction(a, b, c) {
//   const result = new Set();
//   result.add(a);
//   result.add(b);
//   result.add(c);
//   return result;
// }

// console.log(2, myFunction(1, "b", 3));
// console.log(1, myFunction(NaN, null, false));
// console.log(2, myFunction("a", ["b"], { c: 3 }));

//60. Write a function that takes a Set and a value as argument. If existing in the Set, remove the value from the Set. Return the result

function myFunction(set, val) {
  set.delete(val);

  return set;
}

console.log(2, myFunction(new Set([1, 2, 3]), 1));
console.log(1, myFunction(new Set("12345"), "3"));
console.log(2, myFunction(new Set([1, 2, 3]), 4));
