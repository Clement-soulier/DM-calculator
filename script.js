let currentOperand = "";
let previousOperand = "";
let operation = undefined;
let computation = "";

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
