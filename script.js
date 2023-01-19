function add(sum, num) {
    return sum + num;
}

function subtract(sum, num) {
    return sum - num;
}

function multiply(sum, num) {
    return sum * num;
}

function divide(sum, num) {
    if (num === 0)
        return alert('Nice Try')
    return sum / num;
}

function operate(operator, sum, num) {
    if (operator === '+')
        return add(sum, num);
    else if (operator === '-')
        return subtract(sum, num);
    else if (operator === '*')
        return multiply(sum, num);
    else 
        return divide(sum, num);
}

let calcStorage = {
    sum: 0,
    num: 0,
    operator: '',
    displayNum: 0,
}
// Number Buttons Functionality 
let displayValue = [];
const container = document.querySelector('.container');
const display = document.querySelector('.display'); 
const numberButtons = container.querySelectorAll('.num-btn');
numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (displayValue.length === 9){
            alert('no space left for displaying numbers')
        } else if (e.target.innerText === '0' && (!displayValue || !displayValue.length)) {
            alert('cannot input 0 as first number');
        } else {
            let num = parseInt(e.target.innerText);
            displayValue.push(num);
            currentDisplay(displayValue);
        }
    })
});
function currentDisplay(displayValue) {
    calcStorage.displayNum = parseInt(displayValue.join('')); 
    display.textContent = calcStorage.displayNum;
}
// Clear Button Functionality
const clearButton = container.querySelector('.clear-btn');
clearButton.addEventListener('click', function() {
    calcStorage.sum, calcStorage.num, calcStorage.displayNum = 0;
    displayValue = [];
    operator = '';
    display.textContent = calcStorage.displayNum;
})