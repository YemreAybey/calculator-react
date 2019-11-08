import Big from 'big.js';

const operate = (n1, n2, op) => {
  if (n1) {
    n1 = Big(n1);
  }
  if (n2) {
    n2 = Big(n2);
  }
  switch (op) {
    case '+':
      return n1.plus(n2).toString();
    case '-':
      return n1.minus(n2).toString();
    case 'x':
      return n1.times(n2).toString();
    case '÷':
      if (n2.toString() === '0') {
        return 'INFINITY';
      }
      return n1.div(n2).toString();
    case '%':
      return n1.div(100).toString();
    default:
      break;
  }
};

export default operate;
