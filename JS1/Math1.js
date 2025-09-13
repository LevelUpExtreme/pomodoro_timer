let numOi = 0.7; //number
let numOi2 = 0.1; //number
//console.log(numOi.toString() + numOi2);
//console.log(numOi.toString(3)); // converte para binário
//console.log(numOi.toFixed(2)); // limita o número de casas decimais
//console.log(Number.isInteger(numOi)); // verifica se é um número inteiro
//console.log(Number.isNaN(numOi)); // verifica se é um NaN
//console.log(Number.isNaN(numOi * 'oi')); // verifica se é um NaN
//console.log(parseFloat('99.50')); // converte string para float
//console.log(parseInt('99.50')); // converte string para int
//console.log(parseInt('100 reais')); // converte string para int, parando no primeiro caractere que não é número
numOi += numOi2; // atribuição com adição
numOi += numOi2; 
numOi += numOi2;

//numOi = numOi.toFixed(2);
numOi = Number(numOi.toFixed(2)); // arredonda o número para 2 casas decimais e converte para número
console.log(numOi);
console.log(Number.isInteger(numOi )); // verifica se é um número inteiro

numOi = ((numOi * 100) + (numOi2 * 100)) / 100; // evita problemas de precisão com números decimais
console.log(numOi);

// Math - objeto nativo do JavaScript que possui propriedades e métodos para constantes e funções matemáticas




let num1 = 9.666775;
num1 = Math.floor(num1); // arredonda para baixo  
console.log(num1);

let num2 = 9.666775;
num2 = Math.ceil(num2); // arredonda para cima
console.log(num2);
console.log(Math.max(9, 5, 10, -2, 150, 3)); // retorna o maior valor
console.log(Math.min(9, 5, 10, -2, 150, 3)); // retorna o menor valor

console.log(Math.random()); // retorna um número aleatório entre 0 e 1
console.log(Math.random() * (10 - 5) + 5); // retorna um número aleatório entre 5 e 10      




