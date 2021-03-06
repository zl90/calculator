// Get dom nodes
const displayTop = document.querySelector('.display-top');
const displayBottom = document.querySelector('.display-bottom');
const btnAc = document.querySelector('.btn-ac');
const btnDel = document.querySelector('.btn-del');
const btnDivide = document.querySelector('.btn-divide');
const btnMultiply = document.querySelector('.btn-multiply');
const btnSubtract = document.querySelector('.btn-subtract');
const btnAdd = document.querySelector('.btn-add');
const btnEquals = document.querySelector('.btn-equals');
const btn9 = document.querySelector('.btn-9');
const btn8 = document.querySelector('.btn-8');
const btn7 = document.querySelector('.btn-7');
const btn6 = document.querySelector('.btn-6');
const btn5 = document.querySelector('.btn-5');
const btn4 = document.querySelector('.btn-4');
const btn3 = document.querySelector('.btn-3');
const btn2 = document.querySelector('.btn-2');
const btn1 = document.querySelector('.btn-1');
const btn0 = document.querySelector('.btn-0');

// Variables to keep track of the display and math logic
let topDisplayString = '';
let bottomDisplayString = '';
let lastInputType = '';
let firstNum = '';
let secondNum = '';
let operator = '';

// `';.;'``';.;'``';.;'``';.;'`` EVENTS '``';.;'``';.;'``';.;'``';.;'` //
btn9.addEventListener('click', () => {clickButton('9');});
btn8.addEventListener('click', () => {clickButton('8');});
btn7.addEventListener('click', () => {clickButton('7');});
btn6.addEventListener('click', () => {clickButton('6');});
btn5.addEventListener('click', () => {clickButton('5');});
btn4.addEventListener('click', () => {clickButton('4');});
btn3.addEventListener('click', () => {clickButton('3');});
btn2.addEventListener('click', () => {clickButton('2');});
btn1.addEventListener('click', () => {clickButton('1');});
btn0.addEventListener('click', () => {clickButton('0');});
btnAdd.addEventListener('click', () => {clickButton('+');});
btnSubtract.addEventListener('click', () => {clickButton('-');});
btnMultiply.addEventListener('click', () => {clickButton('*');});
btnDivide.addEventListener('click', () => {clickButton('/');});
btnDel.addEventListener('click', () => {clickButton('del');});
btnAc.addEventListener('click', () => {clickButton('AC');});
btnEquals.addEventListener('click', () => {clickButton('=');});


// ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? //
// :.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::. //
// "`-._,-'"`-._,-'"`-._,-'"`-. FUNCTIONS "`-._,-'"`-._,-'"`-._,-'"`-. //
// :.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::. //
// ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ??? //



