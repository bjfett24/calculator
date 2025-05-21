let numA = 0;
let numB = 0;
let oper;
let equalsClicked = false;

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (+b === 0) {
        return undefined
    } else {
        return a / b;
    }
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
calculator.setAttribute('style', 'background-color:rgb(141, 141, 141); gap: 20px; padding: 40px; border: 3px solid black; width: 400px; height: auto; display: flex; justify-content: space-between; flex-direction: column;');
body.appendChild(calculator);

const display = document.createElement('div');
display.textContent = ' ';
display.id = 'display';
display.setAttribute('style', 'font-family: Courier New; font-weight: bold; font-size: 24px; padding: 20px; padding-right: 50px; border: 3px solid black; border-radius: 15px; background-color:rgb(77, 101, 74); color: white; display: flex; justify-content: right; align-items: center; flex: 1');
calculator.appendChild(display);

const lower = document.createElement('div');
lower.id = 'lower'
lower.setAttribute('style', 'display: flex; justify-content: space-between; flex: 9');
calculator.appendChild(lower);




const digits = document.createElement('div');
digits.id = 'digits';
digits.setAttribute('style', 'gap: 45px; display: flex; justify-content: flex-end; flex-direction: column; flex-wrap: wrap;');
lower.appendChild(digits);

const rowOne = document.createElement('div');
rowOne.classList.add('row');
rowOne.setAttribute('style', 'gap: 10px; display: flex; justify-content: space-between;')
digits.appendChild(rowOne);

const rowTwo = document.createElement('div');
rowTwo.classList.add('row');
rowTwo.setAttribute('style', 'gap: 10px; display: flex; justify-content: space-between;')
digits.appendChild(rowTwo);

const rowThree = document.createElement('div');
rowThree.classList.add('row');
rowThree.setAttribute('style', 'gap: 10px; display: flex; justify-content: space-between;')
digits.appendChild(rowThree);

const rowFour = document.createElement('div');
rowFour.classList.add('row');
rowFour.setAttribute('style', 'display: flex; justify-content: center;')
digits.appendChild(rowFour);



const operators = document.createElement('div');
operators.id = 'operators';
operators.setAttribute('style', 'padding-top: 120px; display: flex; flex-direction: column; justify-content: space-between; align-items: center;');
lower.appendChild(operators);




const one = document.createElement('button');
one.classList.add('button');
one.textContent = '1';
rowOne.appendChild(one);

const two = document.createElement('button');
two.classList.add('button');
two.textContent = '2';
rowOne.appendChild(two);

const three = document.createElement('button');
three.classList.add('button');
three.textContent = '3';
rowOne.appendChild(three);

const four = document.createElement('button');
four.classList.add('button');
four.textContent = '4';
rowTwo.appendChild(four);

const five = document.createElement('button');
five.classList.add('button');
five.textContent = '5';
rowTwo.appendChild(five);

const six = document.createElement('button');
six.classList.add('button');
six.textContent = '6';
rowTwo.appendChild(six);

const seven = document.createElement('button');
seven.classList.add('button');
seven.textContent = '7';
rowThree.appendChild(seven);

const eight = document.createElement('button');
eight.classList.add('button');
eight.textContent = '8';
rowThree.appendChild(eight);

const nine = document.createElement('button');
nine.classList.add('button');
nine.textContent = '9';
rowThree.appendChild(nine);

const zero = document.createElement('button');
zero.classList.add('button');
zero.textContent = '0';
rowFour.appendChild(zero);

const allDigits = document.querySelectorAll('.button');
ops = '+-✕/'
for (let digit of allDigits) {
    digit.setAttribute('style', 'background-color:rgb(91, 87, 216); color: white; border: 2px solid black; border-radius: 15px; font-size: 36px; width: 90px; height: 60px; text-align: center;');
    const number = digit.textContent
    digit.addEventListener('click', () => {
        if (ops.includes(display.textContent.split('').at(-2))) {
            popNumB(number);
        } else if (display.textContent.split('').filter(char => ops.includes(char)).length > 0) {
            popNumB(number);
        } else if (equalsClicked === true) {
            display.textContent = ' '
            numA = 0;
            numB = 0;
            oper = undefined;
            popNumA(number);
        } else {
            popNumA(number);
        }
    })
}





const clear = document.createElement('button');
clear.textContent = 'AC';
clear.classList.add('oper');
operators.appendChild(clear);

const plus = document.createElement('button');
plus.textContent = '+';
plus.classList.add('oper');
operators.appendChild(plus);

const minus = document.createElement('button');
minus.textContent = '-';
minus.classList.add('oper');
operators.appendChild(minus);

const times = document.createElement('button');
times.textContent = '✕';
times.classList.add('oper');
operators.appendChild(times);

const dvde = document.createElement('button');
dvde.textContent = '/';
dvde.classList.add('oper');
operators.appendChild(dvde);

const equals = document.createElement('button');
equals.textContent = '=';
equals.classList.add('oper');
operators.appendChild(equals);

const operButtons = document.querySelectorAll('.oper');
for (let b of operButtons) {
    b.setAttribute('style', 'background-color:rgb(174, 99, 78); color: black; border: 2px solid black; border-radius: 15px; font-size: 36px; width: 90px; height: 60px; text-align: center;');
    const symbol = b.textContent;
    if (b.textContent != '=' && b.textContent != 'AC') {
        b.addEventListener('click', () => {
            if (display.textContent.split('').filter(char => ops.includes(char)).length > 0) {
                multSolution(numA, numB, oper);
            } else {
                popOp(symbol);
            }
        });
            

    }
}
equals.style.backgroundColor = 'rgb(214, 190, 33)';
equals.addEventListener('click', () => {
    equalsClicked = true;
    if (solution(numA, numB, oper) === undefined) {
        display.textContent = 'No dividing by 0!';
    } else {
        display.textContent = solution(numA, numB, oper);
    }
})

clear.style.backgroundColor = 'rgb(84, 179, 77)';
clear.addEventListener('click', () => {
    display.textContent = ' '
    numA = 0
    numB = 0
});


function popNumA(num) {
    if (numA === 0) {
        numA += +num;
    } else {
        numA = +(numA * 10) + +num
    }
    display.textContent = numA
}

function popOp(op) {
    display.textContent += ' ' + op + ' ';
    oper = op;
    
}

function popNumB(num) {
    if (numB === 0) {
        numB += +num;
    } else {
        numB = (numB * 10) + +num
    }
    display.textContent = display.textContent.slice(0, display.textContent.indexOf(oper) + 2) + numB
    
}

function solution(a, b, oper) {
    switch (oper) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '✕':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }

}

function multSolution(a, b, x) {
    display.textContent = ' ';
    numA = solution(a, b, x);
    numB = 0
    oper = x;
    display.textContent = numA + ' ' + oper + ' '

}


