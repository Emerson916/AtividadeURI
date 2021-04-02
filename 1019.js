'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');var lines = input.split('\n');

const N = parseInt(lines.shift()); 
const N2 = N % 3600;
const N3 = N2 % 60;

const horas = parseInt(N / 3600);

const minutos = parseInt(N2 / 60);

const segundos = parseInt(N3);

console.log(horas + ":" + minutos + ":" + segundos);