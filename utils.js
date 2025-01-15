// generate a number between 1 and 100 function;
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// celsius to fahrenheit conversion function
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// fahrenheit to celsius conversion function
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// exporting  using commonJS export module
module.exports = {
  generateRandomNumber,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
};
