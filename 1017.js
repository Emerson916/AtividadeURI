'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

const tempo = Number(lines[0]);
const velocidade = Number(lines[1]);

const total = (tempo * velocidade) / 12;

console.log(total.toFixed(3));