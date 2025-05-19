function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, o) {
    switch (o) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
        case '*':
            multiply(a, b);
        case '/':
            divide(a, b);
    }
}

const myHTML = document.documentElement;
myHTML.setAttribute('style', 'height: 100%; margin: 0px;');

const body = document.querySelector('body');
body.setAttribute('style', 'display: flex; justify-content: center; align-items: center; margin: 0px; height: 100%;');

const calculator = document.createElement('div');
calculator.id = 'calculator';
calculator.setAttribute('style', 'width: 400px; height: 600px; display: flex; justify-content: space-between; flex-direction: column;');
body.appendChild(calculator);

const display = document.createElement('div');
display.textContent = "Display";
display.id = 'display';
display.setAttribute('style', 'display: flex; flex: 1');
calculator.appendChild(display);

const lower = document.createElement('div');
lower.id = 'lower'
lower.setAttribute('style', 'display: flex; justify-content: space-between; flex: 9');
calculator.appendChild(lower);

const digits = document.createElement('div');
digits.id = 'digits';
digits.setAttribute('style', 'display: flex; flex-wrap: wrap;');
lower.appendChild(digits);

const operators = document.createElement('div');
operators.id = 'operators';
operators.setAttribute('style', 'display: flex; flex-direction: column; justify-content: space-between; align-items: center;');
lower.appendChild(operators);




const one = document.createElement('button');
one.classList.add('button');
one.textContent = '1';
one.setAttribute('style', 'text-align: center;');
digits.appendChild(one);

const two = document.createElement('button');
two.classList.add('button');
two.textContent = '2';
two.setAttribute('style', 'text-align: center;');
digits.appendChild(two);

const three = document.createElement('button');
three.classList.add('button');
three.textContent = '3';
three.setAttribute('style', 'text-align: center;');
digits.appendChild(three);

const four = document.createElement('button');
four.classList.add('button');
four.textContent = '4';
four.setAttribute('style', 'text-align: center;');
digits.appendChild(four);

const five = document.createElement('button');
five.classList.add('button');
five.textContent = '5';
five.setAttribute('style', 'text-align: center;');
digits.appendChild(five);

const six = document.createElement('button');
six.classList.add('button');
six.textContent = '6';
six.setAttribute('style', 'text-align: center;');
digits.appendChild(six);

const seven = document.createElement('button');
seven.classList.add('button');
seven.textContent = '7';
seven.setAttribute('style', 'text-align: center;');
digits.appendChild(seven);

const eight = document.createElement('button');
eight.classList.add('button');
eight.textContent = '8';
eight.setAttribute('style', 'text-align: center;');
digits.appendChild(eight);

const nine = document.createElement('button');
nine.classList.add('button');
nine.textContent = '9';
nine.setAttribute('style', 'text-align: center;');
digits.appendChild(nine);

const zero = document.createElement('button');
zero.classList.add('button');
zero.textContent = '0';
zero.setAttribute('style', 'text-align: center;');
digits.appendChild(zero);




const plus = document.createElement('button');
plus.textContent = '+';
plus.classList.add('oper');
plus.setAttribute('style', 'text-align: center;');
operators.appendChild(plus);

const minus = document.createElement('button');
minus.textContent = '-';
minus.classList.add('oper');
minus.setAttribute('style', 'text-align: center;');
operators.appendChild(minus);

const times = document.createElement('button');
times.textContent = '✕';
times.classList.add('oper');
times.setAttribute('style', 'text-align: center;');
operators.appendChild(times);

const dvde = document.createElement('button');
dvde.textContent = '/';
dvde.classList.add('oper');
dvde.setAttribute('style', 'text-align: center;');
operators.appendChild(dvde);

const equals = document.createElement('button');
equals.textContent = '=';
equals.classList.add('oper');
equals.setAttribute('style', 'text-align: center;');
operators.appendChild(equals);





let numA;
let numB;
let oper;
