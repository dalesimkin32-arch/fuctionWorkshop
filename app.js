console.log(`Halo Whirled`);

function sayHello() {
  console.log(`Halo Whirled`);
}

sayHello();
sayHello();
sayHello();

function sayHelloTo(userName) {
  console.log(`Halo ` + userName + `!`);
}

sayHelloTo(`Bob`);
sayHelloTo(`Jimmy`);
sayHelloTo(`Alice`);

function greet(greeting, userName) {
  console.log(greeting + " " + userName);
}

greet("Good morning", "Bob");
greet("Benos Dias", "Alice");
greet("Bonjour", "Agnes");
greet("Dobre Ootre", "Vladimir");

function add(a, b) {
  return a + b;
}

const result = add(1, 5);
console.log(" The result is", result);
const anotherResult = add(2, 10);
console.log(" Another result is", anotherResult);

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === !"/") {
    return divide(a, b);
  }
}

const result2 = calculate(1, 5, "+");
console.log("The result is", result2);

const anotherResult2 = calculate(2, 10, "*");
console.log("Another result is", anotherResult2);

function nFactorial(n) {
  if (n > 0) {
    return n * nFactorial(n - 1);
  } else {
    return 1;
  }
}

const funkyNumber = nFactorial(7);
console.log("7! = " + funkyNumber);
