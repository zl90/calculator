// Get dom nodes
const displayTop = document.querySelector('.display-top');
const displayBottom = document.querySelector('.display-bottom');
const btnAc = document.querySelector('.btn-ac');
const btnDel = document.querySelector('.btn-del');
const btnDivide = document.querySelector('.btn-divide');
const btnMultiply = document.querySelector('.btn-multiply');
const btnSubtract = document.querySelector('.btn-subtract');
const btnAdd = document.querySelector('.btn-add');
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


// ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ //
// :.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::. //
// "`-._,-'"`-._,-'"`-._,-'"`-. FUNCTIONS "`-._,-'"`-._,-'"`-._,-'"`-. //
// :.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::.:.:.:.:.:.::. //
// ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ ≈ //

function add (a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return Number(a) - Number(b);
}

function divide (a, b) {
    // May need to check division by zero here
    return Number(a) / Number(b);
}

function subtract (a, b) {
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

