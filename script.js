let a = document.getElementById("a").addEventListener("submit", Answer);
let b =  document.getElementById("b").addEventListener("submit", Answer);
let c =  document.getElementById("c").addEventListener("submit", Answer);
let product = a * c;
let sum = b;
let factor = 0;
let factor2 = 0;
let b1f1 = 0;
let b1f2 = 0;
let b2f1 = 0;
let b2f2 = 0;

if (product > 0) {
  if (sum > 0) {
    for (let i = 1; i < product; i++) {
      if (product % i === 0 && product / i + i === sum) {
        factor = Math.floor(product / i);
        factor2 = i;
        console.log(`${a}x^2 + ${factor}x + ${factor2}x + ${c}`);
        break;
      }
    }

    if (a > factor) {
      for (let i = 1; i < a; i++) {
        if (a % i === 0 && factor % i === 0) {
          b1f1 = i;
          b2f1 = Math.floor(a / i);
          b2f2 = Math.floor(factor / i);
        }
      }
    } else if (a < factor) {
      for (let i = 1; i < factor; i++) {
        if (a % i === 0 && factor % i === 0) {
          b1f1 = i;
          b2f1 = Math.floor(a / i);
          b2f2 = Math.floor(factor / i);
        }
      }
    } else {
      b1f1 = factor;
      b2f1 = 1;
      b2f2 = 1;
    }

    if (c > factor2) {
      for (let i = 1; i < c; i++) {
        if (c % i === 0 && factor2 % i === 0) {
          b1f2 = i;
          if (b2f1 === factor2 / i && b2f2 === c / i) {
            break;
          }
