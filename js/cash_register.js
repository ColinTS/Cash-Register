var cashRegister = (function(){
var myCalc = calculatorModule();
var calculatorOperator;
var balance = 0;
var display = document.querySelector("#display");
display.innerHTML = '$';

var nmbrBox = document.querySelector("#nmbr-box");
var btnBox = document.querySelector("#btn-box");

//Number buttons
document.querySelector("#NumberOne").addEventListener('click', () => {
  display.innerHTML += 1;
});
document.querySelector("#NumberTwo").addEventListener('click', () => {
  display.innerHTML += 2;
});
document.querySelector("#NumberThree").addEventListener('click', () => {
  display.innerHTML += 3;
});
document.querySelector("#NumberFour").addEventListener('click', () => {
  display.innerHTML += 4;
});
document.querySelector("#NumberFive").addEventListener('click', () => {
  display.innerHTML += 5;
});
document.querySelector("#NumberSix").addEventListener('click', () => {
  display.innerHTML += 6;
});
document.querySelector("#NumberSeven").addEventListener('click', () => {
  display.innerHTML += 7;
});
document.querySelector("#NumberEight").addEventListener('click', () => {
  display.innerHTML += 8;
});
document.querySelector("#NumberNine").addEventListener('click', () => {
  display.innerHTML += 9;
});
document.querySelector("#NumberZero").addEventListener('click', () => {
  display.innerHTML += 0;
});
document.querySelector("#DoubleZero").addEventListener('click', () => {
  display.innerHTML += Number('0')

});
document.querySelector("#Decimal").addEventListener('click', () => {
  display.innerHTML += '.';
  if(display.innerHTML.indexOf('.' === true) ){
    document.querySelector("#Decimal").disabled = true;
  }
});

//Divide
var divideButton = document.createElement('button');
divideButton.innerHTML = '/';
divideButton.id = 'div';
divideButton.addEventListener('click', () => {
  if(display.innerHTML === ''){
    display.innerHTML = 'Ooops, not a number!';
} else {
    myCalc.load(Number(display.innerHTML.replace('$','')));
    display.innerHTML = '$';
    calculatorOperator = myCalc.divide;
  }
  if(display.innerHTML.indexOf('.' === false)){
    document.getElementById("Decimal").disabled = false;
  }
});
btnBox.appendChild(divideButton);

//Multiply
var multiplyButton = document.createElement('button');
multiplyButton.innerHTML = 'x';
multiplyButton.id = 'mltply';
multiplyButton.addEventListener('click', () => {
  if(display.innerHTML.indexOf('.' === false)){
    document.getElementById("Decimal").disabled = false;
  }
  myCalc.load(Number(display.innerHTML.replace('$','')));
  display.innerHTML = '$';
  calculatorOperator = myCalc.multiply;
});
btnBox.appendChild(multiplyButton);

//Subtract
var subtractButton = document.createElement('button');
subtractButton.innerHTML = '-';
subtractButton.id = 'subtrct';
subtractButton.addEventListener('click', () => {
  if(display.innerHTML === '$'){
    display.innerHTML += "-";
} else {
    myCalc.load(Number(display.innerHTML.replace('$','')));
    display.innerHTML = '$';
    calculatorOperator = myCalc.subtract;
  }
  if(display.innerHTML.indexOf('.' === false)){
    document.getElementById("Decimal").disabled = false;
  }
});
btnBox.appendChild(subtractButton);

//Add
var addButton = document.createElement('button');
addButton.innerHTML = '+';
addButton.id = 'add';
addButton.addEventListener('click', () => {
  if(display.innerHTML.indexOf('.' === false)){
    document.getElementById("Decimal").disabled = false;
  }
  myCalc.load(Number(display.innerHTML.replace('$','')));
  display.innerHTML = '$';
  calculatorOperator = myCalc.add;
});
btnBox.appendChild(addButton);

//Equal
var equalButton = document.createElement('button');
equalButton.innerHTML = '=';
equalButton.id = 'eql';
equalButton.addEventListener('click', () => {
  if(calculatorOperator === myCalc.divide && Number(display.innerHTML.replace('$','')) === 0){
    display.innerHTML = 'Cannot divide by 0';
} else {
    calculatorOperator(Number(display.innerHTML.replace('$','')));
    display.innerHTML = '$' + myCalc.getTotal();
  }
});
btnBox.appendChild(equalButton);

//Clear -- Clears the display
var clearButton = document.createElement('button');
clearButton.innerHTML = 'Clear';
clearButton.id = 'clr';
clearButton.addEventListener('click', () => {
  display.innerHTML = '$';
  if(display.innerHTML.indexOf('.' === false)){
    document.getElementById("Decimal").disabled = false;
  }
});
btnBox.appendChild(clearButton);

//Get Balance -- Displays the current balance
var getBalanceButton = document.createElement('button');
getBalanceButton.innerHTML = 'Get Balance';
getBalanceButton.id = 'blnce';
getBalanceButton.addEventListener('click', () =>{
  display.innerHTML = '$' + balance;
});
btnBox.appendChild(getBalanceButton);

//Deposit Cash - Add amount currently in DISPLAY to the total balance
//AND clear the display
var depositButton = document.createElement('button');
depositButton.innerHTML = 'Deposit';
depositButton.id = 'dpst';
depositButton.addEventListener('click', () => {
  if(display.innerHTML.indexOf('-') !== -1){
    display.innerHTML = "You cannot deposit a negative number!"
} else {
    balance += Number(display.innerHTML.replace('$',''));
    display.innerHTML = '';
  }
});
btnBox.appendChild(depositButton);

//Withdraw Cash - Will remove amount currently in DISPLAY from total balance
//AND clear the display
var withdrawButton = document.createElement('button');
withdrawButton.innerHTML = 'Withdraw';
withdrawButton.id = 'wthdrw';
withdrawButton.addEventListener('click', () => {
  if(Number(display.innerHTML) > balance){
    display.innerHTML = 'Ooops, not enough funds!';
    console.log("here")
} else if(display.innerHTML.indexOf('-') !== -1){
    display.innerHTML = "You cannot withdraw a negative number!"
} else {
    balance -= Number(display.innerHTML.replace('$',''));
    display.innerHTML = '$';
    console.log(balance);
  }
});
btnBox.appendChild(withdrawButton);
})();
