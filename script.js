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

const container = document.querySelector('.container');
const numberButtons = container.querySelectorAll('.num-btn');
let displayValue = [];
numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.innerText)
        if (displayValue.length === 9){
            alert('no space left for displaying numbers')
        } else if (e.target.innerText === '0' && (!displayValue || !displayValue.length)) {
            alert('cannot input 0 as first number');
        } else {
            let num = parseInt(e.target.innerText);
            displayValue.push(num);
            console.log(displayValue);
            currentDisplay(displayValue);
        }
    })
});

const display = document.querySelector('.display'); 
function currentDisplay(displayValue) {
    let displayNumber = parseInt(displayValue.join('')); 
    console.log(displayNumber);
    display.textContent = displayNumber;
}