let currentOperand = "";
let previousOperand = "";
let operation = undefined;
let computation = "";

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
