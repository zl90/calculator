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
        - Divide.2
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

  .--.      .--.      .--.      .--.      .--.      .--.      .--.      .--.
:::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\::::::::.\
'      `--'      `--'      `--'      `--'      `--'      `--'      `--'      `
              Challenge: How to handle the flow of the program.

Rough solution:
1) Allow the user to populate a string by pressing the buttons with no restrictions.
2) Once the user presses the Equals button, parse the string.
    - Could use an external library for this: https://github.com/silentmatt/expr-eval/tree/master
    - Or build my own very basic parser.
3) If the equation makes sense, calculate it and return the result.
4) If the equation is riddled with errors, report an error message.

Another rough solution:
1) Carefully handle every button press with variables.
   Need to track:
    - Last input type (number, AC, del, operator).
    - First number (variable1).
    - Operator (variable2).
    - Second number (variable3).

Example user case:
User presses '5' --> Append to variable1. Update lastInputType. Wait for more input.
User presses '6' --> Append to variable1. Update lastInputType. Wait for more input.
User presses '/' --> Append to variable2. Update lastInputType. Require next input to be a number  [non-zero] or  'AC'/'del'.
User presses '+' --> Do nothing.
User presses '7' --> Append to variable3. Wait for more input.
User presses '+' --> Call operate(variable1, variable3, variable2). Replace variable1 with the result, print result to screen. Replace variable2 with '+'. Wait for more input.
User presses 'del' --> Can either do nothing, like this submission: https://artis-dev.github.io/calculator/ or clear variable2 and update lastInputType to 'number'. Wait for more input. Display the previous answer on the screen.
