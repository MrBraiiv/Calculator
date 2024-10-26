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

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
      break;

    case "-":
      return subtract(firstNum, secondNum);
      break;

    case "×":
      return multipy(firstNum, secondNum);
      break;

    case "÷":
      return divide(firstNum, secondNum);
      break;
  }
}

//-----

const screen = document.querySelector(".screen");

const buttons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const resetButton = document.querySelector(".resetButton");
const equalButton = document.querySelector(".equalButton");

buttons.forEach((button) => button.addEventListener("click", displayInScreen));

const arr = [];
let equalFired = false;

function displayInScreen(event) {
  switch (true) {
    case event.target.className.includes("numberButton"):
      if (equalFired && screen.textContent !== "") {
        screen.textContent = "";
        screen.style.color = "black";
        arr.splice(0, arr.length);
        firstNum = undefined;
        secondNum = undefined;
        operator = undefined;
        equalFired = false;
      }

      if (screen.textContent.length <= 12) {
        screen.textContent += event.target.textContent;
      }
      break;

    case event.target.className.includes("resetButton"):
      screen.textContent = "";
      screen.style.color = "black";
      arr.splice(0, arr.length);
      firstNum = undefined;
      secondNum = undefined;
      operator = undefined;
      equalFired = false;
      break;

    case event.target.className.includes("operatorButton"):
      arr.push(screen.textContent);
      arr.push(event.target.textContent);
      screen.textContent = "";
      break;

    case event.target.className.includes("equalButton"):
      arr.push(screen.textContent);
      for (let i = 1; i <= arr.length; i + 2) {
        firstNum ??= +arr.splice(0, 1);
        operator = arr.splice(0, 1).join("");
        secondNum = +arr.splice(0, 1);
        firstNum = operate(firstNum, operator, secondNum);
      }

      screen.textContent = +firstNum.toFixed(2);

      screen.style.color = "gold";

      equalFired = true;

      break;
  }
}

function cl(code) {
  console.log(code);
}
