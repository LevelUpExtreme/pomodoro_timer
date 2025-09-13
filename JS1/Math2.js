let num1 = 9.666775;
num1 = Math.floor(num1); // arredonda para baixo  
console.log(num1);
let num2 = 9.666775;
num2 = Math.ceil(num2); // arredonda para cima
console.log(num2);
let num3 = 9.666775;
num3 = Math.round(num3); // arredonda para o número mais próximo
console.log(num3);
console.log(Math.max(9, 5, 10, -2, 150, 3)); // retorna o maior valor
console.log(Math.min(9, 5, 10, -2, 150, 3)); // retorna o menor valor   
console.log(!!(100 / 0)); // infinito é true
const num4 = Math.random(); // retorna um número aleatório entre 0 e 1
console.log(num4);
console.log(Math.random() * (10 - 5) + 5); // retorna um número aleatório entre 5 e 10
console.log (Math.round(Math.random() * (10 - 5) + 5)) ; // retorna um número inteiro aleatório entre 5 e 10
console.log(Math.PI); // retorna o valor de PI
console.log(Math.E); // retorna o valor de Euler
console.log(Math.sqrt(16)); // retorna a raiz quadrada de 16
console.log(Math.pow(2, 10)); // retorna 2 elevado a 10
console.log(4 ** (1/2)); // retorna a raiz quadrada de 4
console.log(27 ** (1/3)); // retorna a raiz cúbica de 27
console.log(Math.cbrt(27)); // retorna a raiz cúbica de 27