var cashRegister = (function(){
var myCalc = calculatorModule();
var calculatorOperator;
var balance = 0;
var display = document.getElementById("display");

var btnBox = document.getElementById("btn-box");

//Display -- Displays all results
document.getElementById("NumberOne").addEventListener('click', () => {
  display.innerHTML += 1;
});
document.getElementById("NumberTwo").addEventListener('click', () => {
  display.innerHTML += 2;
});
document.getElementById("NumberThree").addEventListener('click', () => {
  display.innerHTML += 3;
});
document.getElementById("NumberFour").addEventListener('click', () => {
  display.innerHTML += 4;
});
document.getElementById("NumberFive").addEventListener('click', () => {
  display.innerHTML += 5;
});
document.getElementById("NumberSix").addEventListener('click', () => {
  display.innerHTML += 6;
});
document.getElementById("NumberSeven").addEventListener('click', () => {
  display.innerHTML += 7;
});
document.getElementById("NumberEight").addEventListener('click', () => {
  display.innerHTML += 8;
});
document.getElementById("NumberNine").addEventListener('click', () => {
  display.innerHTML += 9;
});
document.getElementById("NumberZero").addEventListener('click', () => {
  display.innerHTML += 0;
});
document.getElementById("DoubleZero").addEventListener('click', () => {
  display.innerHTML += Number('0')
  //MISSING: Double zeros not working
});
document.getElementById("Decimal").addEventListener('click', () => {
  display.innerHTML += '.';
  if(display.innerHTML.indexOf('.' === true) ){
    document.getElementById("Decimal").disabled = true;
  }
});

//Divide
var divideButton = document.createElement('button');
divideButton.innerHTML = '/';
divideButton.id = 'div';
divideButton.addEventListener('click', () => {
  if(display.innerHTML === ''){
    display.innerHTML = 'Ooops, not a number!';
    console.log("NAN");
}else{
    myCalc.load(Number(display.innerHTML));
    display.innerHTML = '';
    calculatorOperator = myCalc.divide;
}
});
btnBox.appendChild(divideButton);

//Multiply
var multiplyButton = document.createElement('button');
multiplyButton.innerHTML = 'x';
multiplyButton.id = 'mltply';
multiplyButton.addEventListener('click', () => {
  myCalc.load(Number(display.innerHTML));
  display.innerHTML = '';
  calculatorOperator = myCalc.multiply;
});
btnBox.appendChild(multiplyButton);

//Subtract
var subtractButton = document.createElement('button');
subtractButton.innerHTML = '-';
subtractButton.id = 'subtrct';
subtractButton.addEventListener('click', () => {
  myCalc.load(Number(display.innerHTML));
  display.innerHTML = '';
  calculatorOperator = myCalc.subtract;
});
btnBox.appendChild(subtractButton);

//Add
var addButton = document.createElement('button');
addButton.innerHTML = '+';
addButton.id = 'add';
addButton.addEventListener('click', () => {
  myCalc.load(Number(display.innerHTML));
  display.innerHTML = '';
  calculatorOperator = myCalc.add;
  console.log(Number(display.innerHTML));
});
btnBox.appendChild(addButton);

//Equal
var equalButton = document.createElement('button');
equalButton.innerHTML = '=';
equalButton.id = 'eql';
equalButton.addEventListener('click', () => {
  calculatorOperator(Number(display.innerHTML));
  display.innerHTML = myCalc.getTotal();
});
btnBox.appendChild(equalButton);

//Clear -- Clears the display
var clearButton = document.createElement('button');
clearButton.innerHTML = 'Clear';
clearButton.id = 'clr';
clearButton.addEventListener('click', () => {
  display.innerHTML = '';
  if(display.innerHTML.indexOf('.' === false)){
    document.getElementById("Decimal").disabled = false;
  }
});
btnBox.appendChild(clearButton);

//Get Balance -- Displays the current balance
var getBalanceButton = document.createElement('button');
getBalanceButton.innerHTML = 'Get Balance';
getBalanceButton.id = 'dpst';
getBalanceButton.addEventListener('click', () =>{
  display.innerHTML = balance;
});
btnBox.appendChild(getBalanceButton);

//Deposit Cash - Add amount currently in DISPLAY to the total balance
//AND clear the display
var depositButton = document.createElement('button');
depositButton.innerHTML = 'Deposit';
depositButton.id = 'dpst';
depositButton.addEventListener('click', () => {
  balance += Number(display.innerHTML);
  display.innerHTML = '';
  console.log(balance);
});
btnBox.appendChild(depositButton);

//Withdraw Cash - Will remove amount currently in DISPLAY from total balance
//AND clear the display
var withdrawButton = document.createElement('button');
withdrawButton.innerHTML = 'Withdraw';
withdrawButton.id = 'wthdrw';
withdrawButton.addEventListener('click', () => {
console.log(display.innerHTML, balance);
  if(Number(display.innerHTML) > balance){
    display.innerHTML = 'Ooops, not enough funds!';
    console.log("here")
  }else{
    balance -= Number(display.innerHTML);
    display.innerHTML = '';
    console.log(balance);
  }
});
btnBox.appendChild(withdrawButton);








})();
