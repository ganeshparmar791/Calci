var input = document.getElementById("display-input");

var btn = document.querySelectorAll("button").length;
var btnclk = "";

for (var i = 0; i < btn; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function (e) {
      var btnclk = e.target.textContent;
      calculation(btnclk);
    });
}
document.addEventListener("keypress", function (event) {
  calculation(event.key);
});

function calculation(key) {
  switch (key) {
    case "1":
    case "0":
    case "00":
    case "9":
    case "8":
    case "2":
    case "3":
    case "4":
    case ".":
    case "5":
    case "7":
    case "6":
      input.value += key;
      break;
  }
  switch (key) {
    case "%":
    case "*":
    case "-":
    case "/":
    case "+":
      handleOperator(key);
      break;
  }
  switch (key) {
    case "C":
      input.value = "";
  }
  switch (key) {
    case "=":
      solve();
  }
  // switch(key){
  //     case "Clear":
  //     clearLastCharacter();
  //     break;}
}

//   document.querySelectorAll("button")[i].addEventListener("click",function(e){
//     var bckspc = document.getElementById=("backspace");
//     var bckclk = e.target.textContent;
//     if(bckclk===bckspc.textContent) {
//     clearLastCharacter();
// }});

// function clearLastCharacter() {
//     var currentValue = input.value;
//     input.value = currentValue.slice(0, -1);
//   }

function solve() {
  var expression = input.value;
  var validExp = /^[-+*/%.0-9]+$/;
  if (!validExp.test(expression)) {
    input.value = "Invalid Input";
    return;
  } else {
    var result = eval(expression);

    input.value = result;
  }
}

function handleOperator(operator) {
  var currentValue = input.value;
  var lastChar = currentValue.slice(-1); // Get the last character of the input value

  // Prevent adding multiple operators consecutively
  if (isOperator(lastChar)) {
    // Replace the last operator with the new one
    input.value = currentValue.slice(0, -1) + operator;
  } else {
    input.value += operator;
  }
}

function isOperator(char) {
  var operators = ["+", "-", "*", "/", "%"];
  return operators.includes(char);
}
