function sum(num1, ...num2) {
  let result = num1;
  for (let i = 0; i < num2.length; i++) {
    result += num2[i];
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
