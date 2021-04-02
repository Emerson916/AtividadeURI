'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

const X = lines[0];
const Y = lines[1];

const total = X/Y;

console.log(total.toFixed(3) + " km/l");