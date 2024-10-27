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
const decimalButton = document.querySelector(".decimalButton");
const deleteButton = document.querySelector(".deleteButton");

const keys = {
  "1": document.getElementById("1"),
  "2": document.getElementById("2"),
  "3": document.getElementById("3"),
  "4": document.getElementById("4"),
  "5": document.getElementById("5"),
  "6": document.getElementById("6"),
  "7": document.getElementById("7"),
  "8": document.getElementById("8"),
  "9": document.getElementById("9"),
  "0": document.getElementById("0"),
  "+": document.getElementById("+"),
  "-": document.getElementById("-"),
  "*": document.getElementById("*"),
  "/": document.getElementById("/"),
  ".": document.getElementById("."),
  "Delete": document.getElementById("Delete"),
  "Backspace": document.getElementById("Backspace"),
  "Enter": document.getElementById("Enter"),
};

document.addEventListener("keydown", (event) => {
  const button = keys[event.key];
  if (button) button.click();
});
buttons.forEach((button) => button.addEventListener("click", displayInScreen));

const arr = [];
let equalFired = false;
let operaotrFired = false;

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

  function NumberIsDividedByZero() {
    return operator === "÷" && secondNum === 0;
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

      if (operaotrFired) {
        clearDisplay();
        operaotrFired = false;
      }

      if (screen.textContent.length <= 12) {
        screen.textContent += event.target.textContent;
      }
      break;

    case pressedButtonIs("decimalButton"):
      if (
        screen.textContent !== "" &&
        !screen.textContent.includes(".") &&
        !operaotrFired &&
        !equalFired
      ) {
        screen.textContent += event.target.textContent;
      }
      break;

    case pressedButtonIs("deleteButton"):
      screen.textContent = `${screen.textContent.slice(0, -1)}`;
      changeNumberColor("black");
      break;

    case pressedButtonIs("resetButton"):
      clearDisplay();
      changeNumberColor("black");
      arr.splice(0, arr.length);
      resetOperation();
      equalFired = false;
      operaotrFired = false;
      break;

    case pressedButtonIs("operatorButton"):
      if (!operaotrFired) {
        arr.push(screen.textContent);
        arr.push(event.target.textContent);
        changeNumberColor("black");
        resetOperation();
        operaotrFired = true;
        equalFired = false;
      }
      break;

    case pressedButtonIs("equalButton"):
      arr.push(screen.textContent);
      for (let i = 1; i <= arr.length; i + 2) {
        firstNum ??= +arr.splice(0, 1);
        operator = arr.splice(0, 1).join("");
        secondNum = +arr.splice(0, 1);
        if (NumberIsDividedByZero()) {
          firstNum = "Math Error!";
        } else {
          firstNum = operate(firstNum, operator, secondNum);
        }
      }

      if (firstNum != undefined) {
        if (isNaN(+firstNum) || +firstNum >= 999999999999)
          screen.textContent = "Math Error!";
        else screen.textContent = +firstNum.toFixed(2);

        changeNumberColor("gold");
        equalFired = true;
      }
      break;
  }
}
