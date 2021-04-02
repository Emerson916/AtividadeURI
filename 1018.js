'use  strict'

const lines = prompt('Digite os valores de entrada ').split(' ');

let numero = lines[0];
let qtdNotas100 = 0;
let qtdNotas50 = 0;
let qtdNotas20 = 0;
let qtdNotas10 = 0;
let qtdNotas5 = 0;
let qtdNotas2 = 0;
let qtdNotas1 = 0;

console.log(numero);

if(numero >= 100){
    qtdNotas100 = parseInt(numero / 100);

    numero = numero % 100;
}
if(numero >= 50){
    qtdNotas50 = parseInt(numero / 50);
    
    numero = numero % 50;
}
if(numero >= 20){
    qtdNotas20 = parseInt(numero / 20);
    
    numero = numero % 20;
}
if(numero >= 10){
    qtdNotas10 = parseInt(numero / 10);
    
    numero = numero % 10;
}
if(numero >= 5){
    qtdNotas5 = parseInt(numero / 5);
    
    numero = numero % 5;
}
if(numero >= 2){
    qtdNotas2 = parseInt(numero / 2);
    
    numero = numero % 2;
}
if(numero >= 1){
    qtdNotas1 = parseInt(numero / 1);
    
    numero = numero % 1;
}

console.log(qtdNotas100 + " nota(s) de R$ 100,00");
console.log(qtdNotas50 + " nota(s) de R$ 50,00");
console.log(qtdNotas20 + " nota(s) de R$ 20,00");
console.log(qtdNotas10 + " nota(s) de R$ 10,00");
console.log(qtdNotas5 + " nota(s) de R$ 5,00");
console.log(qtdNotas2 + " nota(s) de R$ 2,00");
console.log(qtdNotas1 + " nota(s) de R$ 1,00");
