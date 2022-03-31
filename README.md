# calculator
My submission for the Calculator assignment on The Odin Project https://www.theodinproject.com/lessons/foundations-calculator

Problem solving:
1) Understand:
    - Create a webpage which contains a calculator.
    - It should provide all functionality included in this submission here: https://mrbuddh4.github.io/calculator/
    - 
2) Plan:
    - The calculator will have a GUI which includes a display area (for calculations) and standard calculator buttons.
    - Input: the user will interact with the calculator by pressing buttons.
    - Desired output:
        - The user should be able to get accurate results of basic mathematical calculations.
        - When the user selects the "A/C" button, the display area should be cleared.
3) Divide and conquer.
    - Create separate functions for individual operators.
        - Add.
        - Subtract.
        - Divide.
        - Multiply.
    - Create a function which takes two numbers and a mathematical operator (+, -, /, *) then performs the correct operation on the numbers.
    - Create the button layout using HTML buttons.
    - Create the blank display area.
    - Make the display area responsive to multiple items (operators and numbers) [This is optional].
    - Create functions that populate the display when buttons are clicked.
    - Store the "display value" in a variable. This may be easier to do in an object??
    - Add decimal fixing to the answers to prevent overflowing the display. Perhaps run all answers through a 'fixAnswerSize' function.
    - Prevent the user from dividing by zero.
        - After the '/' operator is entered, require the next input to be a number NOT equal to zero
    - Add a backspace button in case the user makes a mistake.
    - Build the program such that it never needs to do operations on more than two numbers at one time.
        - Eg: user enters '99 + 5 / 6 ='. First add (9 + 5) then when the user hits '/', display the result (104) until the user hits the next number (6). At this point, display (6). Then when the users hits '=' perform the operation (104/6) and display the answer.
    - Adapt to corrupt input (eg: the program should handle two operators in sequence '6 // 2 ='. Either ignore the 2nd operator, or display an error message).
        - Solution: require input AFTER an operator to be a number, or 'backspace', 'clear', etc.