function clickButton (buttonValue) {
    switch (buttonValue) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (lastInputType === '=') {
                clearDisplay();
            }
            if (firstNum === '') {
                firstNum += buttonValue;
                topDisplayString += buttonValue;
                displayTop.textContent = topDisplayString;
            }
            else if (operator === '') {
                firstNum += buttonValue;
                topDisplayString += buttonValue;
                displayTop.textContent = topDisplayString;
            }
            else if (operator !== '') {
                secondNum += buttonValue;
                topDisplayString += buttonValue;
                displayTop.textContent = topDisplayString;
            }
            lastInputType = 'number';
            break;
        case '/':
        case '*':
        case '+':
        case '-':
            // Operators can ONLY be used if the last input was a number
            if (lastInputType === 'number' && operator === '') {
                operator = buttonValue;
                topDisplayString += buttonValue;
                displayTop.textContent = topDisplayString;
                lastInputType = 'operator';
            } else if (lastInputType === 'number' && operator !== '') {
                // Here we are chaining operations. 
                topDisplayString += buttonValue;
                
                // Calculate answer.
                let answer = operate(firstNum, secondNum, operator);
                operator = buttonValue;
                // Update bottom display with answer.
                bottomDisplayString = answer.toString();
                displayTop.textContent = topDisplayString;
                displayBottom.textContent = bottomDisplayString;
                if (answer === 'DIV0') {
                    displayBottom.textContent = "INFINITY";
                    lastInputType = '=';
                } else {
                    firstNum = answer.toString();
                    secondNum = '';
                    lastInputType = 'operator';
                }
            }
            break;
        case 'del':
            if (lastInputType !== '=' && lastInputType !== '') {
                // Slice the last character off the display string
                let lastChar = topDisplayString[topDisplayString.length-1];
                topDisplayString = topDisplayString.slice(0, (topDisplayString.length - 1));
                // If we've deleted an operator, that means the last character in the equation is now a number
                if (lastInputType === 'operator') {
                    lastInputType = 'number';
                    secondNum = '';
                    operator = '';
                } else if (lastInputType === 'number') {
                    switch (topDisplayString[topDisplayString.length-1]) {
                        case '+':
                        case '-':
                        case '*':
                        case '/':
                            lastInputType = 'operator';
                            secondNum = '';
                            break;
                        case  '':
                            lastInputType = '';
                            firstNum = '';
                            secondNum = '';
                            break;
                        default:
                            firstNum = firstNum.slice(0, -1);
                            lastInputType = 'number';
                            break;
                    }
                }
                displayTop.textContent = topDisplayString;
                displayBottom.textContent = '';
            }
            break;
        case 'AC':
            clearDisplay();
            break;
        case '=':
            callEquals();
            break;
    }
}

function callEquals() {
    // Equals can ONLY be used if the last input was a number
    if (lastInputType === 'number' && operator !== '') {
        // Calculate answer.
        let answer = operate(firstNum, secondNum, operator);
        
        // Update top display with '='.
        topDisplayString += '=';
        // Update bottom display with answer.
        bottomDisplayString = answer.toString();
        displayTop.textContent = topDisplayString;
        displayBottom.textContent = bottomDisplayString;
        if (answer === 'DIV0') {
            displayBottom.textContent = "INFINITY";
        }
        lastInputType = '=';
    }
}

function clearDisplay () {
    operator = '';
    lastInputType = '';
    firstNum = '';
    secondNum = '';
    displayTop.textContent = '';
    displayBottom.textContent = '';
    topDisplayString = '';
    bottomDisplayString = '';
}

function add (a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return Number(a) - Number(b);
}

function divide (a, b) {
    return Number((Number(a) / Number(b)).toFixed(2));
}

function multiply (a, b) {
    return Number(a) * Number(b);
}

function operate (num1, num2, operator) {
    // Create a function which takes two numbers and a mathematical operator (+, -, /, *) then performs the correct operation on the numbers.
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            if (num2 === 0) {
                return 'DIV0';
            }
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2);
        default:
            alert('Error #4447.\nPlease reload the page.');
            break;
    }
}

//    /\                                                        /\
//   |  |                                                      |  |
//  /----\                       LOGIC                        /----\
// [______]                                                  [______]
//  |    |         _____                        _____         |    |
//  |[]  |        [     ]                      [     ]        |  []|
//  |    |       [_______][ ][ ][ ][][ ][ ][ ][_______]       |    |
//  |    [ ][ ][ ]|     |  ,----------------,  |     |[ ][ ][ ]    |
//  |             |     |/'    ____..____    '\|     |             |
//   \  []        |     |    /'    ||    '\    |     |        []  /
//    |      []   |     |   |o     ||     o|   |     |  []       |
//    |           |  _  |   |     _||_     |   |  _  |           |
//    |   []      | (_) |   |    (_||_)    |   | (_) |       []  |
//    |           |     |   |     (||)     |   |     |           |
//    |           |     |   |      ||      |   |     |           |
//  /''           |     |   |o     ||     o|   |     |           ''\
// [_____________[_______]--'------''------'--[_______]_____________]

