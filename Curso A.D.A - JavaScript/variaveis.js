// VARIÁVEIS

let idade = 21;

console.log(idade);

// Tipos de variáveis

idade = 30;            // Number
let numero = 25;       // Number
let altura = 1.75;     // Number
let nome = "Luiz";     // String (textos)
let estudando = true;  // Boolean


console.log(numero, typeof numero);
console.log(altura, typeof altura);
console.log(nome, typeof nome);
console.log(estudando, typeof estudando);

let outra = undefined;

console.log(outra);

let nula = null;

console.log(nula);

var variavel = 30; // NÃO utilize o VAR

const constante = 100;

constante = 20; // Dará erro pois a variavel "CONST" aceita apenas 1 valor constante, não podendo ser mudado, para mudanças serem possíveis, deve ser usado "LET".