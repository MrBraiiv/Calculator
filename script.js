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
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const resetButton = document.querySelector(".resetButton");
const equalButton = document.querySelector(".equalButton");

buttons.forEach((button) => button.addEventListener("click", displayInScreen));

function displayInScreen(event) {
  switch (true) {
    case event.target.className.includes("numberButton"):
      if (screen.textContent.length <= 12) {
        screen.textContent += event.target.textContent;
      }
      break;

    case event.target.className.includes("resetButton"):
      screen.textContent = "";
      break;

    // case event.target.className.includes("operatorButton"):
    /*
    - Passes the number to first Num, the operator to operator, and clear screen.
    */

    // case event.target.className.includes("equalButton"):

    /*
    - Passes the number to secondNum and 
    - Bulid a method (maybe using target) to the operation function so it chooses the operation from above depending on the choosen operator.
    */
  }
}
