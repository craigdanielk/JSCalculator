let pendingResult = 0;
let operationOptions = ['divide', 'multiply', 'subtract', 'add'];
let functioningOperation = "";
let clicks = "0";



function updateDisplay(input) {
  let display = document.getElementById("display");
  let secondaryDisplay = document.getElementById("secondaryDisplay");

//  this code is still a  work in progress in an attemot to pass the last test.
//   if (input === "divide" || input === "multiply" || input === "add") {
//     addEventListener("click", function() {
//       return clicks + 1;
// // console.log(clicks)
// })
// }



  if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
    if (input === "decimal") {
      display.innerHTML = "0.";
    } else if (input === "negative-value") {
      if (display.innerHTML.indexOf("-1") === -1) {
        display.innerHTML = "-" + display.innerHTML
      } else if (display.innerHTML.indexOf("-1" > -1)) {
        display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
      }
    } else {
      display.innerHTML = input;
    }
   } else if (operationOptions.indexOf(input) >= 0) {
     // console.log("Dealing with a operation");

    if (pendingResult === display.innerHTML) {
      //Operand button pressed twice exeception
      functioningOperation = input;
    } else if (functioningOperation === "") {
      //Dealing without an operand
      functioningOperation = input;
      pendingResult = display.innerHTML;
      secondaryDisplay.innerHTML = pendingResult;
      display.innerHTML = 0;
    } else {
      //Dealing with a set operand
      // console.log(display.innerHTML, "Dealing with set operand");
      pendingResult = calculate(pendingResult, display.innerHTML, functioningOperation);
      secondaryDisplay.innerHTML = pendingResult;
      display.innerHTML = 0;
      functioningOperation = input;
    }
  } else if (input === "equals") {
    display.innerHTML = calculate(pendingResult, display.innerHTML, functioningOperation);
    pendingResult = 0;
    functioningOperation = "";
    secondaryDisplay.innerHTML = pendingResult;
  } else if (input === "decimal") {
   // console.log('decimal clicked');
    if (display.innerHTML.indexOf(".") === -1) {
      display.innerHTML += ".";
    }
   // console.log("decimal skipped because decimal already in number.");
  } else if (input === "negative-value") {
   // console.log("negative-value selected");
    if (display.innerHTML.indexOf("-1") === -1) {
      display.innerHTML = "-" + display.innerHTML
    } else if (display.innerHTML.indexOf("-1" > -1)) {
      display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
    }
  } else {
    display.innerHTML += input;
  }



  // 5 - 2 = / 2 =
 // console.log(pendingResult, "<= pendingResult", display.innerHTML, " <= display.innerHTML", functioningOperation, " <= functioningOperation");
}



function clearDisplay() {
  let display = document.getElementById("display");
  let secondaryDisplay = document.getElementById("secondaryDisplay");
  pendingResult = 0;
  display.innerHTML = 0;
  secondaryDisplay.innerHTML = pendingResult;
}

function calculate(firstNumber, secondNumber, operation) {
  let result;
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  switch(operation) {
    case "add":
     // console.log("calculated")
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      // console.log("subtract calculated")
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      // console.log("multiply calculated")
      result = firstNumber * secondNumber;
      break;
    case "divide":
     // console.log("divide calculated")
      result = firstNumber / secondNumber;
      break;
    default:
    //  // // console.log("Calculate switch statement missed something");
  }
  return result.toString();
}
