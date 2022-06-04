var previousNumber = '';
var currentNumber = '';
var operator = undefined;

function press(numbtn) {
    if (numbtn === undefined) {
        $('#display').text(0);
        previousNumber = 0;
        currentNumber = '';
    }
    else {
        $('#display').text(() => {
            currentNumber += `${numbtn}`;
            $('#display').text(currentNumber);
        });
    }

    // $('#display').text(numbtn);
    // currentNumber = $('#display').text();
    // console.log(currentNumber);
}

function setOP(op) {
    previousNumber = $('#display').text();
    operator = op;
    currentNumber = '';
    console.log(previousNumber, operator);
}

function calculate() {
    if (operator === '+') {
        $('#display').text(parseFloat(previousNumber) + parseFloat(currentNumber));
    }
    else if (operator === '-') {
        $('#display').text(parseFloat(previousNumber) - parseFloat(currentNumber));
    }
    else if (operator === '*') {
        $('#display').text(parseFloat(previousNumber) * parseFloat(currentNumber));
    }
    else if (operator === '/') {
        $('#display').text(parseFloat(previousNumber) / parseFloat(currentNumber));
    }
    else {
        $('#display').text(previousNumber);
    }
}