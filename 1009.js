'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

const nome = lines[0];
const salario = Number(lines[1]);
const totalVendas = Number(lines[2]);

const bonus = totalVendas * 0.15;

const salarioComBonus = salario + bonus;

console.log("TOTAL = R$ " + salarioComBonus.toFixed(2));