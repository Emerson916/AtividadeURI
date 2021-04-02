'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

const raio = Number(lines[0]);
const pi = 3.14159;

const volume = (4.0/3) * pi * Math.pow(raio,3);

console.log("VOLUME = " + volume.toFixed(3));