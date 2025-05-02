/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require("prompt-sync")();

let soma = 0;

for (let cont = 0; cont < 5; cont++) {
    let num = Number(prompt('Digite o número: '))
    soma += num
}

console.log(`A soma dos números digitados é ${soma}`)
