function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multipy(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

//-----

let firstNum = 0;
let operator = "";
let secondNum = 0;

// function operate(operator, firstNum, secondNum) {
//   return; //One of the operators' functions.
// }

//-----

const screen = document.querySelector(".screen");

const buttons = document.querySelectorAll("button");
const inputButtons = document.querySelectorAll(".inputButton");
const resetButton = document.querySelector(".resetButton");
const equalButton = document.querySelector(".equalButton");

buttons.forEach((button) => button.addEventListener("click", displayInScreen));

function displayInScreen(event) {
  switch (true) {
    case event.target.className.includes("inputButton"):
      screen.textContent += event.target.textContent;
      break;

    case event.target.className.includes("resetButton"):
      screen.textContent = "";
      break;

    // case event.target.className.includes("equalButton"):
  }
}
