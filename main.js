
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
  {id: "zero", value: 0}
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

for (var i = 0; i <  10; i++) {
  numberButtons[i].addEventListener("click", numberListener(numbers[i].value));
}


var clear = document.querySelector("#clear");
clear.addEventListener("click", function(event){
  var value = 0;
  display.value = value;
  displayNumbers = [];
})

var add = document.querySelector("#plus");
add.addEventListener("click", function(event){
  numberStorage.push(display.value);
})

var equal = document.querySelector("#equal");
equal.addEventListener("click", function(event){

  var value = parseFloat(numberStorage[0]) + parseFloat(numberStorage[1]);
  display.value = value;
  console.log(value);
})
