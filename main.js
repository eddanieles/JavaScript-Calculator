
var numbers = [
{
    id: "zero",
    value: 0
},
{
    id: "one",
    value: 1
},
{
    id: "two",
    value: 2
},
{
    id: "three",
    value: 3
}
];

var numberStorage = [];

var displayNumbers = [];
var displayJoin = displayNumbers.join('');
var inputtedNumber = parseFloat(displayJoin);
var display = document.querySelector("#display");

var clear = document.querySelector("#clear");
clear.addEventListener("click", function(event){
  var value = 0;
  display.value = value;
})

var zero = document.querySelector("#zero");
zero.addEventListener("click", function(event){
  var value0 = 0;
  putNumberInto(value0);
})


var one = document.querySelector("#one");
one.addEventListener("click", function(event){
  var value1 = 1;
  putNumberInto(value1);
})


var two = document.querySelector("#two");
two.addEventListener("click", function(event){
  var value2 = 2;
  putNumberInto(value2);
})

var three = document.querySelector("#three");
three.addEventListener("click", function(event){
  var value3 = 3;
  putNumberInto(value3);
})

function putNumberInto(value){
  displayNumbers.push(value);
  var displayJoin = displayNumbers.join('');
  var inputtedNumber = parseFloat(displayJoin);
  display.value = inputtedNumber;
}

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
