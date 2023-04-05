//variables
let currentOperand = "";
let previousOperand = "";
let operation = undefined;
let computation = "";

//constants
const numberButtons = Array.from(document.querySelectorAll("[data-number]"));
const operationButtons = Array.from(
  document.querySelectorAll("[data-operation]")
);
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = Array.from(
  document.querySelectorAll("[data-all-clear]")
);
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

//assertion to verify constants
console.assert(
  numberButtons.length == 10,
  "numberButtons.length must equal to 10"
);
console.assert(
  operationButtons.length == 4,
  "operationButtons.length must equal to 4"
);
console.assert(equalsButton !== null, "equalsButton must not be null");
console.assert(
  allClearButton.length == 2,
  "allClearButton.length must equal to 2"
);
console.assert(
  previousOperandTextElement !== null,
  "previousOperandTextElement must not be null"
);
console.assert(
  currentOperandTextElement !== null,
  "currentOperandTextElement must not be null"
);

function clear() {
  /**
   * Clear the currentOperand,   previousOperand,  operation variable
   */

  currentOperand = "";
  previousOperand = "";
  operation = undefined;
}

function appendNumber(number) {
  /**
   *
   * @param {String} number Number to append to currentOperand
   */

  currentOperand = currentOperand.toString() + number.toString();
}

function chooseOperation(op) {
  /**
   *
   * @param {Sring} operation The operator to be used by the cacul
   * @returns
   */
  if (currentOperand === "" || previousOperand !== "") return;

  operation = op;
  previousOperand = currentOperand + op;
  currentOperand = "";
}

function compute() {
  switch (operation) {
    case "+":
      computation =
        parseInt(previousOperand, 10) + parseInt(currentOperand, 10);
      break;
    case "-":
      computation =
        parseInt(previousOperand, 10) - parseInt(currentOperand, 10);
      break;
    case "*":
      computation =
        parseInt(previousOperand, 10) * parseInt(currentOperand, 10);
      break;
    case "/":
      computation =
        parseInt(previousOperand, 10) / parseInt(currentOperand, 10);
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = undefined;
  previousOperand = "";
}

function updateDisplay() {
  currentOperandTextElement.innerText = currentOperand;
  previousOperandTextElement.innerText = previousOperand;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
    updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  compute();
  updateDisplay();
});

allClearButton.forEach((button) => {
  button.addEventListener("click", () => {
    clear();
    updateDisplay();
  });
});
