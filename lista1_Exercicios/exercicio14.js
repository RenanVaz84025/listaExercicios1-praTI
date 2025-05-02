/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require("prompt-sync")();

let num = Number(prompt('Digite um número para calcular o fatorial: '))

let fatorial = 1

for (let cont = num; cont > 1; cont--) {
    fatorial *= cont       
}

console.log(`O fatorial do número ${num} é : ${fatorial}`)