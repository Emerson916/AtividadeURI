'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

 const valor = lines.shift().split(' '); 

const A = parseFloat(valor[0]); 
const B = parseFloat(valor[1]); 
const C = parseFloat(valor[2]);

console.log("TRIANGULO: " + parseFloat((A * C)/2).toFixed(3)); 
console.log("CIRCULO: " + parseFloat(3.14159 * Math.pow(C,2)).toFixed(3)); 
console.log("TRAPEZIO: " + parseFloat(((A + B)/2) * C).toFixed(3)); 
console.log("QUADRADO: " + parseFloat(Math.pow(B,2)).toFixed(3)); 
console.log("RETANGULO: " + parseFloat(A * B).toFixed(3));