import operate from './operate';

const calculate = ({ total, next, operation }, btnName) => {
  switch (btnName) {
    case '+/-':
      if (next === '') {
        total *= -1;
      } else {
        next *= -1;
      }
      break;
    case 'AC':
      total = '';
      next = '';
      break;
    case '%':
      if (next === '') {
        total = operate(total, null, btnName);
      } else {
        next = operate(next, null, btnName);
      }
      break;
    case '.':
      if (next === '') {
        if (!total.includes('.')) {
          total += '.';
        }
      } else {
        if (!next.includes('.')) {
          next += '.';
        }
      }
      break;
    case '=':
      if (operation !== '') {
        total = (total, next, operation);
        next = '';
        operation = '';
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (operation !== '') {
        total = operate(total, next, operation);
        next = '';
        operation = btnName;
      } else {
        operation = btnName;
        total = next;
        next = '';
      }
      break;
    default:
      if (next === '') {
        next = btnName;
      } else {
        next += btnName;
      }
      break;
  }
};

export default calculate;
