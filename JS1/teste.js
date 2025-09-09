/*
console.log("Ola, 'mundo'!");
console.log('Ola, "mundo"!');
console.log(`"Ola", 'mundo'!`);
console.log(`Meu nome é "Misaki" e tenho`, 22, `anos!`);
*/
// comentario de uma linha
/* comentario de
muitas linhas
*/
/*let nome = "Misaki";
let idade = 22;
let usuario = "Carlos";
console.log("Olá Mundo");
        console.log("Console do navegador ");
        //alert("Olá Mundo");
        console.log("Olá ",nome);
        console.log ("CAGUEI VEZES",idade)
        console.log("SOU ",usuario);
// Nao podemos criar Constantes/variaveis com palavras reservadas
// Variaveis/Constantes precisam ter nomes significativos
// Nao pode começar o nome de uma variavel/Constante com um numero    
// Nao podem conter espacos ou traços
// Utilizamos camelCase
// Case-sensitive
// Nao podemos redeclarar variaveis/Constantes com let
// Nao utilize acentos e caracteres especiais
// Utilizamos o padrao Unicode  
// As variaveis/Constantes declaradas com let so existem no bloco onde foram criadas
// Nao utilize var, utilize let (ES6 - 2015)
// Nao utilize const, utilize let (ES6 - 2015)
// Utilizamos const para valores que nao serao alterados
*/
/*
const nome = "Misaki";//String
let idade = 22; //Number
let peso = 57;//Number
let altura = 1.75;//Number
let imc = peso / (altura * altura);
console.log(`${nome} tem ${idade} anos e seu imc é de ${imc}`);
let nomeAluno;// Undefined = Nao aponta para nenhum local na memoria
const sobrenomeAluno = null;// Nulo = Nao aponta para nenhum local na memoriacon
const aprovado = true;// Boolean = true, false 

let a = 2;
let b = a;
a = 3;
console.log(a, b);
let numero = 5;
let numero2 = 2;
numero *= numero2; // numero = numero * numero2 
console.log(numero);
*/
const num1 = 10;
const num2 = parseInt('5');// Number, claro se nao tiver string junto
//parseInt() converte string para numero inteiro
//parseFloat() converte string para numero decimal
//Number() converte string para numero inteiro ou decimal
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log( typeof num2);
