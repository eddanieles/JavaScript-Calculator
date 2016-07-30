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
/*    console.log(numberStorage); put numbers and operations into one storage
      console.log(operationsStorage); */
    console.log(storage);
  }
}


for (var k = 0; k < operations.length; k++) {
  operationButtons[k].addEventListener("click", operationsLister(operations[k].value));
}

//end of operationsStorage


operationsObject = {
  "+":function(num1, num2){return num1 + num2},
  "-":function(num1, num2){return num1 - num2},
  "*":function(num1, num2){return num1 * num2},
  "/":function(num1, num2){return num1 / num2},
  "^":function(num1, num2){return Math.pow(num1, num2)}
}

function placeholderFunction(array) {
  var num1 = parseFloat(array[i-1]);
  var num2 = parseFloat(array[i+1]);
  placeholder = operationsObject[array[i]](num1, num2);
  array[i-1] = "";
  array[i] ="";
  array[i+1] = placeholder;
  console.log(array);
}

function displaystorageFunction(array) {
  storage = array.filter(v => v != "");
  console.log(storage);
  return storage;
}

function exponents(array){
  for (i = 0; i < array.length; i++) {
    if (array[i] === "^") {
      placeholderFunction(array);
    }
  }
  displaystorageFunction(array);
}

function multiply_divide(array){
  for (i = 0; i < array.length; i++) {
    if (array[i] === "*" || array[i] === "/") {
      placeholderFunction(array);
    }
  }
  displaystorageFunction(array);
}

function addition_subtraction(array){
  for (i = 0; i < array.length; i++) {
    if (array[i] === "+" || array[i] === "-") {
      placeholderFunction(array);
    }
  }
  displaystorageFunction(array);
}

/* won't work because the array won't get smaller when the next else if performs
for (var i = 0; i < array.length; i++) {
  if (array[i] === "^"){
    placeholderFunction(array);
  }
  else if (array[i] === "*" || array[i] === "/") {
    placeholderFunction(array);
  }
  else if (array[i] === "+" || array[i] === "-") {
    placeholderFunction(array);
  }
}
*/


var equal = document.querySelector("#equal");
equal.addEventListener("click", function(event){
  numberStorage.push(display.value);
  storage.push(display.value);
  console.log(storage);

  exponents(storage);
  multiply_divide(storage);
  addition_subtraction(storage);


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
