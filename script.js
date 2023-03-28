//variables
let currentOperand = "";
let previousOperand = "";
let operation = undefined;
let computation = "";

//constants
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelectorAll("[data-equals]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previousOperandTextElement = document.querySelectorAll(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelectorAll(
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
console.assert(equalsButton.length == 1, "equalsButton.length must equal to 1");
console.assert(
  allClearButton.length == 2,
  "allClearButton.length must equal to 2"
);
console.assert(
  previousOperandTextElement.length == 1,
  "previousOperandTextElement.length must equal to 1"
);
console.assert(
  currentOperandTextElement.length == 1,
  "currentOperandTextElement.length must equal to 1"
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
}
