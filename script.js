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
        return alert('Nice Try');
    if ((sum / num) % 1 == 0) {
        return sum / num;
    } else {
        return Math.round(((sum / num) + Number.EPSILON) * 100) / 100;
    }
}

function operate(operator, sum, num) {
    if (operator === '+')
        return add(sum, num);
    else if (operator === '-')
        return subtract(sum, num);
    else if (operator === '*')
        return multiply(sum, num);
    else {
        if (num === 0) {
            alert('Nice Try');
            clearStorage();
            return 0;
        } 
        return divide(sum, num);
    }
}

let calcStorage = {
    sum: 0,
    num: 0,
    operator: '',
    displayNum: 0,
    isNum: false,
    equalLastPressed: false,
}
// Number Buttons Functionality 
let displayValue = [];
const container = document.querySelector('.container');
const display = document.querySelector('.display'); 
const numberButtons = container.querySelectorAll('.num-btn');
numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (calcStorage.equalLastPressed) {
            clearStorage();            
        }
        if (displayValue.length === 9){
            alert('no space left for displaying numbers')
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
clearButton.addEventListener('click', clearStorage)

function clearStorage() {
    calcStorage.sum = 0;
    calcStorage.num = 0;
    calcStorage.displayNum = 0;
    calcStorage.isNum = false;
    calcStorage.equalLastPressed = false;
    displayValue = [];
    operator = '';
    display.textContent = calcStorage.displayNum;
}
// Operator Button Functionality
const operatorButtons = container.querySelectorAll('.operator-btn');
operatorButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        displayValue = [];
        if (!calcStorage.isNum && !calcStorage.equalLastPressed) {
            calcStorage.sum = calcStorage.displayNum;
            calcStorage.isNum = true;
            calcStorage.operator = e.target.innerText;
            calcStorage.equalLastPressed = false;
        } else if (e.target.innerText === '=' && calcStorage.isNum) {
            calcStorage.num = calcStorage.displayNum;
            calcStorage.displayNum = operate(calcStorage.operator, calcStorage.sum, calcStorage.num);
            calcStorage.sum = calcStorage.displayNum;
            display.textContent = calcStorage.displayNum;    
            calcStorage.equalLastPressed = true;
        } else {
            if (calcStorage.equalLastPressed) {
                calcStorage.operator = e.target.innerText;
                calcStorage.equalLastPressed = false;
            } else {
                calcStorage.num = calcStorage.displayNum;
                calcStorage.displayNum = operate(calcStorage.operator, calcStorage.sum, calcStorage.num);
                calcStorage.operator = e.target.innerText;
                calcStorage.sum = calcStorage.displayNum;
                display.textContent = calcStorage.displayNum;
                calcStorage.equalLastPressed = false;
            }
        }
        console.log(calcStorage);
    })
})