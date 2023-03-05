let currentNumber = '';
let operator = '';
let result = 0;

function addNumber(number) {
    currentNumber += number;
    document.getElementById('display').value = currentNumber;

}

function addOperator(op) {
    operator = op;
    result = parseFloat(currentNumber);
    currentNumber = '';	
}



function calculate() {
    if(operator === '+') {
        result += parseFloat(currentNumber);
    } else if(operator === '-') {
        result -= parseFloat(currentNumber);
    } else if(operator === '*') {
        result *= parseFloat(currentNumber);
    } else if(operator === '/') {
        result /= parseFloat(currentNumber);
    } else if(operator === '%') {
        result %= parseFloat(currentNumber);
    }

    document.getElementById('display').value = result;
    currentNumber = '';
    operator = '';

}

function clearDisplay() {
    document.getElementById('display').value = '';
}






