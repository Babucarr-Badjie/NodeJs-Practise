// importing multiple functions using commonJS module
// const {
//   generateRandomNumber,
//   celsiusToFahrenheit,
//   fahrenheitToCelsius,
// } = require("./utils");

// import using ES module
import getPostsLength, { getPosts } from "./postController.js";

// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(0)}`);
// console.log(`Fahrenheit to Celsius: ${fahrenheitToCelsius(32)}`);

console.log(getPosts());

console.log(`Posts Length is: ${getPostsLength()}`);
