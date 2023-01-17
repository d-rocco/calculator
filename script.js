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