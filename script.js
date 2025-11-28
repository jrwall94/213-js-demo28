"use strict";

/*
 * PROBLEM-SOLVING APPROACH:
 * 1. Break problems into small functions
 * 2. Name functions and variables clearly
 * 3. Test each function independently
 * 4. Handle errors before they break your code
 */

/* --- URL Slug Generator --- */
// Test strings
const slugifySimple = "Hello World ";
const slugifyHard = "Hello World! This is my blog post.";

// TODO: create DOM selector variables for output elements
const nonSlugged = document.getElementById("non-slugified-string");
const slugged = document.getElementById("slugified-string");

nonSlugged.textContent = slugifyHard;

// TODO: declare the createSlug function (takes text parameter, returns string)
function createSlug(text) {
  text = text.toLowerCase();
  text = text.trim();
  text = text.replaceAll(' ', '-');
  text = text.replaceAll('!' , '');
  text = text.replaceAll('.' , '');
  text = text.replaceAll(',' , '');
  text = text.replaceAll('?' , '');
  return text;
}
// TODO: invoke createSlug with test string and update DOM
slugged.textContent = createSlug(nonSlugged.textContent);

/* --- Simple Calculator --- */
// TODO: add helper function (takes two numbers, returns sum)
function myAdd(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
// TODO: subtract helper function
function mySubtract(num1, num2) {
  let difference = num1 - num2;
  return difference;
}
// TODO: multiply helper function
function myMultiply(num1, num2) {
  let product = num1 * num2;
  return product;
}
// TODO: divide helper function (remember: check for zero!)
function myDivide(num1, num2) {
  let quotient;
  if (num2 != 0) {
    quotient = num1 / num2;
  }
  return quotient;
}
// TODO: calculate function - accepts num1, num2, operator; calls appropriate helper
function calculate(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = myAdd(num1, num2);
  }
  else if (operator === "-") {
    result = mySubtract(num1, num2);
  }
  else if (operator === "*") {
    result = myMultiply(num1, num2);
  }
  else if (operator === "/") {
    result = myDivide(num1, num2);
  }
  return result;
}

function handleCalculatorSubmit(event) {
  event.preventDefault();

  let aValue = document.getElementById("a").value;
  let bValue = document.getElementById("b").value;
  const operatorElement = document.querySelector(
    'input[name="operator"]:checked'
  );

  // TODO: Coerce string values to numbers
  aValue = Number(aValue);
  bValue = Number(bValue);
  // TODO: Error handle if no operator is selected (guard clause)
  // TODO: Call calculate function with operands and operator
  let finalTally = calculate(aValue, bValue, operatorElement.value);
  // TODO: Update DOM with result
  const resultField = document.getElementById('calculator-result');
  resultField.innerHTML = finalTally;
  console.log(operatorElement.value);
}

// TODO: Add event listener to form element
document.addEventListener("submit", handleCalculatorSubmit);

/* --- Carousel Interface --- */
const carouselMessages = [
  "Welcome to the carousel!",
  "This is slide 2",
  "Here's slide 3",
  "Almost done - slide 4",
  "Final slide!",
];

let currentIndex = 0;

// TODO: updateCarousel function - displays current message in DOM
// TODO: moveForward function - increment index with wrap-around (hint: modulo)
// TODO: moveBackward function - decrement index with wrap-around
// TODO: Set up event listeners on both buttons
// TODO: Initialize carousel on page load

/* --- Bonus: Dynamic Calculator --- */
// TODO: isOperator function - checks if character is +, -, *, or /
// TODO: parseDynamicInput function - splits string, validates parts, returns object
// TODO: handleDynamicCalculator function - gets input, parses, calculates, updates DOM
// TODO: Add event listener to calculate button
