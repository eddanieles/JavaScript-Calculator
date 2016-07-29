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

var operations = [
  {id: "divide", value: "/"},
  {id: "multiply", value: "*"},
  {id: "minus", value: "-"},
  {id: "plus", value: "+"}
]

var operationsStorage = [];

function putOperationsInto(value) {
  operationsStorage.push(value);
}

var operationButtons = document.querySelectorAll(".operationButton");

function operationsLister(operation) {
  return function(){
    numberStorage.push(display.value);
    displayNumbers = [];
    putOperationsInto(operation);
    console.log(numberStorage);
    console.log(operationsStorage);
  }
}


for (var k = 0; k < operations.length; k++) {
  operationButtons[k].addEventListener("click", operationsLister(operations[k].value));
}

//end of operationsStorage




/* addition works
var add = document.querySelector("#plus");
add.addEventListener("click", function(event){
  numberStorage.push(display.value);
  displayNumbers = [];
})
*/

var clear = document.querySelector("#clear");
clear.addEventListener("click", function(event){
  var value = 0;
  display.value = value;
  displayNumbers = [];
  numberStorage = [];
})

var equal = document.querySelector("#equal");
equal.addEventListener("click", function(event){
  numberStorage.push(display.value);
  displayNumbers = [];
  var value = 0;
  for (var j = 0; j < numberStorage.length; j++){
     value = value + parseFloat(numberStorage[j]);
  }
  display.value = value;
  numberStorage = [];
})
