'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

const primeiraPeca = lines.shift().split(' ');
const segundaPeca = lines.shift().split(' ');

const A = primeiraPeca[0]; 
const B = primeiraPeca[1]; 
const C = primeiraPeca[2];

const D = segundaPeca[0]; 
const E = segundaPeca[1]; 
const F = segundaPeca[2];

const TOTAL = (B * C) + (E * F);

console.log("VALOR A PAGAR: R$ " + TOTAL.toFixed(2));