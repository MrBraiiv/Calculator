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
  //---Needed functions:

  function pressedButtonIs(button) {
    return event.target.className.includes(button);
  }

  function resetOperation() {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
  }

  function clearDisplay() {
    screen.textContent = "";
  }

  function changeNumberColor(color) {
    screen.style.color = color;
  }

  //-----

  switch (true) {
    case pressedButtonIs("numberButton"):
      if (equalFired && screen.textContent !== "") {
        clearDisplay();
        changeNumberColor("black");
        arr.splice(0, arr.length);
        resetOperation();
        equalFired = false;
      }

      if (screen.textContent.length <= 12) {
        screen.textContent += event.target.textContent;
      }
      break;

    case pressedButtonIs("resetButton"):
      clearDisplay();
      changeNumberColor("black");
      arr.splice(0, arr.length);
      resetOperation();
      equalFired = false;
      break;

    case pressedButtonIs("operatorButton"):
      arr.push(screen.textContent);
      arr.push(event.target.textContent);
      clearDisplay();
      changeNumberColor("black");
      resetOperation();
      break;

    case pressedButtonIs("equalButton"):
      arr.push(screen.textContent);
      for (let i = 1; i <= arr.length; i + 2) {
        firstNum ??= +arr.splice(0, 1);
        operator = arr.splice(0, 1).join("");
        secondNum = +arr.splice(0, 1);
        firstNum = operate(firstNum, operator, secondNum);
      }

      screen.textContent = +firstNum.toFixed(2);

      changeNumberColor("gold");

      equalFired = true;

      break;
  }
}

function cl(code) {
  console.log(code);
}
