import Big from './big.mjs';

const operate = (n1, n2, op) => {
  n1 = Big(n1);
  n2 = Big(n2);
  if (op == '+') {
    return n1.plus(n2).valueOf();
  } else if (op == '-') {
    return n1.minus(n2).valueOf();
  } else if (op == 'x') {
    return n1.times(n2).valueOf();
  } else if (op == '÷') {
    return n1.div(n2).valueOf;
  } else if (op == '%') {
    return n1.div(100).valueOf();
  }
};

export default operate;
