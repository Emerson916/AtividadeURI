'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

const valores = input.split("\n");

const [x1, y1] = valores[0].split(" ");
const [x2, y2] = valores[1].split(" ");

const distancia = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

console.log(distancia.toFixed(4));