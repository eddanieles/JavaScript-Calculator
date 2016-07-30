var numbers = [
  {id: "seven", value: 7},
  {id: "eight", value: 8},
  {id: "nine", value: 9},
  {id: "four", value: 4},
  {id: "five", value: 5},
  {id: "six", value: 6},
  {id: "one", value: 1},
  {id: "two", value: 2},
  {id: "three", value: 3},
  {id: "zero", value: 0},
  {id: ".", value: "."}
];

var numberStorage = [];

var displayNumbers = [];
var displayJoin = displayNumbers.join('');
var inputtedNumber = parseFloat(displayJoin);
var display = document.querySelector("#display");


var numberButtons = document.querySelectorAll(".numberButton");

function putNumberInto(value){
  displayNumbers.push(value);
  var displayJoin = displayNumbers.join('');
  var inputtedNumber = parseFloat(displayJoin);
  display.value = inputtedNumber;
}

function numberListener(number) {
    return function(){
      putNumberInto(number);
    }
}

for (var i = 0; i <  numbers.length; i++) {
  numberButtons[i].addEventListener("click", numberListener(numbers[i].value));
}

//end of numberStorage
var storage = [];

var operations = [
  {id: "divide", value: "/"},
  {id: "multiply", value: "*"},
  {id: "minus", value: "-"},
  {id: "plus", value: "+"}
]

var operationsStorage = [];

function putOperationsInto(value) {
  operationsStorage.push(value);
  storage.push(value);
}

var operationButtons = document.querySelectorAll(".operationButton");

function operationsLister(operation) {
  return function(){
    numberStorage.push(display.value);
    storage.push(display.value);
    displayNumbers = [];
    putOperationsInto(operation);
    console.log(numberStorage);
    console.log(operationsStorage);
    console.log(storage);
  }
}


for (var k = 0; k < operations.length; k++) {
  operationButtons[k].addEventListener("click", operationsLister(operations[k].value));
}

//end of operationsStorage

//start of calculation
operationsObject = {
  "+":function(num1, num2){return num1 + num2},
  "-":function(num1, num2){return num1 - num2},
  "*":function(num1, num2){return num1 * num2},
  "/":function(num1, num2){return num1 / num2}
}

var result;

var equal = document.querySelector("#equal");
equal.addEventListener("click", function(event){
  numberStorage.push(display.value);
  storage.push(display.value);
  console.log(numberStorage);
  console.log(storage);

/*following without order of operations
  while (numberStorage.length > 1) {
    var num1 = parseFloat(numberStorage[0]);
    var num2 = parseFloat(numberStorage[1]);

    // console.log(num1, operationsStorage[0], num2);

    result = operationsObject[operationsStorage[0]](num1, num2);
    operationsStorage.shift();
    numberStorage.shift();
    numberStorage[0] = result;

  }
*/

    for (i = 0; i < storage.length; i++) {
      if (storage[i] === "*" || storage[i] === "/") {
        var num1 = parseFloat(storage[i-1]);
        var num2 = parseFloat(storage[i+1]);
        placeholder = operationsObject[storage[i]](num1, num2);
        storage[i-1] = "";
        storage[i] ="";
        storage[i+1] = placeholder;
        //storage.splice(i, 2);
        console.log(storage);
      }
    }

    storage = storage.filter(v => v != "");
    console.log(storage);


    for (j = 0; j < storage.length; j++) {
      if (storage[j] === "+" || storage[j] === "-") {
        var num1 = parseFloat(storage[j-1]);
        var num2 = parseFloat(storage[j+1]);
        placeholder2 = operationsObject[storage[j]](num1, num2);
        storage[j-1] = "";
        storage[j] ="";
        storage[j+1] = placeholder2;
        console.log(storage);
      }
    }

    storage = storage.filter(v => v != "");
    console.log(storage);

  result = storage[0];

  console.log(result);
  displayNumbers = [];
  display.value = result;
  numberStorage = [];
  operationsStorage = [];
  storage = [];
})

//end of calculation

var clear = document.querySelector("#clear");
clear.addEventListener("click", function(event){
  var value = 0;
  display.value = value;
  displayNumbers = [];
  numberStorage = [];
  storage = [];
})
