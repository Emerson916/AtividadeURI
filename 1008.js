'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

const number = Number(lines[0]);
const horasTrabalhadas = Number(lines[1]);
const salario =  Number(lines[2]);

const total = salario * horasTrabalhadas;

console.log("NUMBER = " + number);
console.log("SALARY = U$ " + total.toFixed(2));