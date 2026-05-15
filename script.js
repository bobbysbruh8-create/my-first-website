const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    const action = button.dataset.action;

    if (number !== undefined) {
      if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
      }
      currentInput += number;
      display.textContent = currentInput;
    }

    if (action !== undefined) {
      if (action === 'clear') {
        currentInput = '';
        display.textContent = '0';
      } else if (action === 'delete') {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
      } else if (action === '=') {
        try {
          currentInput = eval(currentInput).toString();
          display.textContent = currentInput;
          resultDisplayed = true;
        } catch {
          display.textContent = 'Error';
          currentInput = '';
        }
      } else {
        if (resultDisplayed) resultDisplayed = false;
        currentInput += action;
        display.textContent = currentInput;
      }
    }
  });
});