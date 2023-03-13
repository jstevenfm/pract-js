const h1 = document.querySelector('h1');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const btnCalculate = document.querySelector('#btnCalculate');
var result = document.querySelector('#result');

btnCalculate.addEventListener('click', calculate);

function calculate () {
    var resultSum = Number(number1.value) + Number(number2.value);
    result.textContent = `El resultado es: ${resultSum}`;
}
