import inquirer from "inquirer";

const answer = await inquirer.prompt([
    
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform actions",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },

]);
// console.log(answer);
if (answer.operator === "Addition") {
  console.log("Your answer is",answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log("Your answer is",answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log("Your answer is",answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log("Your answer is",answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please Enter Valid Operator");
}

