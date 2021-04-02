'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

const valor1 = Number(lines[0]);
const valor2 = Number(lines[1]);

const PROD = valor1 * valor2;

console.log("PROD = " + PROD);