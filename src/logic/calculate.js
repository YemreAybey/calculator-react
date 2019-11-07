import operate from './operate';

const calculate = ({ total, next, operation }, btnName) => {
  switch (btnName) {
    case '+/-':
      if (next === '') {
        total *= -1;
      } else {
        next *= -1;
      }
      return { total, next };
    case 'AC':
      total = '';
      next = '';
      operation = null;
      return { total, next, operation };
    case '%':
      if (next === '') {
        total = operate(total, null, btnName);
        return { total };
      } else {
        next = operate(next, null, btnName);
        return { next };
      }
    case '.':
      if (next === '') {
        if (!total.includes('.')) {
          total += '.';
          return { total };
        }
      } else {
        if (!next.includes('.')) {
          next += '.';
          return { next };
        }
      }
      break;
    case '=':
      if (operation !== '') {
        total = operate(total, next, operation);
        next = '';
        operation = '';
        return { total, next, operation };
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
      return { total, next, operation };
    default:
      if (next === '') {
        next = btnName;
      } else {
        next += btnName;
      }
      return { next };
  }
};

export default calculate;
