function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(5, 3, '+')); // 8

function filterEvens(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(filterEvens([1, 2, 3, 4, 5])); // [2, 4]

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("racecar")); // true